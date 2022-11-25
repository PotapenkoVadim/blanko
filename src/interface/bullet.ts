import { IBaseHTMLElement } from './base-html-element';

export interface IBullet {
  gallery: IBaseHTMLElement;
  readonly bulletIndex: number;
  handleBulletClick: () => void;
}