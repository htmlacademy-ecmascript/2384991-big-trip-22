import { DateType } from '../const.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const humanizeShortDate = (date) => dayjs(date).format(DateType.SHORT_DATE_FORMAT).toUpperCase();
const humanizeTime = (date) => dayjs(date).format(DateType.TIME_FORMAT);

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

const durationOfStayFormat = (eventA, eventB) => {
  let durationOfStay = dayjs.duration(dayjs(eventA).diff(dayjs(eventB)));
  const daysCount = Math.floor(durationOfStay.asDays());
  if (daysCount > 30) {
    const format = DateType.DURATION_FORMAT.replace('DD[D] ', '');
    durationOfStay = durationOfStay.format(format);
    return `${daysCount}D ${durationOfStay}`;
  }
  durationOfStay = durationOfStay.format(DateType.DURATION_FORMAT);
  return durationOfStay.replace('00D 00H ', '').replace('00D ', '');
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
  isDatesEqual,
  durationOfStayFormat,
};
