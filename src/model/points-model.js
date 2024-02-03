import Observable from '../framework/observable.js';
import { UpdateType } from '../const.js';

export default class PointsModel extends Observable {
  #pointsApiService = null;

  #points = [];
  #offers = [];
  #destinations = [];

  constructor({pointsApiService}) {
    super();
    this.#pointsApiService = pointsApiService;
  }

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }

  getOfferByType(type) {
    return this.#offers.find((offers) => offers.type === type);
  }

  getOfferById(type, offerId) {
    const availableOffers = this.getOfferByType(type);
    const filteredOffers = availableOffers.offers.filter((offers) => offerId.find((id) => offers.id === id));

    return filteredOffers;
  }

  getDestinationById(id) {
    return this.destinations.find((destination) => destination.id === id);
  }

  async init() {
    try {
      const points = await this.#pointsApiService.points;
      this.#points = points.map(this.#adaptToClient);
      this.#offers = await this.#pointsApiService.offers;
      this.#destinations = await this.#pointsApiService.destinations;
      this._notify(UpdateType.INIT);
    } catch(err) {
      this.#points = [];
      this.#offers = [];
      this.#destinations = [];
    }
  }

  async updatePoint(updateType, updatedPoint) {
    const index = this.#points.findIndex((point) => point.id === updatedPoint.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting point');
    }

    try {
      const response = await this.#pointsApiService.updatePoint(updatedPoint);
      const updatedPointFromServer = this.#adaptToClient(response);
      this.#points = [
        ...this.#points.slice(0, index),
        updatedPointFromServer,
        ...this.#points.slice(index + 1),
      ];
      this._notify(updateType, updatedPoint);
    } catch(err) {
      throw new Error('Can\'t update point');
    }
  }

  async addPoint(updateType, addedPoint) {
    try {
      const response = await this.#pointsApiService.updatePoint(addedPoint);
      const newPoint = this.#adaptToClient(response);
      this.#points = [newPoint, ...this.#points];
      this._notify(updateType, newPoint);
    } catch(err) {
      throw new Error('Can\'t add point');
    }
  }

  async deletePoint(updateType, deletedPoint) {
    const index = this.#points.findIndex((point) => point.id === deletedPoint.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting point');
    }

    try {
      await this.#pointsApiService.deletePoint(deletedPoint);
      this.#points = [
        ...this.#points.slice(0, index),
        ...this.#points.slice(index + 1),
      ];
      this._notify(updateType);
    } catch(err) {
      throw new Error('Can\'t delete point');
    }
  }

  #adaptToClient(point) {
    const adaptedPoint = {...point,
      basePrice: point['base_price'],
      dateFrom: point['date_from'] !== null ? new Date(point['date_from']) : point['date_from'],
      dateTo: point['date_to'] !== null ? new Date(point['date_to']) : point['date_to'],
      isFavorite: point['is_favorite'],
    };

    delete adaptedPoint['base_price'];
    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['is_favorite'];

    return adaptedPoint;
  }
}
