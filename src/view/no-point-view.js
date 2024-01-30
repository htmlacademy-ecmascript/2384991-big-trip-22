import AbstractView from '../framework/view/abstract-view.js';
import { NoPointsTextType } from '../const.js';

const createNoViewTemplate = (filterType) => {
  const NoPointsTextValue = NoPointsTextType[filterType];

  return `<p class="trip-events__msg">${NoPointsTextValue}</p>`;
};

export default class NoPointView extends AbstractView {
  #filterType = null;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoViewTemplate(this.#filterType);
  }
}
