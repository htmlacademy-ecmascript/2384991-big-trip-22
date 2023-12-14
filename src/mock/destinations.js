import { CITIES, CITYDESCRIPTIONS, MAX_NUMBER_VALUE } from '../const.js';
import { getRandomArrayElement, getRandomInteger, createIdGenerator } from '../util.js';

const destinationId = createIdGenerator();

const createMockDestination = () => {
  const cityName = getRandomArrayElement(CITIES);
  const cityDescriptions = getRandomArrayElement(CITYDESCRIPTIONS);

  return {
    id: destinationId().toString(),
    name: cityName,
    description: `${cityName} ${cityDescriptions}`,
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(MAX_NUMBER_VALUE)}`,
        description: `${cityName}'s central square`
      }
    ]
  };
};

const mockDestinations = new Array(CITIES.length).fill(null).map(createMockDestination);

export { mockDestinations };
