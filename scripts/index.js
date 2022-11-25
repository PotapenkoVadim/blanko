class DOMService {
  static getElementByID(id) {
    return id ? document.getElementById(id) : null;
  }
}

class HTMLElement {
  _element = null;

  constructor(id) {
    this._element = DOMService.getElementByID(id);
  }

  get element() {
    return this._element;
  }

  handleClick(callback) {
    try {
      return this._element && this._element.addEventListener('click', callback);
    } catch (error) {
      console.warn(error);
    }
  }

  toggleClassStyle(classStyle) {
    return this._element && this._element.classList.toggle(classStyle);
  }

  removeClassStyle(classStyle) {
    return this._element && this._element.classList.remove(classStyle);
  }

  setStyle(key, value) {
    return this._element.style[key] = value;
  }
}

class Gallery extends HTMLElement {
  _index = 0;
  slider = null;

  constructor(id) {
    super(id);

    this.slider = new HTMLElement('slider');
  }

  get sliderWidth() {
    return this.slider.element.clientWidth;
  }

  calculateIndex(number) {
    this._index = number ? number : 1 - this._index;

    return this._index;
  }

  slide(number) {
    const index = this.calculateIndex(number);

    this.setStyle('transform', `translateX(${this.sliderWidth * index * -1}px)`);
  }
}

class Bullet extends HTMLElement {
  gallery = null;

  constructor(id, galleryElement) {
    super(id);
    
    this.gallery = galleryElement;
  }

  get bulletIndex() {
    return this.element.dataset.index;
  }

  handleBulletClick() {
    return this.handleClick(() => {
      this.gallery.slide(this.bulletIndex);
    });
  }
}

// helpers
function debounce(fn, timeout = 250) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => fn.apply(this, args), timeout);
  };
}

/* ### Burger menu ### */
const burgerMenu = new HTMLElement('burgerMenu');
const closeMenu = new HTMLElement('closeMenu');
const headerList = new HTMLElement('headerList');

burgerMenu.handleClick(() => headerList.toggleClassStyle('header__list-visible'));
closeMenu.handleClick(() => headerList.removeClassStyle('header__list-visible'));

/* ### Gallery ### */
const GALLERY_TIME_DELAY = 12500;
const gallery = new Gallery('gallery');
const rightBullet = new Bullet('rightBullet', gallery);
const leftBullet = new Bullet('leftBullet', gallery);

rightBullet.handleBulletClick();
leftBullet.handleBulletClick();

setInterval(() => gallery.slide(), GALLERY_TIME_DELAY);
addEventListener('resize', debounce(() => gallery.slide()));
