let container = document.querySelector("#container");
makeGrid(16);
makeBoxListeners();




// button which prompts to change size
let button = document.querySelector('button');
let size;
button.addEventListener('click', function() {
    do {
        size = prompt("Enter a grid size less than 100");
    } while (size >= 100);
    size = parseInt(size);
    container.innerHTML = '';
    makeGrid(size);
    makeBoxListeners();
});



function makeGrid(n) {
    // Outer loop creates column
    for (let i = 0; i < n; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
        // inner loop creates 16 boxes in each column
        for (let k = 0; k < n; k++) {
            const div = document.createElement('box');
            div.classList.add('box');
            column.appendChild(div);
        }
    }
}

// add event listener to draw on etch a sketch
function makeBoxListeners() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {box.addEventListener('mouseover', function (e) {
        console.log(e.target);
        e.target.classList.add('color')})});
}
