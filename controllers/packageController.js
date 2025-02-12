// 스위트룸 패키지 페이지로 접속 함수
const getStandard = (req, res) => {
    res.render("packages/standard");
}

// 조식 패키지 페이지로 접속 함수
const getBreakfast = (req, res) => {
    res.render("packages/breakfast");
}

// 디너 패키지 페이지로 접속 함수
const getDinner = (req, res) => {
    res.render("packages/dinner");
}

// 내보내기
module.exports = {
    getStandard,
    getBreakfast,
    getDinner,
}