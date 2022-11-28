import { ElementMarkerVariant } from '../enums';
import { IBaseHTMLElement } from '../interface';
import { BaseHTMLElement } from '../models';

export class DOMService {
  static getMarkerString(
    variant: ElementMarkerVariant,
    marker: string
  ): string {
    if (variant === ElementMarkerVariant.ID) {
      return `#${marker}`;
    } else if (variant === ElementMarkerVariant.CLASS_NAME) {
      return `.${marker}`;
    }

    return marker;
  }

  static getElement(
    marker: string,
    variant: ElementMarkerVariant
  ): IBaseHTMLElement {
    try {
      const markerString = DOMService.getMarkerString(variant, marker);

      return new BaseHTMLElement(
        document.querySelector<HTMLElement>(markerString)
      );
    } catch (error) {
      console.warn(error);

      return null;
    }
  }

  static getElements(
    marker: string,
    variant: ElementMarkerVariant
  ): Array<IBaseHTMLElement> {
    try {
      const markerString = DOMService.getMarkerString(variant, marker);
      const nodes = document.querySelectorAll<HTMLElement>(markerString);

      return Array.from(nodes).map((node) => new BaseHTMLElement(node));
    } catch (error) {
      console.warn(error);

      return [];
    }
  }
}
