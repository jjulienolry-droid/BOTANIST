// Menu burger animation
const burgerMenu = document.getElementById('burger-menu');
const burgerIcon = document.querySelector('.burger-icon');

burgerMenu.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
});
