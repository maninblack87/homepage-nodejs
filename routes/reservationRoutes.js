const express = require("express");
const router = express.Router();    
const { getReservation, reservationPackage, getMyReservation } = require("../controllers/reservationController");
const authenticationMidware = require("../midware/authenticationMidware"); 

// 예약 페이지
router
    .route("/reservation")
    .get(getReservation)
    .post(reservationPackage)
    ;

// 예약 확인 페이지
router.get("/my-reservation", authenticationMidware, getMyReservation);

// 내보내기
module.exports = router;