import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { capitalizeFirstLetter } from '../utils/common.js';
import { humanizePointsDate } from '../utils/points.js';
import { CITIES, TYPES } from '../const.js';

const createCityOptionsTemplate = () => CITIES.map((city) => `<option value="${city}"></option>`).join('');

const createTypeTemplate = (currentType) => TYPES.map((type, id) => {
  const isChecked = type === currentType;
  return `
    <div class="event__type-item">
      <input id="event-type-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${isChecked ? 'checked' : ''}>
      <label class="event__type-label  event__type-label--${type}" for="event-type-${id}">${capitalizeFirstLetter(type)}</label>
    </div>
  `;
}).join('');

const createOffersTemplate = (offersByType, checkedOffers) => offersByType.map((offer) => {
  const { id, title, price } = offer;
  const checkedOfferIds = checkedOffers.map((checkedOffer) => checkedOffer.id);
  const isChecked = checkedOfferIds.includes(offer.id);
  return `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}" type="checkbox" name="event-offer-${id}" ${isChecked ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-${id}">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </label>
      </div>
    `;
}).join('');

const createFormEditView = (point, destination, offersByType, checkedOffers) => {
  const { dateFrom, dateTo, type, id, basePrice } = point;
  const { name, description, pictures } = destination;
  const { offers } = offersByType;
  const isOffersExist = offersByType && offers && offers.length > 0;
  const offersTemplate = isOffersExist ? createOffersTemplate(offersByType.offers, checkedOffers) : '';

  return (`<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
<header class="event__header">
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event ${type} icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">
    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>
        ${createTypeTemplate(type)}
      </fieldset>
    </div>
  </div>
  <div class="event__field-group  event__field-group--destination">
  <label class="event__label  event__type-output" for="event-destination-${destination.id}">
  ${capitalizeFirstLetter(type)}
  </label>
    <input class="event__input  event__input--destination" id="event-destination-${destination.id}" type="text" name="event-destination" value="${name}" list="destination-list-${destination.id}">
    <datalist id="destination-list-${destination.id}">
      ${createCityOptionsTemplate()}
    </datalist>
  </div>
  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-${id}">From</label>
    <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${humanizePointsDate(dateFrom)}">
    &mdash;
    <label class="visually-hidden" for="event-end-time-${id}">To</label>
    <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${humanizePointsDate(dateTo)}">
  </div>
  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-${id}">
      <span class="visually-hidden">Price</span>
      &euro;
    </label>
    <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value="${basePrice}">
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
</form>
</li>`);
};

export default class FormEditView extends AbstractStatefulView {
  #point = null;
  #destination = null;
  #offers = null;
  #checkedOffers = null;
  #allDestinations = null;
  #dateFrom = null;
  #dateTo = null;
  #handleFormSubmit = null;
  #handleEditClick = null;
  #pointsModel = null;

  constructor({point, destination, offers, checkedOffers, allDestinations, onFormSubmit, onEditClick, pointsModel }) {
    super();
    this._setState(FormEditView.parsePointToState(point));
    this.#destination = destination;
    this.#offers = offers;
    this.#checkedOffers = checkedOffers;
    this.#allDestinations = allDestinations;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleEditClick = onEditClick;
    this.#pointsModel = pointsModel;
    this._restoreHandlers();
  }

  get template() {
    return createFormEditView(this._state, this.#destination, this.#offers, this.#checkedOffers);
  }

  reset(point) {
    this.updateElement(
      FormEditView.parsePointToState(point),
    );
  }

  removeElement() {
    super.removeElement();
  }

  _restoreHandlers() {
    this.element.querySelector('.event--edit')?.addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#priceInputChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelector('.event__type-group').addEventListener('change', this.#eventTypeChangeHandler);
    this.element.querySelector('.event__available-offers').addEventListener('change', this.#selectOfferChangeHandler);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(FormEditView.parseStateToPoint(this._state));
  };

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

  #priceInputChangeHandler = (evt) => {
    evt.preventDefault();
    this._setState({
      basePrice: evt.target.value,
    });
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();
    if(evt.target.tagName === 'INPUT') {
      const selectedDestination = this.#allDestinations.find((pointDestination) => pointDestination.name === evt.target.value);
      console.log('Calling updateElement with new destination:', selectedDestination);

      this.updateElement({
        ...this._state,
        destination: selectedDestination.id,
      });
    }
  };

  #eventTypeChangeHandler = (evt) => {
    evt.preventDefault();
    const newType = evt.target.value;
    const offersForNewType = this.#pointsModel.getOfferByType(newType)?.offers || [];

    console.log('New type:', newType);
    console.log('Offers for new type:', offersForNewType);

    this.updateElement({
      ...this._state,
      type: newType,
      offers: offersForNewType,
    });
  };

  #selectOfferChangeHandler = (evt) => {
    if (evt.target.tagName === 'INPUT') {
      if (evt.target.checked) {
        this._setState({
          offers: [...this._state.offers, evt.target.dataset.offerId]
        });
      } else {
        this._setState({
          offers: this._state.offers.filter((offer) => offer !== evt.target.dataset.offerId)
        });
        this.updateElement(this._state.offers);
      }
    }
  };

  static parsePointToState(point) {
    return {...point};
  }

  static parseStateToPoint(state) {
    const point = {...state};

    return point;
  }
}
