import AbstractView from '../framework/view/abstract-view.js';
import { capitalizeFirstLetter } from '../utils/common.js';
import { humanizePointsDate } from '../utils/dates.js';
import { mockOffers } from '../mock/offers.js';
import { CITIES } from '../const.js';

const createCityOptionsTemplate = () => CITIES.map((city) => `<option value="${city}"></option>`).join('');
const createTypeTemplate = () => mockOffers.map((offer) => `
  <div class="event__type-item">
  <input id="event-type-${offer.id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
  <label class="event__type-label  event__type-label--${offer.type}" for="event-type-${offer.id}">${capitalizeFirstLetter(offer.type)}</label>
</div>
    `).join('');

const createOffersTemplate = (offersByType, checkedOffers) => offersByType.map((offer) => {
  const checkedOfferIds = checkedOffers.map((checkedOffer) => checkedOffer.id);
  const isChecked = checkedOfferIds.includes(offer.id);
  return `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer-${offer.id}" ${isChecked ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-${offer.id}">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>
    `;
}).join('');

const createFormEditView = (point, destination, offersByType, checkedOffers) => {
  const { dateFrom, dateTo, type, basePrice } = point;
  const { name, description, pictures } = destination;
  const { offers } = offersByType;
  const isOffersExist = offersByType && offers && offers.length > 0;
  const offersTemplate = isOffersExist ? createOffersTemplate(offersByType.offers, checkedOffers) : '';

  return (`<form class="event event--edit" action="#" method="post">
<header class="event__header">
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-${offers.id}">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event ${type} icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${offers.id}" type="checkbox">
    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>
        ${createTypeTemplate()}
      </fieldset>
    </div>
  </div>
  <div class="event__field-group  event__field-group--destination">
    <label class="event__label  event__type-output" for="event-destination-${offers.id}">
      ${type}
    </label>
    <input class="event__input  event__input--destination" id="event-destination-${offers.id}" type="text" name="event-destination" value="${name}" list="destination-list-${offers.id}">
    <datalist id="destination-list-${offers.id}">
      ${createCityOptionsTemplate()}
    </datalist>
  </div>
  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-${offers.id}">From</label>
    <input class="event__input  event__input--time" id="event-start-time-${offers.id}" type="text" name="event-start-time" value="${humanizePointsDate(dateFrom)}">
    &mdash;
    <label class="visually-hidden" for="event-end-time-${offers.id}">To</label>
    <input class="event__input  event__input--time" id="event-end-time-${offers.id}" type="text" name="event-end-time" value="${humanizePointsDate(dateTo)}">
  </div>
  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-${offers.id}">
      <span class="visually-hidden">Price</span>
      &euro;
    </label>
    <input class="event__input  event__input--price" id="event-price-${offers.id}" type="text" name="event-price" value="${basePrice}">
  </div>
  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
  <button class="event__reset-btn" type="reset">Delete</button>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</header>
<section class="event__details">
${isOffersExist ? `
<section class="event__section  event__section--offers">
  <h3 class="event__section-title  event__section-title--offers">Offers</h3>
  <div class="event__available-offers">${offersTemplate}</div>
</section>
` : ''}
  <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${description}</p>
    <div class="event__photos-container">
      <div class="event__photos-tape">
      ${pictures.map(({ description: descriptionPicture, src }) => `<img class="event__photo" src="${src}" alt="${descriptionPicture}">`).join('')}
      </div>
    </div>
  </section>
</section>
</form>`);
};

export default class FormEditView extends AbstractView {
  #point = null;
  #destination = null;
  #offers = null;
  #checkedOffers = null;
  #handleFormSubmit = null;
  #handleEditClick = null;

  constructor({point, destination, offers, checkedOffers, onFormSubmit, onEditClick}) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offers = offers;
    this.#checkedOffers = checkedOffers;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleEditClick = onEditClick;

    this.element.querySelector('.event--edit')?.addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createFormEditView(this.#point, this.#destination, this.#offers, this.#checkedOffers);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}
