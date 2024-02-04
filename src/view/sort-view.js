import AbstractView from '../framework/view/abstract-view.js';
import { SortType, SORTS } from '../const.js';

const createSortTemplate = (currentSortType) => {
  const sortTypes = Object.keys(SortType).map((key) => SortType[key].toLowerCase());

  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${SORTS.map((item) => {
    const value = item.toLowerCase();
    const isSortType = sortTypes.includes(value);
    return `
      <div class="trip-sort__item  trip-sort__item--${value}">
        <input
          id="sort-${value}"
          class="trip-sort__input  visually-hidden"
          type="radio"
          name="trip-sort"
          value="sort-${value}"
          ${isSortType ? `data-sort-type="${value}"` : ''}
          ${isSortType ? '' : 'disabled'}
          ${currentSortType === value ? 'checked' : ''} >
        <label class="trip-sort__btn" for="sort-${value}">${item}</label>
      </div>`;
  }).join('')}
  </form>`;
};

export default class SortView extends AbstractView {
  #handleSortTypeChange = null;
  #currentSortType = null;

  constructor({ currentSortType, onSortTypeChange }) {
    super();
    this.#currentSortType = currentSortType;
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate(this.#currentSortType);
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }

    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
