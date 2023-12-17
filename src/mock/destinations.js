import { CITIES, CITY_DESCRIPTIONS, DESTINATION_NUMBER, MAX_NUMBER } from '../const.js';
import { getRandomArrayElement, getRandomInteger, createIdGenerator } from '../util.js';

const destinationId = createIdGenerator();

const createMockDestination = () => {
  const cityName = getRandomArrayElement(CITIES);
  const cityDescriptions = getRandomArrayElement(CITY_DESCRIPTIONS);

  const numberOfPictures = getRandomInteger(4);
  const pictures = [];

  for (let i = 0; i < numberOfPictures; i++) {
    pictures.push({
      src: `https://loremflickr.com/248/152?random=${getRandomInteger(MAX_NUMBER)}`,
      description: `${cityName}'s view`
    });
  }

  return {
    id: destinationId().toString(),
    name: cityName,
    description: `${cityName} ${cityDescriptions}`,
    pictures: pictures
  };
};

const mockDestinations = new Array(DESTINATION_NUMBER).fill(null).map(createMockDestination);

export { mockDestinations };
