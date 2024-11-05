const colorsSection = document.getElementById('colors');

function showColors() {
    const colorButtons = ['Red', 'Blue', 'Green'];
    colorsSection.innerHTML = '<h2>Learn Colors</h2>';
    
    colorButtons.forEach(color => {
        const button = document.createElement('button');
        button.textContent = color;
        button.classList.add('color-button'); 
        button.style.backgroundColor = color.toLowerCase(); 
        button.onclick = () => alert(`This is ${color}!`);
        colorsSection.appendChild(button);
    });
}
showColors();

// top button
const goToTopButton = document.createElement('button');
goToTopButton.textContent = "Go to Top";
goToTopButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
goToTopButton.classList.add('go-to-top-button'); 
document.body.appendChild(goToTopButton);

// shows the button when scrolls down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
};

// number
const numbersSection = document.getElementById('numbers');

function showNumbers() {
    numbersSection.innerHTML = '<h2>Learn Numbers</h2>';
    
    for (let i = 1; i <= 3; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('number-button'); 
        button.onclick = () => alert(`You clicked number ${i}!`);
        numbersSection.appendChild(button);
    }
}

showNumbers();

const animalsSection = document.getElementById('animals');
const shapesSection = document.getElementById('shapes');

// animal
const modal = document.getElementById('animal-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close-button');


function showModal(animal) {
    modalTitle.textContent = animal.name;
    modalImage.src = animal.image;
    modalDescription.textContent = `This is a ${animal.name}!`;
    modal.style.display = 'block';
}


closeButton.onclick = function() {
    modal.style.display = 'none';
}


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// animal
function showAnimals() {
    const animals = [
        { name: 'Dog', image: 'images/dog.jpg' },
        { name: 'Cat', image: 'images/cat.jpg' },
        { name: 'Cow', image: 'images/cow.jpg' },
    ];
    
    animalsSection.innerHTML = '<h2>Learn Animals</h2>';
    
    animals.forEach(animal => {
        const button = document.createElement('button');
        button.textContent = animal.name;
        button.classList.add('animal-button'); 
        button.style.backgroundImage = `url(${animal.image})`; 
        button.style.backgroundSize = 'cover'; 
        button.onclick = () => showModal(animal); // Show modal on click
        animalsSection.appendChild(button);
    });
}
showAnimals();

// shape
function showShapes() { 
    const shapes = [
        { name: 'Circle', image: 'images/circle.jpg' },
        { name: 'Square', image: 'images/square.png' },
        { name: 'Triangle', image: 'images/triangle.jpg' },
    ];

    shapesSection.innerHTML = '<h2>Learn Shapes</h2>';
    
    shapes.forEach(shape => {
        const button = document.createElement('button');
        button.textContent = shape.name;
        button.classList.add('shape-button'); 
        button.style.backgroundImage = `url(${shape.image})`;
        button.style.backgroundSize = 'cover';
        button.onclick = () => alert(`This is a ${shape.name}!`); 
        shapesSection.appendChild(button);
    });
}
showShapes();