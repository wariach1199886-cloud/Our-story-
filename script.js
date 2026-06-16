const nameInput = document.getElementById('nameInput');
const nextBtn = document.getElementById('nextBtn');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const heartsContainer = document.getElementById('heartsContainer');

// Show the "Open It" button when she starts typing
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim().length > 2) {
        nextBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.add('hidden');
    }
});

// Transition to the journey screen when clicked
nextBtn.addEventListener('click', () => {
    screen1.classList.add('hidden');
    screen2.classList.remove('hidden');
    startHearts();
});

// Create floating background hearts
function startHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; 
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
