const form = document.querySelector('#submit-form');
const textBox = document.querySelector('#submit-form-query');

let isPressShift = false;
const ENTER_KEYCODE = 13;
const SHIFT_KEYCODE = 16;

textBox.addEventListener('keydown', (e) => {
    switch(e.keyCode){
        case ENTER_KEYCODE:
            if(!isPressShift) {
                e.preventDefault();
                SubmitForm();
                textBox.value = "";
            }
            break;
        case SHIFT_KEYCODE:
            isPressShift = true;
            break;
    }
})
textBox.addEventListener('keyup', (e) => {
    switch(e.keyCode){
        case SHIFT_KEYCODE:
            isPressShift = false;
            break;
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    SubmitForm();
})

const SubmitForm = () => {
    const params = JSON.stringify({ query : textBox.value })
    console.log(params);

    fetch('/query', {
        method: 'POST',
        headers: {
            'Params' : params
        },
    })
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        console.dir(json);
        if(Array.isArray(json)) {
            for(var i=0; i<json.length; i++){
                const appendListItem = document.createElement('li');
                appendListItem.innerText = JSON.stringify(json[i]);
                form.querySelector('.output').appendChild(appendListItem);
            }
        }
    })
}