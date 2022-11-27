import { IBaseHTMLElement, IGallery } from '../interface';

export class Gallery implements IGallery {
  _index = 0;
  gallery: IBaseHTMLElement = null;
  slider: IBaseHTMLElement = null;

  constructor(gallery: IBaseHTMLElement, slider: IBaseHTMLElement) {
    this.gallery = gallery;
    this.slider = slider;
  }

  get sliderWidth(): number {
    return this.slider.element.clientWidth;
  }

  calculateIndex(number: number): number {
    this._index = number ? number : 1 - this._index;

    return this._index;
  }

  slide(number?: number): void {
    const index = this.calculateIndex(number);

    this.gallery.setStyle(
      'transform',
      `translateX(${this.sliderWidth * index * -1}px)`
    );
  }
}
