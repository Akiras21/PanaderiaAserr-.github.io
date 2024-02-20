const slider = document.querySelector(".slider");
const antesButton = document.querySelector(".antes");
const despuesButton = document.querySelector(".despues");
const images = document.querySelectorAll(".slider img");

let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function moveNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function movePrevious() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

despuesButton.addEventListener("click", moveNext);
antesButton.addEventListener("click", movePrevious);


