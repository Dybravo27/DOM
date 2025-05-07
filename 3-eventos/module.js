export const validarFormulario = (e) => {
  e.preventDefault();
  // console.log(e.target.children);
  const obj = {};
  // Todos los campos que sean requeridos
  const campos = [...e.target].filter((elemento) => {
    return elemento.hasAttribute('required')
  });

  // Capturamos todos los campos de tipo radio
  const radios = [...campos].filter((elemento) => {
    return elemento.type === "radio"
  });

  // Capturamos todos los campos de tipo checkbox
  const checkbox = [...campos].filter((elemento) => elemento.type === "checkbox");

  // se valida que tenga un campo seleccionado
  const campo_radio = radios.find((radio) => radio.checked) || [];

  const campo_checkbox = checkbox.filter((e) => e.checked);

  // se valida que tenga algun checkbox seleccionado
  if (campo_checkbox.length < 3) {
    obj[checkbox[0].name] = "";
    alert("Tiene que seleccionar 3 o mas habilidades")
  } else {
    obj[checkbox[0].name] = [...campo_checkbox].map(e => e.value);
    console.log(campo_checkbox);
  }

  // Al no seleccionarse un campo de tipo radio se le asigna un campo vacio
  if (campo_radio.length === 0) {
    obj[radios[0].name] = "";
  } else {
    obj[campo_radio.name] = campo_radio.value;
  }

  const objeto = new Object();

  campos.forEach(campo => {
    switch (campo.tagName) {
      case 'INPUT':
        if (campo.type != "radio") objeto[campo.name] = campo.value;
        if (campo.type === "text" || campo.type === "tel" || campo.type === "number" || campo.type === "password") {
          if (campo.value.trim() == "") {
            if (campo.nextElementSibling) {
              campo.nextElementSibling.remove();
            }
            campo.classList.add('input_error');
            let mensaje = document.createElement('span');
            mensaje.classList.add('span_error');
            mensaje.textContent = 'Ingresa tu campo completo';
            campo.insertAdjacentElement('afterend', mensaje);
          }
          else {
            obj[campo.name] = campo.name;
          }
        }
        break;
      case 'SELECT':
        // objeto[campo.name] = campo.value;
        if (campo.selectedIndex === 0) {
          if (campo.nextElementSibling) {
            campo.nextElementSibling.remove();
          }
          campo.classList.add('input_error');
          let mensaje = document.createElement('span');
          mensaje.classList.add('span_error');
          mensaje.textContent = 'Ingresa tu campo completo';
          campo.insertAdjacentElement('afterend', mensaje);
        }
        else {
          objeto[campo.name] = campo.selectedIndex;
        }
        break;
      default:
        break;
    }
  });
  console.log(objeto);
  return obj;
};

export const validacionSoloLetras = (event) => {
  const RegExpLetras = /[0-9]/;
  if (RegExpLetras.test(event.key)) {
    event.preventDefault();
  }
}
export const validacionSoloNumeros = (event) => {
  const RegExpNumeros = /^[a-zA-Z]$/;
  if (RegExpNumeros.test(event.key)) {
    event.preventDefault();
  }
}
export const validacionLetrasYNumeros = (event) => {
  const RegExpLetrasNumeros = /^[a-zA-Z0-9]$/;
  if (!RegExpLetrasNumeros.test(event.key) && event.key != 'Backspace') {
    event.preventDefault();
  }
}
export const validacionContrasena = (event) => {
  const regexCaracterPermitido = /^[a-zA-Z0-9@#$%]$/;
  if (!regexCaracterPermitido.test(event.key) && event.key !== 'Backspace' && event.key !== 'Tab') {
    event.preventDefault();
  }
}
export const limpiar = (event) => {
  if (event.target.value != "") {
    event.target.classList.remove('input_error')
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.remove();
    }
  }
}

export const validacionDiezCaracter = (event) => {
  if (event.target.value.length == 10 && event.key != 'Backspace') {
    event.preventDefault();
  }
}