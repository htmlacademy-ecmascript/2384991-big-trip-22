import dayjs from 'dayjs';
import { DATE_FORMAT, SHORT_DATE_FORMAT, TIME_FORMAT } from './const.js';

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
const humanizeTime = (date) => dayjs(date).format(TIME_FORMAT);

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export { getRandomArrayElement,
  getRandomInteger,
  createIdGenerator,
  humanizeTime,
  humanizePointsDate,
  humanizeShortDate,
  capitalizeFirstLetter };
