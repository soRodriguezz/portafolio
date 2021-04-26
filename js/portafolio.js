document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        {img: '../img/1.png'},
        {img: '../img/2.png'},
        {img: '../img/3.png'},
        {img: '../img/4.png'},
        {img: '../img/5.png'},
        {img: '../img/6.png'},
        {img: '../img/7.png'},
        {img: '../img/8.png'},
        {img: '../img/9.png'},
        {img: '../img/10.png'},
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
            img_slideshow.src = imagenes[imagen_seleccionada].img;
            contador = imagen_seleccionada;
            overlay.style.opacity = 1;
            overlay.style.visibility = 'visible';
        });
    });

    document.querySelector('.btn_cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0;
        overlay.style.visibility = 'hidden';
    });

});