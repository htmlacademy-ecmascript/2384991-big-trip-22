import AbstractView from '../framework/view/abstract-view.js';
import { humanizeShortDate } from '../utils/points.js';
import { DateType } from '../const.js';

const createTripInfoTitle = (destinationName) => `<h1 class="trip-info__title">${destinationName}</h1>`;

const createTripInfoDate = (dateFrom, dateTo) => `<p class="trip-info__dates">${humanizeShortDate(dateFrom, DateType.HEADER_DATE_FORMAT)}&nbsp—&nbsp${humanizeShortDate(dateTo, DateType.HEADER_DATE_FORMAT)}</p>`;

const createTripInfoCost = (cost) => `<p class="trip-info__cost">Total: €&nbsp;<span class="trip-info__cost-value">${cost}</span></p>`;

const createHeaderInfoViewTemplate = (dateFrom, dateTo, destinationName, cost) => `
  <section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
  ${createTripInfoTitle(destinationName)}
  ${createTripInfoDate(dateFrom, dateTo)}
  </div>
  ${createTripInfoCost(cost)}
</section>`;

export default class HeaderInfoView extends AbstractView {
  #cost = null;
  #dateFrom = null;
  #dateTo = null;
  #destinationName = null;

  constructor({dateFrom, dateTo, destinationName, cost}) {
    super();
    this.#cost = cost;
    this.#dateFrom = dateFrom;
    this.#dateTo = dateTo;
    this.#destinationName = destinationName;
  }

  get template() {
    return createHeaderInfoViewTemplate(this.#dateFrom, this.#dateTo, this.#destinationName, this.#cost);
  }
}

