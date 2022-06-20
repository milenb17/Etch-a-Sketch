let container = document.querySelector("#container");
// create row of columns
// Outer loop creates column 
for (let i = 0; i < 16; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);
    // inner loop creates 16 boxes in each column
    for (let k = 0; k < 16; k++) {
        const div = document.createElement('box');
        div.classList.add('box');
        column.appendChild(div);
    }
}