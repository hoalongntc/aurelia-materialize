import {customAttribute, inject} from 'aurelia-framework';
import $ from 'jquery';

@customAttribute('mdi-size-nav')
@inject(Element)
export class MaterializeSideNav {
  constructor(element) {
    this.element = element;
  }

  attached() {
    $(this.element).sideNav();
  }
}
