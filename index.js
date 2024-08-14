const container = document.querySelector('.container');
const button = document.getElementById('resizeButton');
const totalSize = 500;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

console.log(getRandomColor());

console.log(Math.floor(Math.random() * 16));
  
  
  
 
function createGrid(size) {
    container.innerHTML = '';

    const squareSize = totalSize / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);     

        square.addEventListener('mouseover',() => {
            square.style.backgroundColor = getRandomColor();
        })

        container.appendChild(square);
    }

   
}

button.addEventListener('click', ()=>{
    let numSquares = parseInt(prompt("Enter the number of squares per size (max 100):", '16'), 10);

    if(isNaN(numSquares) || numSquares <=0) {
        alert('Invalid input. Please enter a positive number.');
        return;
    }

    if (numSquares > 100) {
        alert('Number exceeds the maximum allowed (100). Setting to 100.');
        numSquares = 100;
    }

    createGrid(numSquares);
})

createGrid(16);