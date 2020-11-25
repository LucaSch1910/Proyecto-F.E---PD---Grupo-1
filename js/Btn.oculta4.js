var mostrar4 = document.getElementById('mostrar4');
var texto4 = document.getElementById('oculto4');

mostrar4.addEventListener('mouseover', function () {
    if (texto4.classList.contains('contenido-oculto4')) {
        texto4.classList.remove('contenido-oculto4');
    } else {
        texto4.classList.add('contenido-oculto4');
    }
});
