import EditListView from '../view/event-list-view.js';
import FormEditView from '../view/form-edit-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import NoPointView from '../view/no-point-view.js';
import { render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utils/common.js';

export default class BoardPresenter {
  #container = null;
  #pointsModel = null;

  #sortComponent = new SortView();
  #editListComponent = new EditListView();
  #noPointsComponent = new NoPointView();

  #boardPoints = [];

  constructor({ container, pointsModel }) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];

    this.#renderBoard();
  }

  #renderBoard() {
    render(this.#sortComponent, this.#container);
    render(this.#editListComponent, this.#container);

    if (this.#boardPoints.length === 0) {
      render(this.#noPointsComponent, this.#container);
      return;
    }

    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(this.#boardPoints[i]);
    }
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };
    const pointComponent = new PointView({
      point: point,
      destination: this.#pointsModel.getDestinationById(point.destination),
      offers: [...this.#pointsModel.getOfferById(point.type, point.offers)],
      onEditClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });
    const formEditComponent = new FormEditView({
      point: point,
      destination: this.#pointsModel.getDestinationById(point.destination),
      checkedOffers: [...this.#pointsModel.getOfferById(point.type, point.offers)],
      offers: this.#pointsModel.getOfferByType(point.type),
      onFormSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePointToForm() {
      replace(formEditComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, formEditComponent);
    }

    render(pointComponent, this.#editListComponent.element);
  }
}
