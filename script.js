let mode = 'black';
let container = document.querySelector("#container");
makeGrid(16);
makeBoxListeners();




// button which prompts to change size
let resizeButton = document.querySelector('#resize');
let size;
resizeButton.addEventListener('click', function() {
    do {
        size = prompt("Enter a grid size less than 100");
    } while (size >= 100);
    console.log(size);
    size = parseInt(size);
    console.log(size);
    if (!isNaN(size)) {
        container.innerHTML = '';
        makeGrid(size);
        makeBoxListeners();
    }
    
});

//button which clears grid
let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {box.style.cssText = 'background-color: white;'});
});

// rainbow mode button
let rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', function(){mode = 'color'});

// black mode button
let blackButton = document.querySelector('#black');
blackButton.addEventListener('click', function(){mode = 'black'});


function makeGrid(n) {
    // Outer loop creates column
    for (let i = 0; i < n; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
        // inner loop creates n boxes in each column
        for (let k = 0; k < n; k++) {
            const div = document.createElement('box');
            div.classList.add('box');
            column.appendChild(div);
        }
    }
}

// add event listener to draw on etch a sketch
function makeBoxListeners() {
    let mouseIsDown = false
    document.addEventListener('mousedown', function(){mouseIsDown = true});
    document.addEventListener('mouseup', function(){mouseIsDown = false});
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {box.addEventListener('mouseover', function (e) {
        if(mouseIsDown) {
            if (mode === 'black') {
                console.log(e.target);
                e.target.style.cssText = 'background-color: black;';
            }
            else {
                e.target.style.cssText = 'background-color: ' + randColor();
            }
        }
    })});
}

function randColor() {
    rVal = Math.floor(Math.random() * 256);
    gVal = Math.floor(Math.random() * 256);
    bVal = Math.floor(Math.random() * 256);
    return `rgb(${rVal},${gVal},${bVal})`;
}