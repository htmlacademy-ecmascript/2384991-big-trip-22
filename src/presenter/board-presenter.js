import EditListView from '../view/event-list-view.js';
import FormEditView from '../view/form-edit-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import { render } from '../framework/render.js';

export default class BoardPresenter {
  #container = null;
  #pointsModel = null;

  #sortComponent = new SortView();
  #editListComponent = new EditListView();

  #boardPoints = [];

  constructor({ container, pointsModel }) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];

    render(this.#sortComponent, this.#container);
    render(this.#editListComponent, this.#container);

    this.#renderForm(this.#boardPoints[0]);

    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(this.#boardPoints[i]);
    }
  }

  #renderForm(point) {
    const formComponent = new FormEditView({
      point: point,
      destination: this.#pointsModel.getDestinationById(point.destination),
      checkedOffers: [...this.#pointsModel.getOfferById(point.type, point.offers)],
      offers: this.#pointsModel.getOfferByType(point.type),
    });

    render(formComponent, this.#editListComponent.element);
  }

  #renderPoint(point) {
    const pointComponent = new PointView({
      point: point,
      destination: this.#pointsModel.getDestinationById(point.destination),
      offers: [...this.#pointsModel.getOfferById(point.type, point.offers)],
    });

    render(pointComponent, this.#editListComponent.element);
  }
}
