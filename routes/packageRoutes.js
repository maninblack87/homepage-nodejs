const express = require("express");
const router = express.Router();
const { getStandard, getBreakfast, getDinner } = require("../controllers/packageController");

// 스탠다드 패키지 페이지
router
    .route("/standard")
    .get(getStandard)
    ;

// 조식 패키지 페이지
router
    .route("/breakfast")
    .get(getBreakfast)
    ;

// 디너 패키지 페이지
router
    .route("/dinner")
    .get(getDinner)
    ;

// 내보내기
module.exports = router;