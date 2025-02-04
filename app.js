const express = require("express");
const asyncHandler = require("express-async-handler");
const cookieParser = require("cookie-parser");  // ?? 이게 정확히 뭐 할때 쓰는거지??
const dbConnect = require("./config/dbConnect");
const authenticationMidware = require("./midware/authenticationMidware");

// express로 애플리케이션 생성
const app = express();

// 데이터베이스 연결
dbConnect();

// views엔진을 ejs 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 폴더 연결
app.use(express.static("./public"));

// 라우터 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// 사용자 로그인시 인증 미들웨어 사용
app.use(authenticationMidware);

// 라우트 미들웨어 사용
app.use("/", require("./routes/userRoutes"));              
app.use("/", require("./routes/reservationRoutes"));    

// 기본 라우트 추가 
app.get("/", asyncHandler(async(req, res) => {
    res.render("index");
}));

// 로컬호스트:3000 접속
app.listen(3000, () => {
    console.log("homepage에서 서버 실행 중")
});