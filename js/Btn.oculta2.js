var mostrar2 = document.getElementById('mostrar2');
var texto2 = document.getElementById('oculto2');

mostrar2.addEventListener('mouseover', function () {
    if (texto2.classList.contains('contenido-oculto2')) {
        texto2.classList.remove('contenido-oculto2');
    } else {
        texto2.classList.add('contenido-oculto2');
    }
});
