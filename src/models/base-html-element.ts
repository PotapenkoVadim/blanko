import { IBaseHTMLElement } from '../interface';
import { htmlEventFn } from '../types';

export class BaseHTMLElement implements IBaseHTMLElement {
  element: HTMLElement = null;

  constructor(node: HTMLElement) {
    this.element = node;
  }

  handleClick(callback: htmlEventFn<MouseEvent>): void {
    try {
      return this.element && this.element.addEventListener('click', callback);
    } catch (error) {
      console.warn(error);
    }
  }

  toggleClassStyle(classStyle: string): boolean {
    return this.element && this.element.classList.toggle(classStyle);
  }

  removeClassStyle(classStyle: string): void {
    return this.element && this.element.classList.remove(classStyle);
  }

  setStyle(
    key: string,
    value: string
  ): CSSStyleDeclaration & { [x: string]: string } {
    return Object.assign(this.element.style, { [key]: value });
  }
}
