var mostrar3 = document.getElementById('mostrar3');
var texto3 = document.getElementById('oculto3');

mostrar3.addEventListener('mouseover', function () {
    if (texto3.classList.contains('contenido-oculto3')) {
        texto3.classList.remove('contenido-oculto3');
    } else {
        texto3.classList.add('contenido-oculto3');
    }
});
