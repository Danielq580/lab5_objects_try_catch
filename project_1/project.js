const toTopButton = document.querySelector('.toTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        toTopButton.style.display = 'block';
    } else {
        toTopButton.style.display = 'none';
    }
});

toTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const colorButtons = document.querySelectorAll('.color-option');
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = button.dataset.color;
    });
});

const numberButtons = document.querySelectorAll('.number-option');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        modalContent.innerText = `You selected number: ${button.innerText}`;
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

let currentSlide = 0;
const slides = document.querySelectorAll('.animal-slide');
const nextButton = document.querySelector('.next-slide');
const prevButton = document.querySelector('.prev-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

showSlide(currentSlide);