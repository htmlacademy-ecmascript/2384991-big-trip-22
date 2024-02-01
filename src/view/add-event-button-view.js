import AbstractView from '../framework/view/abstract-view.js';

const createAddEventButtonTemplate = () => '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';

export default class AddEventButton extends AbstractView {
  #handleAddClick = null;

  constructor({ onAddEventClick }) {
    super();
    this.#handleAddClick = onAddEventClick;

    this.element.addEventListener('click', this.#addClickHandler);
  }

  get template() {
    return createAddEventButtonTemplate();
  }

  #addClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleAddClick();
  };
}

