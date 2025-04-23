let win = window;
let dom = document;

let header = document.querySelectorAll("main p");

let imagenes = document.images;
let hojasEstilo = document.styleSheets;
let scripts = document.scripts;
// console.log(imagenes);
// console.log(hojasEstilo);
// console.log(scripts);

let lista = dom.querySelectorAll('ul.list > li.item');
let card = dom.querySelectorAll('div.cards > div.card');
let cards = dom.querySelector('div.cards');
console.log("PADRE", cards.parentElement);
console.log("HERMANO", cards.previousElementSibling);

let body = document.querySelector('body');

console.log(body.previousElementSibling);

console.clear();
let elemento = document.querySelector('#elementos2');
elemento.textContent = 'Nuevo Texto';
elemento.innerHTML = (`<p> textos </p> <p> texto </p> `);

setTimeout(() => {
  body.classList.add('bg-red');
}, 6000);
console.log(body.classList);
