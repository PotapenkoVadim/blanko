import { IGallery } from '../interface';
import { IBullet } from '../interface/bullet';
import { BaseHTMLElement } from './base-html-element';

export class Bullet extends BaseHTMLElement implements IBullet {
  gallery: IGallery = null;

  constructor(id: string, galleryElement: IGallery) {
    super(id);
    
    this.gallery = galleryElement;
  }

  get bulletIndex() {
    return Number(this.element.dataset.index);
  }

  handleBulletClick() {
    return this.handleClick(() => {
      this.gallery.slide(this.bulletIndex);
    });
  }
}
