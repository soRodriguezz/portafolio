document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        {img: '../img/1.png'},
        {img: '../img/2.png'}
    ];

    let contador = 0;
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const galeria_imagenes = document.querySelectorAll('.galeria img');
    const img_slideshow = document.querySelector('.slideshow img');

    contenedor.addEventListener('click', function (event) {
        let img = contenedor.querySelector('img');
        let tgt = event.target;
    });

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +event.target.dataset.imgMostrar;
            img_slideshow.src = imagenes[imagen_seleccionada];
            contador = imagen_seleccionada;
            overlay.style.opacity = 1;
            overlay.style.visibility = 'visible';
        });
    });

});