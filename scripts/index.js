// mobile menu
const burgerMenu = document.querySelector('#burgerMenu');
const closeMenu = document.querySelector('#closeMenu');
const headerList = document.querySelector('#headerList');

burgerMenu.addEventListener('click', () => headerList.classList.toggle('header__list-visible'));
closeMenu.addEventListener('click', () => headerList.classList.remove('header__list-visible'));


// gallery
let galleryIndex = 0;
const GALLERY_TIME_DELAY = 12500;
const gallery = document.querySelector('#gallery');
const bullets = document.querySelectorAll('#bullet');

[...bullets].map((bullet) => bullet.addEventListener('click', handleBulletClick));

setInterval(() => slideGallery(getGalleryIndex()), GALLERY_TIME_DELAY);
addEventListener('resize', debounce(() => slideGallery(getGalleryIndex())));

function getGalleryIndex() {
  galleryIndex = 1 - galleryIndex;

  return galleryIndex;
}

function handleBulletClick() {
  galleryIndex = this.dataset.index;

  slideGallery(galleryIndex);
}

function slideGallery(index) {
  const galleryItemWidth = document.querySelector('#item').clientWidth;
  gallery.style.transform = `translateX(${galleryItemWidth * index * -1}px)`;
}

function debounce(fn, timeout = 250) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => fn.apply(this, args), timeout);
  };
}