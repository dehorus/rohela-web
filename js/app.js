const menuIcon = document.querySelector('.hamburguer-menu');
const navbar = document.querySelector('.navbar');
const lines = document.querySelector('.line-1', '.line-2', '.line-3');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
});


new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
    dots: '.dots'
});


