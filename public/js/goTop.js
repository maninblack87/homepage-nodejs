document.addEventListener("DOMContentLoaded", function(){

    // 버튼 요소 가져오기
    const goTopBtn = document.getElementById("go-top-btn");

    // 클릭 이벤트 추가
    goTopBtn.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});