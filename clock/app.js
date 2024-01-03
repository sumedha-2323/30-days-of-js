 const mn=document.getElementById('mn');
 const sc=document.getElementById('sc');
const hr=document.getElementById('hr');
const deg =6;
setInterval(() =>{
    let day= new Date();
    // let ms= day.getMilliseconds() * deg;
    let mm =day.getMinutes() * deg;
    let hh = day.getHours() * 30;
    let ss=day.getSeconds() * deg;
  
    hr.style.transform = `rotateZ(${hh}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})


// for 12hrs, hr hand rotates 360 deg,
//  so for 1 hr = 360/12 = 30
//  1 hr = 60 min, 
//  so, h hrs = 30*h

//  for min hand,
//     1 min = 360/60 = 6
//     so, m mins = 6*m
 
// for sec hand,
//      1 sec = 6 deg
//      s sec = s*6
