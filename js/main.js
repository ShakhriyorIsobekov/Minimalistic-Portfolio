const elMenuButton = document.querySelector('.header__menu-wrapper');
const elHeaderList = document.querySelector('.header__list');

if (elMenuButton) {
   elMenuButton.addEventListener('click', function() {
      elHeaderList.classList.toggle('header__list-open');
   });
};