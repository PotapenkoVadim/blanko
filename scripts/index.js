// mobile menu
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


// gallery
let galleryIndex = 0;
const gallery = document.querySelector('#gallery');
const bullets = document.querySelectorAll('#bullet');

[...bullets].map((bullet) => bullet.addEventListener('click', handleBulletClick));
setInterval(() => slideGallery(galleryIndex = 1 - galleryIndex ), 12500);
addEventListener('resize', debounce(() => slideGallery(galleryIndex = 1 - galleryIndex)));

function handleBulletClick() {
  galleryIndex = this.dataset.index;

  slideGallery(galleryIndex);
}

function slideGallery(index) {
  const galleryItemWidth = document.querySelector('#item').clientWidth;
  gallery.style.transform = `translateX(${galleryItemWidth * index * -1}px)`;
}

function debounce(fn, timeout = 150) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => fn.apply(this, args), timeout);
  };
}