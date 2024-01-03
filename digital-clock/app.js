function clock() {
    let seconds = document.getElementById('sec');
    let s = new Date().getSeconds();

    seconds.innerHTML = s;

    let minutes = document.getElementById('min');
    let m = new Date().getMinutes();
    minutes.innerHTML = m;

    let hours = document.getElementById('hour');
    let h = new Date().getHours();
    hours.innerHTML=h;

    let ampm = document.getElementById('ampm');

    var am = 'AM';
    if(h>12) {
       //  h = h-12;
        var am='PM';
    }
    ampm.innerHTML= am;


};

let interval = setInterval(clock,1000);