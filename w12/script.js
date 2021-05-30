const p = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-nav .main-menu');

console.log('mainMenu', mainMenu);

p.addEventListener('click',function () {
mainMenu.classList.toggie('show');});