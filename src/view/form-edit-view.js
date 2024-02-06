import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { capitalizeFirstLetter } from '../utils/common.js';
import { TYPES } from '../const.js';
import flatpickr from 'flatpickr';
import he from 'he';

import 'flatpickr/dist/flatpickr.min.css';

const createCityOptionsTemplate = (allDestinations) => allDestinations.map(({name}) => `<option value="${name}"></option>`).join('');

const createTypeTemplate = (currentType, isDisabled) => TYPES.map((type) => {
  const isChecked = type === currentType;
  return `
    <div class="event__type-item">
      <input id="event-type-${type}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${isChecked ? 'checked' : ''}${isDisabled ? 'disabled' : ''}>
      <label class="event__type-label  event__type-label--${type}" for="event-type-${type}">${capitalizeFirstLetter(type)}</label>
    </div>
  `;
}).join('');

const createOffersTemplate = (offersByType, checkedOffers, isDisabled) => offersByType.map((offer) => {
  const { id, title, price } = offer;
  const checkedOfferIds = checkedOffers.map((checkedOffer) => checkedOffer.id);
  const isChecked = checkedOfferIds.includes(offer.id);
  return `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden"
               id="event-offer-${id}"
               type="checkbox"
               name="event-offer-${id}"
               ${isChecked ? 'checked' : ''}
               data-offer-id="${id}"
               ${isDisabled ? 'disabled' : ''}>
        <label class="event__offer-label" for="event-offer-${id}">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </label>
      </div>
    `;
}).join('');


const createFormEditView = (point, allDestinations, offers, checkedOffers, isNewPoint = false, isSaving, isDeleting, isDisabled) => {
  const { type, id, basePrice } = point;
  const destination = allDestinations.find((dest) => dest.id === point.destination) || {name: '', description: '', pictures: []};
  const { name, description, pictures } = destination;
  const offersByType = offers.find((offer) => offer.type === point.type) || { offers: [] };
  const isOffersExist = offersByType && offersByType.offers.length > 0;
  const offersTemplate = isOffersExist ? createOffersTemplate(offersByType.offers, checkedOffers) : '';

  const deleteButtonTemplate = isNewPoint
    ? '<button class="event__reset-btn" type="reset">Cancel</button>'
    : `<button class="event__reset-btn" type="reset" ${isDisabled ? 'disabled' : ''}>${isDeleting ? 'Deleting...' : 'Delete'}</button>`;

  const destinationPictureSection = pictures.length !== 0 ? `<div class="event__photos-container">
  <div class="event__photos-tape">
  ${pictures.map(({ description: descriptionPicture, src }) => `<img class="event__photo" src="${src}" alt="${descriptionPicture}">`).join('')}
  </div></div>` : '';

  const destinationSection = name && description ? `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>
        ${destinationPictureSection}
    </section>` : '';

  return (`<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
<header class="event__header">
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event ${type} icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox" ${isDisabled ? 'disabled' : ''}>
    <div class="event__type-list">
      <fieldset class="event__type-group" ${isDisabled ? 'disabled' : ''}>
        <legend class="visually-hidden">Event type</legend>
        ${createTypeTemplate(type)}
      </fieldset>
    </div>
  </div>
  <div class="event__field-group  event__field-group--destination">
  <label class="event__label  event__type-output" for="event-destination-${destination.id}">
  ${capitalizeFirstLetter(type)}
  </label>
    <input class="event__input  event__input--destination" id="event-destination-${destination.id}" type="text" name="event-destination" value="${he.encode(name)}" list="destination-list-${destination.id}" placeholder="Where should we go?" required ${isDisabled ? 'disabled' : ''}>
    <datalist id="destination-list-${destination.id}">
      ${createCityOptionsTemplate(allDestinations)}
    </datalist>
  </div>
  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-${id}">From</label>
    <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="" required ${isDisabled ? 'disabled' : ''}>
    &mdash;
    <label class="visually-hidden" for="event-end-time-${id}">To</label>
    <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="" required ${isDisabled ? 'disabled' : ''}>
  </div>
  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-${id}">
      <span class="visually-hidden">Price</span>
      &euro;
    </label>
    <input class="event__input  event__input--price" id="event-price-${id}" type="number" min="1" max="100000" name="event-price" value="${he.encode(String(basePrice))}" required ${isDisabled ? 'disabled' : ''}>
  </div>
  <button class="event__save-btn  btn  btn--blue" type="submit" ${isDisabled ? 'disabled' : ''}>${isSaving ? 'Saving...' : 'Save'}</button>
  ${deleteButtonTemplate}
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
  ${destinationSection}
</section>
</form>
</li>`);
};

