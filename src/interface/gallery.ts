import { IBaseHTMLElement } from './base-html-element';

export interface IGallery extends IBaseHTMLElement {
  _index: number;
  slider: IBaseHTMLElement;
  readonly sliderWidth: number;
  calculateIndex: (number: number) => number;
  slide: (number?: number) => void;
}