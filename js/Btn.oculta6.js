var mostrar6 = document.getElementById('mostrar6');
var texto6 = document.getElementById('oculto6');

mostrar6.addEventListener('mouseover', function () {
    if (texto6.classList.contains('contenido-oculto6')) {
        texto6.classList.remove('contenido-oculto6');
    } else {
        texto6.classList.add('contenido-oculto6');
    }
});
