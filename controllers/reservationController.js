const asyncHandler = require("express-async-handler");
const Reservation = require("../models/reservationModel");

// 예약 페이지로 접속 함수
const getReservation = (req, res) => {
    res.render("reservation");
}

// 예약 처리 함수
const reservationPackage = asyncHandler(async(req, res)=>{
    try{
        const { package, dayNumber } = req.body;
        const customer = res.locals.user.id;
        
        if (!res.locals.user || !res.locals.user.id) {
            return res.status(401).json({ message: "로그인이 필요합니다." });
        }

        const reservation = await Reservation.create({customer, package, dayNumber});
        res.redirect("/");

    }catch(error){
        console.error("예약처린린 중 오류 발생:", error);
        res.status(500).json({
            message: "예약처리 중 오류가 발생했습니다.",
            error: error.message,
        });
    };

});

// 예약 현황 페이지로 접속 함수
const getMyReservation = asyncHandler( async (req, res) =>{

    try{
        // 로그인한 사용자 ID 가져오기
        if (!res.locals.user || !res.locals.user.id) {
            return res.status(401).json({ message: "로그인이 필요합니다." });
        }

        // 해당 사용자의 예약 내역 조회
        const reservations = await Reservation.find({ customer: res.locals.user.id });

        if (!reservations) {
            return res.status(404).json({ message: "예약 내역이 없습니다." });
        }

        res.render("myReservation", {reservations});
    }catch(error){
        console.error("예약 조회 중 오류 발생:", error);
        res.status(500).json({
            message: "예약 조회 중 오류가 발생했습니다.",
            error: error.message,
        });
    }

    
});

// 내보내기
module.exports = {
    getReservation,
    reservationPackage,
    getMyReservation,
}