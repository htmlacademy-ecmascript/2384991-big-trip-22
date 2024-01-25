import AbstractView from '../framework/view/abstract-view.js';
import { SortType, SORTS } from '../const.js';

const createSortTemplate = () => {
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
          ${value === 'day' ? 'checked' : ''} >
        <label class="trip-sort__btn" for="sort-${value}">${item}</label>
      </div>`;
  }).join('')}
</form>`;
};

export default class SortView extends AbstractView {
  #handleSortTypeChange = null;

  constructor({ onSortTypeChange }) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate();
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }

    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
