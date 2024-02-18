const categories = document.querySelector('ul#categories');
console.dir(`Number of categories: ${categories.childElementCount}`);

const items = categories.querySelectorAll('li.item');
console.dir(items);
console.log(items);

items.forEach(i => {
    console.log(`Categories: ${i.firstElementChild.innerHTML}`);
    console.dir(`Elements: ${i.lastElementChild.childElementCount}`)
})