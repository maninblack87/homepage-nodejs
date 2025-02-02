document.addEventListener("DOMContentLoaded", function () {
    const sliderImage = document.getElementById("slider-image");
    const images = ["/img/slider1.jpg", "/img/slider2.jpg", "/img/slider3.jpg"]; // 변경할 이미지 목록
    let currentIndex = 0;

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        sliderImage.style.backgroundImage = `url(${images[currentIndex]})`;
    }

    setInterval(changeBackgroundImage, 7000); // 7초마다 변경
});