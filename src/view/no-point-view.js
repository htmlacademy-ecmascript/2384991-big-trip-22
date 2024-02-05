import AbstractView from '../framework/view/abstract-view.js';
import { NoPointsTextType } from '../const.js';

const createNoViewTemplate = (filterType, isError = false) => {
  const message = isError ? NoPointsTextType.ERROR : NoPointsTextType[filterType];
  return `<p class="trip-events__msg">${message}</p>`;
};

export default class NoPointView extends AbstractView {
  #filterType = null;
  #isError = false;

  constructor({filterType, isError = false}) {
    super();
    this.#filterType = filterType;
    this.#isError = isError;
  }

  get template() {
    return createNoViewTemplate(this.#filterType, this.#isError);
  }
}

