const burgerMenu = document.querySelector('#burgerMenu');
const closeMenu = document.querySelector('#closeMenu');
const headerList = document.querySelector('#headerList');

burgerMenu.addEventListener('click', toggleMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);

function toggleMobileMenu() {
  return headerList.classList.toggle('header__list-visible');
}

function closeMobileMenu() {
  return headerList.classList.remove('header__list-visible');
}
