const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const slideWidth = slides[0].offsetWidth + 20; // Considerando a margem de 10px em cada lado
const visibleSlides = 3;
const totalSlides = slides.length;

let currentSlide = 0;

slider.style.width = `${slideWidth * totalSlides}px`;

function showSlide() {
  const startPosition = -currentSlide * slideWidth + (sliderContainer.offsetWidth - slideWidth) / 2;
  slider.style.transform = `translateX(${startPosition}px)`;
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > totalSlides - visibleSlides) {
    currentSlide = totalSlides - visibleSlides;
  }
  showSlide();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 0;
  }
  showSlide();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide();
