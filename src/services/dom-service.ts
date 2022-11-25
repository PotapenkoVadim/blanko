import { ElementMarkerVariant } from '../enums/element-marker-variant';
import { IBaseHTMLElement } from '../interface';
import { BaseHTMLElement,  } from '../models';

export class DOMService {
  static getElement(marker: string, variant: ElementMarkerVariant): IBaseHTMLElement {
    try {
      let markerString: string;
  
      if (variant === ElementMarkerVariant.ID) {
        markerString = `#${marker}`;
      } else if (variant === ElementMarkerVariant.CLASS_NAME) {
        markerString = `.${marker}`
      }
      
      return new BaseHTMLElement(document.querySelector<HTMLElement>(markerString));
    } catch (error) {
      console.warn(error);

      return null;
    }
  }

  static getElements(marker: string, variant: ElementMarkerVariant): Array<IBaseHTMLElement> {
    try {
      let markerString: string;
  
      if (variant === ElementMarkerVariant.ID) {
        markerString = `#${marker}`;
      } else if (variant === ElementMarkerVariant.CLASS_NAME) {
        markerString = `.${marker}`
      }
  
      const nodes = document.querySelectorAll<HTMLElement>(markerString);
  
      return Array
        .from(nodes)
        .map((node) => new BaseHTMLElement(node))
    } catch (error) {
      console.warn(error);

      return [];
    }
  }
}
