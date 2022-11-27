import { IBaseHTMLElement, IGallery } from '../interface';
import { IBullet } from '../interface/bullet';

export class Bullet implements IBullet {
  bulletNode: IBaseHTMLElement = null;
  gallery: IGallery = null;

  constructor(bullet: IBaseHTMLElement, galleryElement: IGallery) {
    this.bulletNode = bullet;
    this.gallery = galleryElement;
  }

  get bulletIndex(): number {
    return Number(this.bulletNode.element.dataset.index);
  }

  handleBulletClick(): void {
    return this.bulletNode.handleClick(() => {
      this.gallery.slide(this.bulletIndex);
    });
  }
}
