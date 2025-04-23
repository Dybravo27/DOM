let padre = document.querySelector('.container');
let node = document.createElement('h2');
node.textContent = "Titulo de Segundo Nivel";

let texto = document.createTextNode('Palabra para el nodo de texto');
padre.appendChild(node);
padre.appendChild(texto);

let lista = document.querySelector('#list');

let html = document.createElement('li');
let css = document.createElement('li');
let js = document.createElement('li');

html.classList.add('item');
css.classList.add('item');
js.classList.add('item');

html.textContent = "HTML";
css.textContent = "CSS";
js.textContent = "JS";

lista.append(html, css, js);

let card = document.querySelector('.card');
let lista_card = document.querySelector('#list');
let titulo = document.createElement('h2');
titulo.textContent = 'TITULO CARD';

console.log(card);
console.log(lista_card);

// card.append(titulo);
card.insertBefore(titulo, lista_card);

// Agregar Nodos Adyacentes

let beforeBegin = document.createElement('li');
beforeBegin.classList.add('item', 'before');
beforeBegin.textContent = "NUEVO CONTENIDO UBICADO ANTES DE LA LISTA DESORDENADA";

let afterBegin = document.createElement('li');
afterBegin.classList.add('item');
afterBegin.textContent = 'NUEVO CONTENIDO UBICADO AL INICIO DE LA LISTA DESORDENADA';

let beforeEnd = document.createElement('li');
beforeEnd.classList.add('item', 'before');
beforeEnd.textContent = 'NUEVO CONTENIDO UBICADO AL FINAL DE LA LISTA DESORDENADA';

let afterEnd = document.createElement('li');
afterEnd.classList.add('item');
afterEnd.textContent = 'NUEVO CONTENIDO UBICADO AL DESPUES DE LA LISTA DESORDENADA';

lista_card.insertAdjacentElement('beforebegin', beforeBegin); // 1
lista_card.insertAdjacentElement('beforeend', beforeEnd); // 3
lista_card.insertAdjacentElement('afterbegin', afterBegin); // 2
lista_card.insertAdjacentElement('afterend', afterEnd); // 4

// DIAS DE LA SEMANA

let card_dias = document.querySelector('#dias');

const dias = [
  {
    id: 1,
    nombre: 'LUNES',
    img: 'https://picsum.photos/640/360',
    parrafo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, nihil.'
  },
  {
    id: 2,
    nombre: 'MARTES',
    img: 'https://picsum.photos/640/360',
    parrafo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, nihil.'
  },
  {
    id: 3,
    nombre: 'MIERCOLES',
    img: 'https://picsum.photos/640/360',
    parrafo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, nihil.'
  },
  {
    id: 4,
    nombre: 'JUEVES',
    img: 'https://picsum.photos/640/360',
    parrafo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, nihil.'
  },
  {
    id: 5,
    nombre: 'VIERNES',
    img: 'https://picsum.photos/640/360',
    parrafo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, nihil.'
  },
  {
    id: 6,
    nombre: 'SABADO',
    img: 'https://picsum.photos/640/360',
    parrafo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, nihil.'
  },
  {
    id: 7,
    nombre: 'DOMINGO',
    img: 'https://picsum.photos/640/360',
    parrafo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, nihil.'
  },
];

dias.map(({ id, nombre, img, parrafo }) => {
  // CREAR LOS ELEMENTOS
  let card = document.createElement('div');
  let card_header = document.createElement('div');
  let card_titulo = document.createElement('h2');
  let card_body = document.createElement('div');
  let imagen = document.createElement('img');
  let p = document.createElement('p');
  // AGREGAR LOS ESTILOS
  card.classList.add('card');
  card_header.classList.add('card__header');
  card_titulo.classList.add('card__title');
  card_body.classList.add('card__body');
  imagen.classList.add('card__img');
  p.classList.add('card__paragraph');
  // ADMINISTRAR LOS ATRIBUTOS
  imagen.setAttribute('src', img);
  imagen.setAttribute('alt', nombre);
  // UNIR LOS ELEMENTOS
  card_titulo.textContent = nombre;
  p.textContent = parrafo;
  card_body.append(imagen, p);
  card.append(card_header);
  card.append(card_body);
  card_header.append(card_titulo);
  card_dias.append(card);

  // card.append(card_header);
  // card_dias.append(card);
  // card_header.append(card_titulo);
  // card.append(card_body);
  // card_body.append(imagen,p);
});