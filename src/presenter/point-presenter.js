import PointView from '../view/point-view.js';
import FormEditView from '../view/form-edit-view.js';
import { isEscapeKey } from '../utils/common.js';
import { render, replace, remove } from '../framework/render.js';
import { ModeType, UserAction, UpdateType } from '../const.js';
import { isDatesEqual } from '../utils/points.js';

export default class PointPresenter {
  #container = null;
  #pointsModel = null;

  #handleDataChange = null;
  #handleModeChange = null;

  #pointComponent = null;
  #formEditComponent = null;

  #point = null;
  #mode = ModeType.VIEWING;

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
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#formEditComponent = new FormEditView({
      point: this.#point,
      allOffers: this.#pointsModel.offers,
      checkedOffers: [...this.#pointsModel.getOfferById(this.#point.type, this.#point.offers)],
      allDestinations: this.#pointsModel.destinations,
      onFormSubmit: this.#handleFormSubmit,
      onEditClick: this.#handleEditCloseClick,
      onDeleteClick: this.#handleDeleteClick,
      pointsModel: this.#pointsModel,
    });

    if(prevPointComponent === null || prevFormEditComponent === null) {
      render(this.#pointComponent, this.#container);
      return;
    }

    if (this.#mode === ModeType.VIEWING) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === ModeType.EDITING) {
      replace(this.#pointComponent, prevFormEditComponent);
      this.#mode = ModeType.VIEWING;
    }

    remove(prevPointComponent);
    remove(prevFormEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#formEditComponent);
  }

  resetView() {
    if (this.#mode !== ModeType.VIEWING) {
      this.#formEditComponent.reset(this.#point);
      this.#replaceFormToPoint();
    }
  }

  setSaving() {
    if (this.#mode === ModeType.EDITING) {
      this.#formEditComponent.updateElement({
        isDisabled: true,
        isSaving: true,
      });
    }
  }

  setDeleting() {
    if (this.#mode === ModeType.EDITING) {
      this.#formEditComponent.updateElement({
        isDisabled: true,
        isDeleting: true,
      });
    }
  }

  setFavoring() {
    if (this.#mode === ModeType.VIEWING) {
      this.#pointComponent.updateElement({
        isDisabled: true,
      });
    }
  }

  setAborting() {
    const resetPointState = () => {
      this.#pointComponent.updateElement({
        isDisabled: false,
      });
    };

    if (this.#mode === ModeType.VIEWING) {
      this.#pointComponent.shake(resetPointState);
      return;
    }

    const resetFormState = () => {
      this.#formEditComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };
    this.#formEditComponent.shake(resetFormState);
  }

  #replacePointToForm() {
    replace(this.#formEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escapeKeydownHandler);
    this.#handleModeChange();
    this.#mode = ModeType.EDITING;
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#formEditComponent);
    document.removeEventListener('keydown', this.#escapeKeydownHandler);
    this.#mode = ModeType.VIEWING;
  }

  #escapeKeydownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#formEditComponent.reset(this.#point);
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escapeKeydownHandler);
    }
  };

  #handleFavoriteClick = () => {
    this.setFavoring();
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.PATCH,
      {...this.#point, isFavorite: !this.#point.isFavorite}
    );
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleEditCloseClick = () => {
    this.#formEditComponent.reset(this.#point);
    this.#replaceFormToPoint();
  };

  #handleDeleteClick = (point) => {
    this.#handleDataChange(
      UserAction.DELETE_POINT,
      UpdateType.MINOR,
      point,
    );
  };

  #handleFormSubmit = (updatedPoint) => {
    const isMinorUpdate = (
      !isDatesEqual(this.#point.dateFrom, updatedPoint.dateFrom) ||
      !isDatesEqual(this.#point.dateTo, updatedPoint.dateTo) ||
      this.#point.basePrice !== updatedPoint.basePrice
    );

    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      isMinorUpdate ? UpdateType.MINOR : UpdateType.PATCH,
      updatedPoint
    );
  };
}
