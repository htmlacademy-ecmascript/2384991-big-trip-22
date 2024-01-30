import dayjs from 'dayjs';
import { DATE_FORMAT, SHORT_DATE_FORMAT, TIME_FORMAT } from '../const.js';

const humanizePointsDate = (date) => dayjs(date).format(DATE_FORMAT);
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

const isDatesEqual = (dateA, dateB) => (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB, 'D');

export {
  humanizeTime,
  humanizePointsDate,
  humanizeShortDate,
  isPointFuture,
  isPointPresent,
  isPointPast,
  sortPointsByPrice,
  sortPointsByTime,
  sortPointsByDay,
  isDatesEqual
};
