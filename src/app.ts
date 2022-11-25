import './index.html';
import './styles/main.scss';
import { Gallery, Bullet } from './models';
import { debounce } from './helpers';
import { DOMService } from './services/dom-service';
import { ElementMarkerVariant } from './enums/element-marker-variant';

/* ### Burger menu ### */
const burgerMenu = DOMService.getElement('burgerMenu', ElementMarkerVariant.ID);
const closeMenu = DOMService.getElement('closeMenu', ElementMarkerVariant.ID);
const headerListSidebar = DOMService.getElement('headerList', ElementMarkerVariant.ID);
const headerLinks = DOMService.getElements('header__item', ElementMarkerVariant.CLASS_NAME);

const removeHeaderListActiveClass = () => headerListSidebar.removeClassStyle('header__list-visible');
const toggleHeaderListActiveClass = () => headerListSidebar.toggleClassStyle('header__list-visible');

burgerMenu.handleClick(toggleHeaderListActiveClass);
closeMenu.handleClick(removeHeaderListActiveClass);
headerLinks.map((headerListItem) => headerListItem.handleClick(removeHeaderListActiveClass));

/* ### Gallery ### */
const GALLERY_TIME_DELAY = 12500;
const galleryNode = DOMService.getElement('gallery', ElementMarkerVariant.ID);
const sliderNode = DOMService.getElement('slider', ElementMarkerVariant.ID);
const rightBulletNode = DOMService.getElement('rightBullet', ElementMarkerVariant.ID);
const leftBulletNode = DOMService.getElement('leftBullet', ElementMarkerVariant.ID);

const gallery = new Gallery(galleryNode, sliderNode);
const rightBullet = new Bullet(rightBulletNode, gallery);
const leftBullet = new Bullet(leftBulletNode, gallery);

rightBullet.handleBulletClick();
leftBullet.handleBulletClick();

setInterval(() => gallery.slide(), GALLERY_TIME_DELAY);
addEventListener('resize', debounce(() => gallery.slide())); // TODO: mobile window resizes on scroll