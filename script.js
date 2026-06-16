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
    startFloatingElements(); // We updated the function name
});

// Create floating background elements (hearts, white tulips, white roses)
function startFloatingElements() {
    // These are the emojis we will use
    const elements = ['❤️', '🌷', '🌹']; 

    setInterval(() => {
        // Create the element
        const floater = document.createElement('div');
        floater.classList.add('heart'); // We reuse the 'heart' style for animation

        // Randomly pick which emoji to show
        const randomIndex = Math.floor(Math.random() * elements.length);
        floater.innerText = elements[randomIndex];
        
        // Randomize the starting horizontal position
        floater.style.left = Math.random() * 100 + 'vw';
        
        // Randomize the duration of the float animation (makes it look natural)
        floater.style.animationDuration = (Math.random() * 2 + 3) + 's'; 
        
        // Add it to the screen
        heartsContainer.appendChild(floater);

        // Remove the element after the animation finishes
        setTimeout(() => {
            floater.remove();
        }, 5000);
    }, 350); // Slightly slower interval to avoid overcrowding with complex emojis
}
