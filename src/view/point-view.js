import { createElement } from '../render.js';
import { humanizePointsDate, humanizeShortDate } from '../util.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);


const createPointTemplate = (point) => {
  const { dateFrom, dateTo, type, destination, basePrice } = point;
  const durationOfStay = dayjs.duration(dayjs(dateTo).diff(dayjs(dateFrom)));
  const durationOfStayFormat = `${durationOfStay.days() > 0 ? `${durationOfStay.days()}D ` : ''}${durationOfStay.hours() > 0 ? `${durationOfStay.hours()}H ` : ''}${durationOfStay.minutes()}M`;

  return (`<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${humanizeShortDate(dateFrom)}">${humanizeShortDate(dateFrom)}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event ${type} icon">
    </div>
    <h3 class="event__title">${type} ${destination}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${humanizePointsDate(dateFrom)}">${humanizePointsDate(dateFrom)}</time>
        &mdash;
        <time class="event__end-time" datetime="${humanizePointsDate(dateTo)}">${humanizePointsDate(dateTo)}</time>
      </p>
      <p class="event__duration">${durationOfStayFormat}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">Order Uber</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">20</span>
      </li>
    </ul>
    <button class="event__favorite-btn event__favorite-btn--active" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`);
};

export default class PointView {
  constructor({point}) {
    this.point = point;
  }

  getTemplate() {
    return createPointTemplate(this.point);
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
