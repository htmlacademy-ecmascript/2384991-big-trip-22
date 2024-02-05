const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const SORTS = ['Day', 'Event', 'Time', 'Price', 'Offers'];

const BLANK_POINT = {
  'type': 'flight',
  'destination': '',
  'dateFrom': null,
  'dateTo': null,
  'basePrice': 0,
  'offers': [],
  'isFavorite': false
};

const AUTORIZATION = 'Basic lk91s51cz181';
const END_POINT = 'https://22.objects.htmlacademy.pro/big-trip';

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
};

const ModeType = {
  VIEWING: 'VIEWING',
  EDITING: 'EDITING',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
  ERROR: 'ERROR',
};

const NoPointsTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.PAST]: 'There are no past events now',
  ERROR: 'Failed to load latest route information',
};

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

const DateType = {
  TIME_FORMAT: 'HH:mm',
  SHORT_DATE_FORMAT: 'MMM DD',
  DURATION_FORMAT: 'DD[D] HH[H] mm[M]',
};

export {
  TYPES,
  SORTS,
  BLANK_POINT,
  AUTORIZATION,
  END_POINT,
  FilterType,
  NoPointsTextType,
  SortType,
  ModeType,
  UserAction,
  UpdateType,
  Method,
  TimeLimit,
  DateType,
};
