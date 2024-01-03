 window.onload = function() {
    addColor();
 }
 // if we load the function every tym, it will display the random clrs using onload event...

 
 for(let i=0; i<9; i++) {
    const box=document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}

const btn=document.querySelector('.btn');
const randomClrBlock = document.querySelectorAll('.box');

function randomClrCode(){
    var chars='0123456789abcdef';
    var colorLength = 6;
    var color ='';

    for (var i=0;i<colorLength;i++ ) {
        var randomColor = Math.floor(Math.random() * chars.length) ; // here chars.length = 16
        color += chars.substring(randomColor, randomColor+1);
    }
    return '#' + color;
}
function addColor() {
    randomClrBlock.forEach(e => {
        var newColor = randomClrCode();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    })
}