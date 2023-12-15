import dayjs from 'dayjs';
import { DATE_FORMAT, SHORT_DATE_FORMAT } from './const.js';

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (max) => Math.floor(Math.random() * max);

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const humanizePointsDate = (date) => dayjs(date).format(DATE_FORMAT);
const humanizeShortDate = (date) => dayjs(date).format(SHORT_DATE_FORMAT).toUpperCase();

export { getRandomArrayElement,
  getRandomInteger,
  createIdGenerator,
  humanizePointsDate,
  humanizeShortDate };
