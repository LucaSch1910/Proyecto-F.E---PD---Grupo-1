
/*No le puse el click porque no me salio (Lo que vale es la intención?*/
var mostrar1 = document.getElementById('mostrar1');
var texto = document.getElementById('oculto1');

mostrar1.addEventListener('mouseover', function () {
    if (texto.classList.contains('contenido-oculto1')) {
        texto.classList.remove('contenido-oculto1');
    } else {
        texto.classList.add('contenido-oculto1');
    }
});



