const element = document.querySelector('ul');
// console.log(element.children[0].innerHTML);
console.dir(element);
console.log(element.lastElementChild.nextElementSibling);

const link = document.querySelectorAll('ul>li>a')
console.log(link[3]);
console.dir(link);

const h2 = document.querySelector('ul');
// h2.textContent = 'dfnvlgakl';
// console.log(h2.textContent);
// h2.lastElementChild.remove();
console.log(h2.classList);

const btn = document.querySelector('.btn');
btn.style.transform = 'translateX(0px)';
// btn.style.top = '100px';
// btn.style.left = '100px';
// console.dir(btn.style.cx = 100);

// btn.addEventListener('mouseenter', (e) => {
//     btn.style.transform = 'translateX(10px)';
//     btn.style.color = 'blue'
// });

// btn.addEventListener('mouseleave', (e) => {
//     btn.style.transform = 'translateX(0px)';
// });

const aLink = document.createElement('a');
aLink.classList.add('a-link');
aLink.textContent = 'dfnksbnzd';
console.log(aLink);

const containerEl = document.querySelector('.container');
containerEl.append(aLink);

// btn.remove()

btn.addEventListener('click', createMarkUp)

function createMarkUp() {
    const olList = document.querySelector('.ordered-list');
    olList.insertAdjacentHTML('afterbegin', `<li class="p">Text2</li>
    <li class="p">Text3</li>
    <li class="p">Text4</li>
    <li class="p">Text5</li>
    `);
};

const formEl = document.querySelector('form');
const btnClearEl = document.querySelector('.form-clear');
const inputEl = document.querySelector('.input-name');


formEl.addEventListener('submit', function name(e) {
    e.preventDefault();
    console.dir(e.currentTarget);
    console.dir(e.target);

    if (e.target.elements['btn-clear'].className === 'form-clear') {
        e.target.elements.name.value = '';
    }
    // console.dir(e.target[1].className);
    // if (e.target[1].className === 'form-clear') {
    //     e.target[0].value = '';
    // };
    // if (e.target[2].className === 'form-send') {
    //     const msg = { message: e.target[0].value };
    //     console.log(msg);
    // }
});

// document.addEventListener("keydown", event => {
//     console.dir(event);
//     console.log("key: ", event.key);
//     console.log("code: ", event.code);
// });

inputEl.addEventListener('input', e => {
    console.dir(e.target.value);
})

const area = document.querySelector('#tx');
area.addEventListener('change', e => {
    console.dir(e.target.value)
})
