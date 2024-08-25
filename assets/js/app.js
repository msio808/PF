const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');

let index = 0;

nextButton.addEventListener('click', () => {
    index = (index + 1) % carouselItems.length;
    carouselContainer.style.transform = `translateX(-${index * 100}%)`;
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + carouselItems.length) % carouselItems.length;
    carouselContainer.style.transform = `translateX(-${index * 100}%)`;
});
