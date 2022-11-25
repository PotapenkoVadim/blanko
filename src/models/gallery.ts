import { IBaseHTMLElement, IGallery } from '../interface';
import { BaseHTMLElement } from './base-html-element';

export class Gallery extends BaseHTMLElement implements IGallery {
  _index = 0;
  slider: IBaseHTMLElement = null;

  constructor(id: string) {
    super(id);

    this.slider = new BaseHTMLElement('slider');
  }

  get sliderWidth() {
    return this.slider.element.clientWidth;
  }

  calculateIndex(number: number) {
    this._index = number ? number : 1 - this._index;

    return this._index;
  }

  slide(number?: number) {
    const index = this.calculateIndex(number);

    this.setStyle('transform', `translateX(${this.sliderWidth * index * -1}px)`);
  }
}