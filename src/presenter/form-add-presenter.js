import { render, RenderPosition, remove } from '../framework/render.js';
import { isEscapeKey } from '../utils/common.js';
import { UserAction, UpdateType, BLANK_POINT } from '../const.js';
import FormEditView from '../view/form-edit-view.js';

export default class FormAddPresenter {
  #pointListContainer = null;
  #handleDataChange = null;
  #handleDestroy = null;
  #allDestinations = null;
  #allOffers = null;
  #formEditComponent = null;
  #pointsModel = null;

  constructor({ pointListContainer, onDataChange, onDestroy, allDestinations, allOffers, pointsModel }) {
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
    this.#allDestinations = allDestinations;
    this.#allOffers = allOffers;
    this.#pointsModel = pointsModel;
  }

  init(point = BLANK_POINT) {
    if (this.#formEditComponent !== null) {
      return;
    }

    this.#formEditComponent = new FormEditView({
      point: point,
      pointsModel: this.#pointsModel,
      allOffers: this.#allOffers || [],
      allDestinations: this.#allDestinations,
      checkedOffers: [],
      onFormSubmit: this.#handleFormSubmit,
      onDeleteClick: this.#handleCancelClick,
      onEditClick: this.#hadleEditCloseClick,
      isNewPoint: true,
    });
    render(this.#formEditComponent, this.#pointListContainer, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#formEditComponent === null) {
      return;
    }

    if (this.#handleDestroy) {
      this.#handleDestroy();
    }

    remove(this.#formEditComponent);
    this.#formEditComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  setSaving() {
    this.#formEditComponent.updateElement({
      isDisabled: true,
      isSaving: true,
    });
  }

  setAborting() {
    const resetFormState = () => {
      this.#formEditComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#formEditComponent.shake(resetFormState);
  }

  #handleFormSubmit = (point) => {
    this.#handleDataChange(
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      point,
    );
  };

  #handleCancelClick = () => {
    this.destroy();
  };

  #hadleEditCloseClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.destroy();
    }
  };
}