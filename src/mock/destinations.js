import { CITIES, CITY_DESCRIPTIONS, NUMBER_OF_PHOTOS, MAX_NUMBER } from '../const.js';
import { getRandomArrayElement, getRandomInteger, createIdGenerator } from '../utils/common.js';

const destinationId = createIdGenerator();

const createMockDestination = (cityName) => {
  const cityDescriptions = getRandomArrayElement(CITY_DESCRIPTIONS);

  const numberOfPictures = getRandomInteger(NUMBER_OF_PHOTOS);
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

const mockDestinations = CITIES.map(createMockDestination);

export { mockDestinations };
