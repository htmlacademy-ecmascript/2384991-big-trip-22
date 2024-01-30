import { getRandomInteger, createIdGenerator, getRandomArrayElement, getRandomBoolean } from '../utils/common.js';
import { TYPES, OFFERS, MAX_PRICE_VALUE, DAYS_PER_YEAR,HOURS_PER_DAY, MINUTS_PER_HOUR, SECONDS_PER_MINUT, MILISECONDS_PER_SECOND } from '../const.js';
import { mockDestinations } from './destinations.js';

const pointsId = createIdGenerator(0);

const getRandomMockPoints = () => {
  const pointId = pointsId().toString();

  const randomType = getRandomArrayElement(TYPES);

  const randomDestination = getRandomArrayElement(mockDestinations);

  const getRandomOffers = (offers) => {
    const selectedOffers = ['1', '2'];
    offers.forEach((offer) => {
      if (getRandomBoolean()) {
        selectedOffers.push(offer);
      }
    });
    return selectedOffers;
  };

  const randomOffers = getRandomOffers(OFFERS);

  const startDate = new Date(Date.now() + getRandomInteger(DAYS_PER_YEAR) * getRandomInteger(HOURS_PER_DAY) * getRandomInteger(MINUTS_PER_HOUR) * getRandomInteger(SECONDS_PER_MINUT) * getRandomInteger(MILISECONDS_PER_SECOND));
  const endDate = new Date(startDate.getTime() + getRandomInteger(HOURS_PER_DAY) * getRandomInteger(MINUTS_PER_HOUR) * getRandomInteger(SECONDS_PER_MINUT) * getRandomInteger(MILISECONDS_PER_SECOND));

  return {
    id: pointId,
    type: randomType,
    destination: randomDestination.id,
    basePrice: getRandomInteger(MAX_PRICE_VALUE),
    dateFrom: startDate.toISOString(),
    dateTo: endDate.toISOString(),
    isFavorite: getRandomBoolean(),
    offers: randomOffers,
  };
};

export { getRandomMockPoints };
