const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerSVG = document.querySelector('.menu-burger');
const mobileMenuListas = document.querySelector('.mobile-menu');
function toggleDesktopMenu(){
   desktopMenu.classList.toggle('inactive');
   console.log("Hola");
}
function toggleMobileMenuBurger(){
   mobileMenuListas.classList.toggle('inactive');
}
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerSVG.addEventListener('click',toggleMobileMenuBurger);
