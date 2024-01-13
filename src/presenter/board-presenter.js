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

    render(new FormEditView({
      point: this.#boardPoints[0],
      destination: this.#pointsModel.getDestinationById(this.#boardPoints[0].destination),
      checkedOffers: [...this.#pointsModel.getOfferById(this.#boardPoints[0].type, this.#boardPoints[0].offers)],
      offers: this.#pointsModel.getOfferByType(this.#boardPoints[0].type),
    }), this.#editListComponent.element);

    for (let i = 1; i < this.#boardPoints.length; i++) {
      render(new PointView({
        point: this.#boardPoints[i],
        destination: this.#pointsModel.getDestinationById(this.#boardPoints[i].destination),
        offers: [...this.#pointsModel.getOfferById(this.#boardPoints[i].type, this.#boardPoints[i].offers)],
      }), this.#editListComponent.element);
    }
  }
}
