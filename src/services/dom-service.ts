export class DOMService {
  static getElementByID(id: string): HTMLElement {
    return id ? document.getElementById(id) : null;
  }
}