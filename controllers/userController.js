const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;

// 회원 가입 페이지 접속 함수
const getRegister = (req, res) => {
    res.render("register");
};

// 회원 가입 처리 함수
const registerUser = asyncHandler(async(req, res)=> {
    try {
        const {id, password1, password2, telephone, email} = req.body;
        
        // id가 중복되는지 확인
        const existingUser = await User.findOne({ id });
        if (existingUser) {
            return res.status(400).json({ message: "이미 존재하는 아이디입니다." });
        }

        // 비밀번호가 제대로 입력되었는지 확인 후,
        // 비밀번호 해싱 후 사용자 정보를 DB에 등록한다
        if (password1 === password2) {
            const hashedPassword = await bcrypt.hash(password1, 10); // 비밀번호 해싱
            const user = await User.create({id, password: hashedPassword, telephone, email});
            res.redirect("/");
        }
    } catch (error) {
        console.error("회원가입 중 오류 발생:", error);
        res.status(500).json({
            message: "회원가입 중 오류가 발생했습니다.",
            error: error.message,
        });
    }
});

// 로그인 페이지 접속 함수
const getLogin = (req, res) => {
    res.render("login");
}

// 로그인 처리 함수
const loginUser = asyncHandler(async(req, res)=> {
    const {id, password} = req.body;

    const user = await User.findOne({id});
    if (!user) {
        return res.json({message: "존재하지 않는 아이디입니다"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.json({message: "비밀번호가 일치하지 않습니다"});
    }

    const token = jwt.sign({id: user._id}, jwtSecret);
    res.cookie("token", token, {httpOnly: true});

    // 관리자 로그인 처리
    if (id === "admin") {
        return res.redirect("/admin");  // 관리자 페이지로 리디렉션
    }

    res.redirect("/");
});

// 로그아웃 처리 함수
const logoutUser = (req, res) => {
    res.clearCookie("token"); // JWT 토큰 제거
    res.redirect("/"); // 홈으로 리디렉트
};

// 내보내기
module.exports = {
    getRegister,
    registerUser,
    getLogin,
    loginUser,
    logoutUser,
};