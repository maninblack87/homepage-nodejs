const jwt = require("jsonwebtoken");
require("dotenv").config();

// JWT 토큰을 확인하는 미들웨어 추가
const authenticationMidware = ((req, res, next) => {
    const token = req.cookies.token;
    
    if (token) {

        // 로그인 상태
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            res.locals.isAuthenticated = true;  
            console.log("로그인 상태: isAuthenticated = true", decoded);

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
});

// 내보내기
module.exports = authenticationMidware;