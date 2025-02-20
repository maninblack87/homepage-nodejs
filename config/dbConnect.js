const mongoose = require("mongoose");
require("dotenv").config();

// userDB에 접속하는 함수
const dbConnect = async() => {
    try{
        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log("User Database Connected");
    }catch(err){
        console.log(err);
    }
};

// 내보내기
module.exports = dbConnect;

