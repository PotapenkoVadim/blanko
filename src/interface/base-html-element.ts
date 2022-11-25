import { htmlEventFn } from '../types';

export interface IBaseHTMLElement {
  readonly element: HTMLElement;
  handleClick: (callback: htmlEventFn<MouseEvent>) => void;
  toggleClassStyle: (classStyle: string) => boolean;
  removeClassStyle: (classStyle: string) => void;
  setStyle: (key: any, value: string) => void;
}