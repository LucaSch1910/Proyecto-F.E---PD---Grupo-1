var mostrar5 = document.getElementById('mostrar5');
var texto5 = document.getElementById('oculto5');

mostrar5.addEventListener('mouseover', function () {
    if (texto5.classList.contains('contenido-oculto5')) {
        texto5.classList.remove('contenido-oculto5');
    } else {
        texto5.classList.add('contenido-oculto5');
    }
});
