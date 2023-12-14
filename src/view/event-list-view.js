import { createElement } from '../render.js';

const createEditListTemplate = () => '<ul class="trip-events__list"></ul>';

export default class EditListView {
  getTemplate() {
    return createEditListTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

