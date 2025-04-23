// IMPORTACIONES

// VARIABLES
const formulario = document.querySelector('form');
const nombre = document.querySelector('[name = "nombre"]');
const apellido = document.querySelector('[name = "apellido"]');
const telefono = document.querySelector('[name = "telefono"]');
const usuario = document.querySelector('[name = "usuario"]');
const contrasena = document.querySelector('[name = "contrasena"]');
// const btn = document.querySelector('#btn_validar');

// FUNCIONES
const validar = (event) => {
  event.preventDefault();
  if (nombre.value == "") {
    alert('Llene es nombre');
    nombre.focus();
  }
}

// EVENTOS
formulario.addEventListener('submit',validar);