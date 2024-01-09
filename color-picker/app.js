const colorPicker = document.querySelector('#color-picker');

colorPicker.addEventListener('input',function(){
    document.body.style.background = colorPicker.value;
})