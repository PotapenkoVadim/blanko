import { IBaseHTMLElement } from './base-html-element';

export interface IGallery {
  _index: number;
  gallery: IBaseHTMLElement;
  slider: IBaseHTMLElement;
  readonly sliderWidth: number;
  calculateIndex: (number: number) => number;
  slide: (number?: number) => void;
}
