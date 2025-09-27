//NAV

// --- SLIDER JS ---
let index = 0;
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const total = images.length;

function showSlide(i) {
    index = (i + total) % total;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => showSlide(index + 1));
document.querySelector(".prev").addEventListener("click", () => showSlide(index - 1));

// Défilement automatique toutes les 4 secondes
setInterval(() => {
    showSlide(index + 1);
}, 4000);