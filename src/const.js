const MAX_PRICE_VALUE = 200;
const MAX_NUMBER = 100;
const DAYS_PER_YEAR = 365;
const HOURS_PER_DAY = 24;
const MINUTS_PER_HOUR = 60;
const SECONDS_PER_MINUT = 60;
const MILISECONDS_PER_SECOND = 1000;
const POINT_COUNT = 4;
const NUMBER_OF_PHOTOS = 4;

const TIME_FORMAT = 'HH:mm';
const SHORT_DATE_FORMAT = 'MMM DD';

const CITIES = ['Paris', 'Amsterdam', 'Berlin', 'London', 'Chamonix', 'Geneva', 'Prague'];
const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const OFFERS = [];
const SORTS = ['Day', 'Event', 'Time', 'Price', 'Offers'];

const CITY_DESCRIPTIONS = [
  'is a city that never sleeps, vibrant with round-the-clock activity.',
  'is a regional gem, offering a rich tapestry of cultural landmarks.',
  'boasts an eclectic mix of historic charm and modern vitality.',
  'is known for its stunning skyline and bustling streets.',
  'is a haven for foodies, with a culinary scene as diverse as its population.',
  'is the crossroads of tradition and innovation, home to renowned museums and cutting-edge galleries.',
  'is a city of green spaces, from serene parks to lively recreation areas.'
];

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
};

const NoPointsTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.PAST]: 'There are no past events now',
};

const BLANK_POINT = {
  'type': 'flight',
  'destination': '',
  'dateFrom': null,
  'dateTo': null,
  'basePrice': 0,
  'offers': [],
  'isFavorite': false
};

export {
  CITIES,
  TYPES,
  OFFERS,
  SORTS,
  CITY_DESCRIPTIONS,
  MAX_PRICE_VALUE,
  MAX_NUMBER,
  NUMBER_OF_PHOTOS,
  POINT_COUNT,
  TIME_FORMAT,
  SHORT_DATE_FORMAT,
  FilterType,
  NoPointsTextType,
  SortType,
  ModeType,
  UserAction,
  UpdateType,
  DAYS_PER_YEAR,
  HOURS_PER_DAY,
  MINUTS_PER_HOUR,
  SECONDS_PER_MINUT,
  MILISECONDS_PER_SECOND,
  BLANK_POINT
};
