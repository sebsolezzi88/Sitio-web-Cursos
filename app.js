
//Funcionalidad para el menu desplegable
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const btnSvgIcon = document.querySelector('.btn-svg');
menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        btnSvgIcon.classList.toggle('rotate-90');
        btnSvgIcon.classList.add('duration-300', 'transition-transform');
});