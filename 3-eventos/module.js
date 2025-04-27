export const validarFormulario = (e) => {
  e.preventDefault();
  console.log(e.target.children);
  const campos = [...e.target].filter((elemento) => {
    return elemento.hasAttribute('required')
  });

  campos.forEach(campo => {
    switch (campo.tagName) {
      case 'INPUT':
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
        break;
      case 'SELECT':
        if (campo.selectedIndex.trim() == "") {
          campo.classList.add('input_error');
          let mensaje = document.createElement('span');
          mensaje.classList.add('span_error');
          mensaje.textContent = 'Ingresa tu campo completo';
          campo.insertAdjacentElement('afterend', mensaje);
        }
        break;
    
      default:
        break;
    }
    if (campo.value === "") {
      campo.classList.add('input_error');
    }
  });
};