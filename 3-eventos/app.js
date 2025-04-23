// IMPORTACIONES

// VARIABLES
const formulario = document.querySelector('form');
const nombre = document.querySelector('[name = "nombre"]');
const apellido = document.querySelector('[name = "apellido"]');
const telefono = document.querySelector('[name = "telefono"]');
const documento = document.querySelector('[name = "documento"]');
const usuario = document.querySelector('[name = "usuario"]');
const contrasena = document.querySelector('[name = "contrasena"]');
// const btn = document.querySelector('#btn_validar');

// FUNCIONES
const validar = (event) => {
  if (nombre.value.trim() == "") {
    alert('Ingresa tu nombre completo');
    nombre.focus();
  }
  if (apellido.value.trim() == "") {
    alert('Ingresa tu apellido');
    apellido.focus();
  }
  if (telefono.value.trim() == "") {
    alert('Ingresa tu número de teléfono');
    telefono.focus();
  }
  if (usuario.value.trim() == "") {
    alert('Ingresa tu nombre de usuario');
    usuario.focus();
  }
  if (contrasena.value.trim() == "") {
    alert('Ingresa una contraseña segura');
    contrasena.focus();
  }
  event.preventDefault();
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

// EVENTOS
formulario.addEventListener('submit',validar);
nombre.addEventListener('keydown',validacionSoloLetras);
apellido.addEventListener('keydown',validacionSoloLetras);
telefono.addEventListener('keydown',validacionSoloNumeros);
documento.addEventListener('keydown',validacionSoloNumeros);