export default class FormEditView extends AbstractStatefulView {
  #allOffers = null;
  #checkedOffers = null;
  #allDestinations = null;
  #pointsModel = null;
  #datepickerTo = null;
  #datepickerFrom = null;
  #handleFormSubmit = null;
  #handleEditClick = null;
  #handleDeleteClick = null;

  constructor({point, allOffers, checkedOffers, allDestinations, onFormSubmit, onEditClick, onDeleteClick, pointsModel, isNewPoint}) {
    super();

    this._setState(FormEditView.parsePointToState(point));
    this.#allOffers = allOffers;
    this.#allDestinations = allDestinations;
    this.#checkedOffers = checkedOffers;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleEditClick = onEditClick;
    this.#handleDeleteClick = onDeleteClick;
    this.#pointsModel = pointsModel;
    this.isNewPoint = isNewPoint;
    this.isDateFromValid = !!point.dateFrom;
    this.isDateToValid = !!point.dateTo;

    this._restoreHandlers();
  }

  get template() {
    const { isSaving, isDeleting, isDisabled } = this._state;
    return createFormEditView(this._state, this.#allDestinations, this.#allOffers, this.#checkedOffers, this.isNewPoint, isSaving, isDeleting, isDisabled);
  }

  reset(point) {
    this.updateElement(
      FormEditView.parsePointToState(point),
    );
  }

  removeElement() {
    super.removeElement();

    if (this.#datepickerFrom) {
      this.#datepickerFrom.destroy();
      this.#datepickerFrom = null;
    }

    if (this.#datepickerTo) {
      this.#datepickerTo.destroy();
      this.#datepickerTo = null;
    }
  }

  _restoreHandlers() {
    this.element.querySelector('.event--edit')?.addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#priceInputChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelector('.event__type-group').addEventListener('change', this.#eventTypeChangeHandler);
    this.element.querySelector('.event__available-offers')?.addEventListener('change', this.#selectOfferChangeHandler);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formDeleteClickHandler);

    this.#setDatepickers();
  }

  #setDatepickers() {
    const commonConfig = {
      dateFormat: 'd/m/y H:i',
      enableTime: true,
      'time_24hr': true,
    };
    const eventStartTime = this.element.querySelector('[name="event-start-time"]');
    const eventEndTime = this.element.querySelector('[name="event-end-time"]');

    this.#datepickerFrom = flatpickr(
      eventStartTime,
      {
        ...commonConfig,
        defaultDate: this._state.dateFrom,
        onClose: this.#dateFromCloseHandler,
        maxDate: this._state.dateTo
      });

    this.#datepickerTo = flatpickr(
      eventEndTime,
      {
        ...commonConfig,
        defaultDate: this._state.dateTo,
        onClose: this.#dateToCloseHandler,
        minDate: this._state.dateFrom
      });
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    if (this.isDateFromValid && this.isDateToValid) {
      this.#handleFormSubmit(FormEditView.parseStateToPoint(this._state));
    }
  };

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

  #formDeleteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick(FormEditView.parseStateToPoint(this._state));
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
      const selectedDestinationId = (selectedDestination) ? selectedDestination.id : this._state.destination;

      this.updateElement({
        destination: selectedDestinationId,
      });

    }
  };

  #eventTypeChangeHandler = (evt) => {
    evt.preventDefault();
    const newType = evt.target.value;
    const offersForNewType = this.#pointsModel.getOfferByType(newType)?.offers || [];

    this.updateElement({
      type: newType,
      offers: offersForNewType,
    });
  };

  #selectOfferChangeHandler = () => {
    const checkedOffers = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked'));

    this._setState({...this._state.point, offers: checkedOffers.map((offer) => offer.dataset.offerId)});
  };

  #dateFromCloseHandler = ([userDate]) => {
    if (userDate) {
      this.isDateFromValid = true;
      this.updateElement({ dateFrom: userDate });
    } else {
      this.isDateFromValid = false;
    }
  };

  #dateToCloseHandler = ([userDate]) => {
    if (userDate) {
      this.isDateToValid = true;
      this.updateElement({ dateTo: userDate });
    } else {
      this.isDateToValid = false;
    }
  };

  static parsePointToState(point) {
    return {...point,
      isDisabled: false,
      isSaving: false,
      isDeleting: false,
    };
  }

  static parseStateToPoint(state) {
    const point = {...state};

    delete point.isDisabled;
    delete point.isSaving;
    delete point.isDeleting;

    return point;
  }
}
