const express = require("express");
const router = express.Router();
const { getRegister, registerUser, getLogin, loginUser, logoutUser } = require("../controllers/userController");

// 회원가입
router
    .route("/register")
    .get(getRegister)
    .post(registerUser)
    ;

// 로그인
router
    .route("/login")
    .get(getLogin)
    .post(loginUser)
    ;

// 로그아웃
router
    .route("/logout")
    .get(logoutUser)
    ;

// 내보내기
module.exports = router;