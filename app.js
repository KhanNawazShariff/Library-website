const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".controls i:nth-child(1)");
const rightArrow = document.querySelector(".controls i:nth-child(2)");
let currentIndex = 0;

rightArrow.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
