import { render, RenderPosition, remove } from '../framework/render.js';
import { createIdGenerator, isEscapeKey } from '../utils/common.js';
import { UserAction, UpdateType } from '../const.js';
import FormEditView from '../view/form-edit-view.js';

export default class FormAddPresenter {
  #point = null;
  #pointListContainer = null;
  #handleDataChange = null;
  #handleDestroy = null;
  #allDestinations = null;
  #allOffers = null;
  #formEditComponent = null;

  constructor({ pointListContainer, onDataChange, onDestroy, allDestinations, allOffers }) {
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
    this.#allDestinations = allDestinations;
    this.#allOffers = allOffers;
  }

  init(point) {
    this.#point = point;

    if (this.#formEditComponent !== null) {
      return;
    }

    this.#formEditComponent = new FormEditView({
      point: this.#point,
      allOffers: this.#allOffers,
      allDestinations: this.#allDestinations,
      onFormSubmit: this.#handleFormSubmit,
      onDeleteClick: this.#handleDeleteClick,
    });

    render(this.#formEditComponent, this.#pointListContainer, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#formEditComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#formEditComponent);
    this.#formEditComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleFormSubmit = (point) => {
    const pointId = createIdGenerator(100);

    this.#handleDataChange(
      UserAction.ADD_POINT,
      UpdateType.MINOR,

      {id: pointId, ...point},
    );
    this.destroy();
  };

  #handleDeleteClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.destroy();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };
}
