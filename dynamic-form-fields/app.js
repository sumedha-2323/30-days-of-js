let options = document.getElementById('options');
let addField = document.getElementById('add-btn');
let removeField = document.getElementById('remove-btn');

function addAnotherField() {
    let newFields = document.createElement('input');
    newFields.setAttribute('type','text');
    newFields.setAttribute('id','another-field');
    newFields.setAttribute('placeholder','Another Field');
    newFields.setAttribute('class','input-box');

    options.appendChild(newFields);
    removeField.addEventListener('click',function(){
        newFields.remove();
    })
}
