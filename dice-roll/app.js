function shuffle(){
    const image=document.getElementById('img');
    let random = Math.floor(Math.random() * 6) + 1;
    image.setAttribute("src", `${random}.png`);
}

function anim(){
    setTimeout(shuffle, 500);
    const image= document.getElementById('img');
    image.setAttribute('src',`dice-rol.gif`);
}

