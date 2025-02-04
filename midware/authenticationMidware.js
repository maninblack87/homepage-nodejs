const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

// JWT 토큰을 확인하는 미들웨어 추가
const authenticationMidware = async (req, res, next) => {
    const token = req.cookies.token;
    
    if (token) {

        // 로그인 상태
        try {

            // JWT 토큰 검증
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // DB에서 사용자 정보 조회
            const user = await User.findById(decoded.id);

            if (user) {
                // 로그인된 사용자 정보와 상태 설정
                res.locals.isAuthenticated = true;
                res.locals.user = {
                    id : user.id,   // 로그인 된 사용자 정보 중 id를 설정
                };
                console.log("로그인 상태: isAuthenticated = true", res.locals.user);
            } else {
                res.locals.isAuthenticated = false;
                res.locals.user = null;
                console.log("사용자 정보 없음: isAuthenticated = false");
            }

        // 토큰이 유효하지 않음
        } catch (error) {
            res.locals.isAuthenticated = false; 
            console.log("유효하지 않은 토큰: isAuthenticated = false", error.message);
        }
        
    // 토큰 없음 (로그아웃 상태)
    } else {
        res.locals.isAuthenticated = false; 
        console.log("로그인되지 않음: isAuthenticated = false");
    }
    
    next();
};

// 내보내기
module.exports = authenticationMidware;