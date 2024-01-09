const emojis = ["😂","🤣","😀","😁","😃","😄","😅","😆","😉","😊","😎","😋",
                "😍","😘","🥰","😗","😙","😚","😑","😪","😴","🥱","😛","😝",
                "😜","🤑","😭","🤯","😤","😬","😓","😖","🤤","😝","😜","🤢",
                "🤮","😇","😡","🤬","🤫","🤥","🧐","🤭","🥶","😱","😏","🤨",
                "🤩","🤗","🤐"]

const btn = document.querySelector('#btn');

btn.addEventListener('mouseover',function(){
    btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]
})

btn.addEventListener('click',function(){
    btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]
})

