import PointView from '../view/point-view.js';
import FormEditView from '../view/form-edit-view.js';
import { isEscapeKey } from '../utils/common.js';
import { render, replace } from '../framework/render.js';

export default class PointPresenter {
  #container = null;
  #pointsModel = null;
  #point = null;

  #pointComponent = null;
  #formEditComponent = null;

  constructor({ container, pointsModel }) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init(point) {
    this.#point = point;

    this.#pointComponent = new PointView({
      point: this.#point,
      destination: this.#pointsModel.getDestinationById(this.#point.destination),
      offers: [...this.#pointsModel.getOfferById(this.#point.type, this.#point.offers)],
      onEditClick: this.#hadleEditClick,
    });

    this.#formEditComponent = new FormEditView({
      point: this.#point,
      destination: this.#pointsModel.getDestinationById(this.#point.destination),
      checkedOffers: [...this.#pointsModel.getOfferById(this.#point.type, this.#point.offers)],
      offers: this.#pointsModel.getOfferByType(this.#point.type),
      onFormSubmit: this.#handleFormSubmit,
      onEditClick: this.#handleFormSubmit,
    });

    render(this.#pointComponent, this.#container);
  }

  #replacePointToForm() {
    replace(this.#formEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);

  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#formEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #hadleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
  };
}
