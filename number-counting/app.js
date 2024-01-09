const counter=document.getElementById('counter');
const reset=document.querySelector('#reset-btn');
const increase=document.querySelector('.increase');
const decrease=document.querySelector('.decrease');

let count=0;

increase.addEventListener('click', function(){
    count++;
    counter.innerHTML=count;
})

decrease.addEventListener('click',function(){
    count--;
    counter.innerHTML=count;
})

reset.addEventListener('click',function(){
    count =0;
    counter.innerHTML=count;
})