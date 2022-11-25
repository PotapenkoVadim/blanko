import { IBaseHTMLElement } from '../interface';
import { DOMService } from '../services/dom-service';
import { htmlEventFn } from '../types';

export class BaseHTMLElement implements IBaseHTMLElement {
  private _element: HTMLElement = null;

  constructor(id: string) {
    this._element = DOMService.getElementByID(id);
  }

  get element() {
    return this._element;
  }

  handleClick(callback: htmlEventFn<MouseEvent>): void {
    try {
      return this._element && this._element.addEventListener('click', callback);
    } catch (error) {
      console.warn(error);
    }
  }

  toggleClassStyle(classStyle: string) {
    return this._element && this._element.classList.toggle(classStyle);
  }

  removeClassStyle(classStyle: string) {
    return this._element && this._element.classList.remove(classStyle);
  }

  setStyle(key: any, value: string) {
    return this._element.style[key] = value;
  }
}