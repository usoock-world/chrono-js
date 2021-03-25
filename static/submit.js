const form = document.querySelector('#submit-form');
const inputBox = document.querySelector('#submit-form-query');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const params = JSON.stringify({ query : inputBox.value })
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
        console.dir(json.length);
    })
})