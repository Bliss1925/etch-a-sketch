
const button = document.querySelector('button');
button.addEventListener("click", function (event) {
    
    for (let i = area - 1; i > -1; i--) {
        etch[i].remove();
        let reset = etch.pop();
        console.log("click");
    }
    handw = prompt("New size of grid? Enter a number between 2 and 100");  
    area = handw**2;
    container.style.gridTemplateColumns = 'repeat(' + handw + ', auto)';
    return (container.style.gridTemplateColumns, populateGrid(area)); 
})
let area = 16*16;
let handw = 16;
let etch = [];

var container = document.querySelector('.container');
container.style.display = "grid";
container.style.background = "red";
container.style.width = "600px";
container.style.height = "600px";
container.style.margin = "25%";
container.style.marginTop = "10%";
container.style.gridTemplateColumns = 'repeat(16, auto)';






for (let i = 0; i < area; i++) {
    etch[i] = document.createElement('div');
    etch[i].classList.add('content');
    etch[i].setAttribute('style', 'background: grey');
    etch[i].style.width = "37.5px";
    etch[i].style.height = "37.5px";
    etch[i].style.gridColumn = (i+1)/ (i+2);
    container.appendChild(etch[i]);
    etch[i].addEventListener('mouseover', function (event) {
        etch[i].setAttribute('style', 'background: black');
    })
}


function populateGrid(area) {
    console.log(area);
    debugger
    for (let i = 0; i < area; i++) {
        etch[i] = document.createElement('div');
        etch[i].classList.add('content');
        etch[i].setAttribute('style', 'background: grey');
        etch[i].style.width = (600/handw) + "px";
        etch[i].style.height = (600/handw) + "px";
        etch[i].style.gridColumn = (i+1)/ (i+2);
        container.appendChild(etch[i]);
        etch[i].addEventListener('mouseover', function (event) {
            etch[i].setAttribute('style', 'background: black');
        })
    }
}