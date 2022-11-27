import { IBaseHTMLElement } from './base-html-element';
import { IGallery } from './gallery';

export interface IBullet {
  bulletNode: IBaseHTMLElement;
  gallery: IGallery;
  readonly bulletIndex: number;
  handleBulletClick: () => void;
}
