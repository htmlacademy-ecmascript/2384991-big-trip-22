import { SHORT_DATE_FORMAT, TIME_FORMAT } from '../const.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const humanizeShortDate = (date) => dayjs(date).format(SHORT_DATE_FORMAT).toUpperCase();
const humanizeTime = (date) => dayjs(date).format(TIME_FORMAT);

const isPointFuture = (point) => dayjs().isBefore(point.dateFrom);

const isPointPresent = (point) => dayjs().isAfter(point.dateFrom) && dayjs().isBefore(point.dateTo);

const isPointPast = (point) => dayjs().isAfter(point.dateTo);

const getEventDuration = (event) => dayjs(event.dateTo).diff(dayjs(event.dateFrom));

const sortPointsByPrice = (eventB, eventA) => eventA.basePrice - eventB.basePrice;

const sortPointsByTime = (eventA, eventB) => {
  const eventADuration = getEventDuration(eventA);
  const eventBDuration = getEventDuration(eventB);

  return eventBDuration - eventADuration;
};

const sortPointsByDay = (eventA, eventB) => dayjs(eventA.dateFrom).diff(dayjs(eventB.dateFrom));

const isDatesEqual = (dateA, dateB) => {
  if(dateA === null && dateB === null) {
    return true;
  } else if(dateA && dateB) {
    return dayjs(dateA).isSame(dateB, 'minute');
  } else {
    return false;
  }
};

export {
  humanizeTime,
  humanizeShortDate,
  isPointFuture,
  isPointPresent,
  isPointPast,
  sortPointsByPrice,
  sortPointsByTime,
  sortPointsByDay,
  isDatesEqual
};
