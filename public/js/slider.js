document.addEventListener("DOMContentLoaded", function () {
    const sliderImage = document.getElementById("slider-image");
    const images = ["/img/slider1.jpg", "/img/slider2.jpg", "/img/slider3.jpg"]; // 변경할 이미지 목록
    let currentIndex = 0;

    // 이미지를 변경하는 함수
    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length; // 자동으로 다음 이미지로 변경
        sliderImage.style.backgroundImage = `url(${images[currentIndex]})`;
    }

    // '이전' 버튼 클릭 시
    document.getElementById("prev-btn").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // 이전 이미지로 변경
        sliderImage.style.backgroundImage = `url(${images[currentIndex]})`;
    });

    // '다음' 버튼 클릭 시
    document.getElementById("next-btn").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length; // 다음 이미지로 변경
        sliderImage.style.backgroundImage = `url(${images[currentIndex]})`;
    });

    // 자동으로 슬라이드 변경
    setInterval(changeBackgroundImage, 7000); // 7초마다 자동 변경

    // 초기 이미지 설정
    sliderImage.style.backgroundImage = `url(${images[currentIndex]})`;
});