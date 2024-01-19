import AbstractView from '../framework/view/abstract-view.js';

const createEditListTemplate = () => '<ul class="trip-events__list"></ul>';

export default class EditListView extends AbstractView {
  get template() {
    return createEditListTemplate();
  }
}

