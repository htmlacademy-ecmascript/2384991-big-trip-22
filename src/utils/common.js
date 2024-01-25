const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (max) => Math.floor(Math.random() * max);

const getRandomBoolean = () => Math.random() >= 0.5;

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const isEscapeKey = (evt) => evt.key === 'Escape';

const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);

export { getRandomArrayElement,
  getRandomInteger,
  getRandomBoolean,
  createIdGenerator,
  capitalizeFirstLetter,
  isEscapeKey,
  updateItem };
