import {customAttribute, inject} from 'aurelia-framework';
import $ from 'jquery';

@customAttribute('mdi-collapsible')
@inject(Element)
export class MaterializeSideNav {
  constructor(element) {
    this.element = element;
  }

  attached() {
    this.options = { };
    if(this.element.dataset.collapsible) {
      this.options.collapsible = this.element.dataset.collapsible;
    }

    $(this.element).collapsible(this.options);
  }
}
