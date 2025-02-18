document.addEventListener("DOMContentLoaded", function(){
    const menuBar = document.getElementById("menu-bar");
    const mobileCategory = document.getElementById("mobile-category");

    menuBar.addEventListener("click", function(){
        if (mobileCategory.style.display === "flex") {
            mobileCategory.style.display = "none"; // 닫기
        } else {
            mobileCategory.style.display = "flex"; // 열기
        }
    });

});