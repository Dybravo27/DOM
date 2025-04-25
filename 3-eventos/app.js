// IMPORTACIONES
import { validarFormulario } from "./module.js";

// VARIABLES
const formulario = document.querySelector('form');
const boton = document.querySelector('#btn_validar');
const nombre = document.querySelector('[name = "nombre"]');
const apellido = document.querySelector('[name = "apellido"]');
const telefono = document.querySelector('[name = "telefono"]');
const documento = document.querySelector('[name = "documento"]');
const usuario = document.querySelector('[name = "usuario"]');
const contrasena = document.querySelector('[name = "contrasena"]');
const politicas = document.querySelector('#politicas');
// const btn = document.querySelector('#btn_validar');

// FUNCIONES

const validar = (event) => {
  event.preventDefault();
  if (nombre.value.trim() == "") {
    if (nombre.nextElementSibling) {
      nombre.nextElementSibling.remove();
    }
    nombre.classList.add('input_error');
    let mensaje = document.createElement('span');
    mensaje.classList.add('span_error');
    mensaje.textContent = 'Ingresa tu nombre completo';
    nombre.insertAdjacentElement('afterend', mensaje);
    // return;
  }
  // nombre.classList.remove('input_error');

  if (apellido.value.trim() == "") {
    if (apellido.nextElementSibling) {
      apellido.nextElementSibling.remove();
    }
    apellido.classList.add('input_error');
    let mensaje = document.createElement('span');
    mensaje.classList.add('span_error');
    mensaje.textContent = 'Ingresa tu apellido';
    apellido.insertAdjacentElement('afterend', mensaje);
    // return;
  }
  // apellido.classList.remove('input_error');

  if (telefono.value.trim() == "") {
    if (telefono.nextElementSibling) {
      telefono.nextElementSibling.remove();
    }
    telefono.classList.add('input_error');
    let mensaje = document.createElement('span');
    mensaje.classList.add('span_error');
    mensaje.textContent = 'Ingresa tu número de teléfono';
    telefono.insertAdjacentElement('afterend', mensaje);
    // return;
  }
  // telefono.classList.remove('input_error');

  if (documento.value.trim() == "") {
    if (documento.nextElementSibling) {
      documento.nextElementSibling.remove();
    }
    documento.classList.add('input_error');
    let mensaje = document.createElement('span');
    mensaje.classList.add('span_error');
    mensaje.textContent = 'Ingresa tu Documento';
    documento.insertAdjacentElement('afterend', mensaje);
    // return;
  }
  // documento.classList.remove('input_error');
  
  if (usuario.value.trim() == "") {
    if (usuario.nextElementSibling) {
      usuario.nextElementSibling.remove();
    }
    usuario.classList.add('input_error');
    let mensaje = document.createElement('span');
    mensaje.classList.add('span_error');
    mensaje.textContent = 'Ingresa un Usuario';
    usuario.insertAdjacentElement('afterend', mensaje);
    // return;
  }
  // usuario.classList.remove('input_error');

  if (contrasena.value.trim() == "") {
    if (contrasena.nextElementSibling) {
      contrasena.nextElementSibling.remove();
    }
    contrasena.classList.add('input_error');
    let mensaje = document.createElement('span');
    mensaje.classList.add('span_error');
    mensaje.textContent = 'Ingresa una contraseña';
    contrasena.insertAdjacentElement('afterend', mensaje);
    // return;
  }
  // contrasena.classList.remove('input_error');
};

const validacionSoloLetras = (event) => {
  const RegExp = /[0-9]/;
  if (RegExp.test(event.key)) {
    event.preventDefault();
  }
}
const validacionSoloNumeros = (event) => {
  const RegExp = /^[a-zA-Z]$/;
  if (RegExp.test(event.key)) {
    event.preventDefault();
  }
}
const validacionLetrasYNumeros = (event) => {
  const RegExp = /^[a-zA-Z0-9]$/;
  if (!RegExp.test(event.key) && event.key != 'Backspace') {
    event.preventDefault();
  }
}
const validacionContrasena = (event) => {
  const RegExp = /^[a-zA-Z0-9@#$%]{8,10}$/;
  if (RegExp.test(event.key) && event.key != 'Backspace') {
    event.preventDefault();
  }
}
const limpiar = (event) => {
  if (event.target.value != "") {
    event.target.classList.remove('input_error')
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.remove();
    }
  }
}
const validarBoton = (event) => {
  if (!politicas.checked) {
    boton.setAttribute('disabled', '');
  }
  else {
    boton.removeAttribute('disabled')
  }
}

const validacionDiezCaracter = (event) => {
  if (event.target.value.length == 10 && event.key != 'Backspace') {
    event.preventDefault();
  }
}

// EVENTOS
addEventListener('DOMContentLoaded', validarBoton);
politicas.addEventListener('change', validarBoton);

formulario.addEventListener('submit', validarFormulario);
// nombre.addEventListener('keydown', validacionSoloLetras);
// apellido.addEventListener('keydown', validacionSoloLetras);
// telefono.addEventListener('keydown', validacionSoloNumeros);
// documento.addEventListener('keydown', validacionSoloNumeros);
// usuario.addEventListener('keydown', validacionLetrasYNumeros);
// contrasena.addEventListener('keydown', validacionContrasena);

// nombre.addEventListener('blur', limpiar);
// apellido.addEventListener('blur', limpiar);
// telefono.addEventListener('blur', limpiar);
// documento.addEventListener('blur', limpiar);
// usuario.addEventListener('blur', limpiar);
// contrasena.addEventListener('blur', limpiar);

// nombre.addEventListener('keypress', validacionDiezCaracter);