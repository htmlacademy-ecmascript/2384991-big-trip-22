import { POINT_COUNT } from '../const.js';
import { mockDestinations } from '../mock/destinations.js';
import { mockOffers } from '../mock/offers.js';
import { getRandomMockPoints } from '../mock/points.js';

export default class PointsModel {
  points = Array.from({length: POINT_COUNT}, getRandomMockPoints);
  offers = mockOffers;
  destinations = mockDestinations;

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  getDestinations() {
    return this.destinations;
  }

  getOfferByType(type) {
    return this.getOffers().find((offers) => offers.type === type);
  }

  getOfferById(type, offerId) {
    const availablesOffers = this.getOfferByType(type);
    const filteredOffers = availablesOffers.offers.filter((offers) => offerId.find((id) => offers.id === id));

    return filteredOffers;
  }

  getDestinationById(id) {
    return this.getDestinations().find((destination) => destination.id === id);
  }

}

