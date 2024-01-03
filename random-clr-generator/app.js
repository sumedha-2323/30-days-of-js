let bgColorArray = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0","#184b73","#883e7d","#ed048b"]
let container=document.getElementById("container");
let button=document.getElementById('clr-btn');

function demo(){
    let numOfColors= bgColorArray.length;
    let randomColorIndex = Math.floor(Math.random() * numOfColors );
    if(randomColorIndex === numOfColors){
        randomColorIndex = numOfColors - 1;
    }
    let randomColor = bgColorArray[randomColorIndex];
    container.style.backgroundColor = randomColor;
}