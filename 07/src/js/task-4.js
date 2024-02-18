const form = document.querySelector('.login-form');
const email = form.querySelector('input[type=email]');
const password = form.querySelector('input[type=password]');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!e.target.email.value || !e.target.password.value) {
        alert('All form fields must be filled in');
    } else {
        const emailVal = e.target.email.value;
        const passwordVal = e.target.password.value;
        const emailName = e.target.email.name;
        const passwordName = e.target.password.name;
        const obj = {
            [emailName]: emailVal,
            [passwordName]: passwordVal
        };
        console.log(obj);
        form.reset();
    }
})