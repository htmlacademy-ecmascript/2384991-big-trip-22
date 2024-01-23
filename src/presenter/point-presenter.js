import PointView from '../view/point-view.js';
import FormEditView from '../view/form-edit-view.js';
import { isEscapeKey } from '../utils/common.js';
import { render, replace, remove } from '../framework/render.js';
import { Mode } from '../const.js';

export default class PointPresenter {
  #container = null;
  #pointsModel = null;

  #handleDataChange = null;
  #handleModeChange = null;

  #pointComponent = null;
  #formEditComponent = null;

  #point = null;
  #mode = Mode.DEFAULT;

  constructor({ container, pointsModel, onDataChange, onModeChange }) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;
    const prevPointComponent = this.#pointComponent;
    const prevFormEditComponent = this.#formEditComponent;

    this.#pointComponent = new PointView({
      point: this.#point,
      destination: this.#pointsModel.getDestinationById(this.#point.destination),
      offers: [...this.#pointsModel.getOfferById(this.#point.type, this.#point.offers)],
      onEditClick: this.#hadleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#formEditComponent = new FormEditView({
      point: this.#point,
      destination: this.#pointsModel.getDestinationById(this.#point.destination),
      checkedOffers: [...this.#pointsModel.getOfferById(this.#point.type, this.#point.offers)],
      offers: this.#pointsModel.getOfferByType(this.#point.type),
      onFormSubmit: this.#handleFormSubmit,
      onEditClick: this.#hadleEditCloseClick,
    });

    if(prevPointComponent === null || prevFormEditComponent === null) {
      render(this.#pointComponent, this.#container);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#formEditComponent, prevFormEditComponent);
    }

    remove(prevPointComponent);
    remove(prevFormEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#formEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToPoint();
    }
  }

  #replacePointToForm() {
    replace(this.#formEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#formEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };

  #hadleEditClick = () => {
    this.#replacePointToForm();
  };

  #hadleEditCloseClick = () => {
    this.#replaceFormToPoint();
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(point);
    this.#replaceFormToPoint();
  };
}
