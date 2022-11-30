const purpleDiv = document.querySelector('.purple');
const yellowBtn = document.querySelector('.yellow');
const blackBtn = document.querySelector('.black');

const numInput = document.querySelector('#num');
const outP = document.querySelector('.out span');
const rectangle = document.querySelector('.purple');

purpleDiv.style.backgroundColor = 'purple';

let width = 200;
let height = 140;


function makeLarger(){
 width = Math.round( width*1.1)
 height = Math.round( height*1.1)
 rectangle.style.width = width.toString() + 'px'
 rectangle.style.height = height.toString() + 'px'
const br = document.createElement('br');

 rectangle.innerText = 'Width = ' + width.toString() + 'px' ;
 rectangle.appendChild(br)
 rectangle.innerText += 'Height = ' + height.toString() + 'px' ;
 
 yellowBtn.style.border = '5px dashed red'
 blackBtn.style.border = '1px solid black'

}

function changeColor() {

    // almoust every object from HTML has property "style", and
    // it has all the properties that we know from CSS,
    // but they're written with camelCase
    if (purpleDiv.style.backgroundColor === 'red') {

        purpleDiv.style.backgroundColor = 'cornflowerblue';
        purpleDiv.style.border = '5px solid red';
        
    } else {
        purpleDiv.style.backgroundColor = 'red';
        purpleDiv.style.border = '5px solid cornflowerblue';
    }

}

function addText() {
    blackBtn.style.border = '5px dashed red'
    yellowBtn.style.border = '1px solid black'
    purpleDiv.innerText += "DOM ";

}

function ifEven() {

    let num = +numInput.value;

    outP.innerText = num % 2 === 0 ? "even" : "odd";

}

purpleDiv.addEventListener('mouseover',changeColor);
purpleDiv.addEventListener('mouseout',changeColor);
//purpleDiv.addEventListener('click',changeColor);
//purpleDiv.addEventListener('dblclick',changeColor);
purpleDiv.addEventListener('mousedown',changeColor);
purpleDiv.addEventListener('mouseup',changeColor);
blackBtn.addEventListener('click', makeLarger)
yellowBtn.addEventListener('click', addText);
numInput.addEventListener('input',ifEven)



