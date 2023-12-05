document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const resetButton = document.getElementById('resetButton');

    function createGrid(size) {
        container.innerHTML = '';
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
        container.style.width = `${size * 60}px`; // Adjust the size based on the number of squares
        addHoverEffect();
    }

    function addHoverEffect() {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.addEventListener('mouseover', handleHover);
        });
    }

    function handleHover(e) {
        e.target.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        const randomColor = () => Math.floor(Math.random() * 256);
        return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }

    resetButton.addEventListener('click', () => {
        const newSize = prompt('Enter the number of squares per side (max 100):');
        const size = Math.min(Math.max(parseInt(newSize) || 16, 1), 100);
        createGrid(size);
    });

    // Initial grid creation
    createGrid(16);
});
