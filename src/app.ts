import './index.html';
import './styles/main.scss';
import { BaseHTMLElement, Gallery, Bullet } from './models';
import { debounce } from './helpers';

/* ### Burger menu ### */
const burgerMenu = new BaseHTMLElement('burgerMenu');
const closeMenu = new BaseHTMLElement('closeMenu');
const headerList = new BaseHTMLElement('headerList');

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
addEventListener('resize', debounce(() => gallery.slide())); // TODO: mobile window resizes on scroll