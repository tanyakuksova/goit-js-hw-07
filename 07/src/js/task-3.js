const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');


input.addEventListener('input', e => {
    const text = e.target.value.trim();
    if (!text) {
        output.innerText = 'Anonymous';
    } else {
        output.innerText = text;
    }
});