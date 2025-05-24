let arcoiris = document.getElementById('arcoiris');  //Obtenemos el elemento con el ID del documento HTML y lo asigna a una variable.
let itachi = document.getElementById('itachi');
let sasuke = document.getElementById('sasuke');

//Evento: Es cualquier accion que tiene lugar en la pagina web y que puede ser detectada por el navegador.

window.addEventListener('scroll', () => 
{
    let valorDeScrollY = window.scrollY;
    //Obtinen la cantidad de desplazamiento vertical de la ventana desde la parte superior del documento Y SU UNIDAD ES DE PIXELES.

    sasuke.style.left = valorDeScrollY * 0.8 + 'px';
    itachi.style.left = valorDeScrollY * -0.8 + 'px';
    arcoiris.style.left = valorDeScrollY * 2 + 'px';
});



//style.marginTop: Accede y establece la propiedad marginTop de CSS.

//marginTop: Se está cambiando dinamicamente el margen superior del elemeto con el ID texto haciendo que se mueva hacia abajo/arriba.

//2.5: Los numeros determinan la velocidad.

//'px': Especifico el valor en pixeles.