import { getRandomInteger, createIdGenerator, getRandomArrayElement } from '../util.js';
import { MAX_NUMBER_VALUE } from '../const.js';

const pointsId = createIdGenerator();

const mockPoints = [
  {
    id: pointsId(),
    basePrice: getRandomInteger(MAX_NUMBER_VALUE),
    dateFrom: '2023-12-12T9:00:00.845Z',
    dateTo: '2023-12-12T9:30:13.375Z',
    destination: ['1'],
    isFavorite: true,
    offers: ['1', '2'],
    type: 'taxi',
  },
  {
    id: pointsId(),
    basePrice: getRandomInteger(MAX_NUMBER_VALUE),
    dateFrom: '2023-12-12T10:00:00.000Z',
    dateTo: '2023-12-12T10:50:00.000Z',
    destination: ['2'],
    isFavorite: true,
    offers: ['1', '2', '3'],
    type: 'bus',
  },
  {
    id: pointsId(),
    basePrice: getRandomInteger(MAX_NUMBER_VALUE),
    dateFrom: '2023-12-12T11:00:00.000Z',
    dateTo: '2023-12-12T12:00:00.000Z',
    destination: ['3'],
    isFavorite: true,
    offers: ['1', '2', '3'],
    type: 'train',
  },
  {
    id: pointsId(),
    basePrice: getRandomInteger(MAX_NUMBER_VALUE),
    dateFrom: '2023-12-12T13:00:00.000Z',
    dateTo: '2023-12-12T15:00:00.000Z',
    destination: ['4'],
    isFavorite: true,
    offers: ['1', '2', '3'],
    type: 'ship',
  },
  {
    id: pointsId(),
    basePrice: getRandomInteger(MAX_NUMBER_VALUE),
    dateFrom: '2023-12-12T16:00:00.000Z',
    dateTo: '2023-12-12T16:30:00.000Z',
    destination: ['5'],
    isFavorite: true,
    offers: ['1', '2'],
    type: 'drive',
  },
  {
    id: pointsId(),
    basePrice: getRandomInteger(MAX_NUMBER_VALUE),
    dateFrom: '2023-12-12T17:00:00.000Z',
    dateTo: '2023-12-12T20:00:00.000Z',
    destination: ['6'],
    isFavorite: true,
    offers: ['1', '2', '3'],
    type: 'flight',
  },
  {
    id: pointsId(),
    basePrice: getRandomInteger(MAX_NUMBER_VALUE),
    dateFrom: '2023-12-12T21:00:00.000Z',
    dateTo: '2023-12-12T21:30:00.000Z',
    destination: ['7'],
    isFavorite: false,
    offers: ['1', '2'],
    type: 'check-in',
  },
  {
    id: pointsId(),
    basePrice: getRandomInteger(MAX_NUMBER_VALUE),
    dateFrom: '2023-12-12T22:00:00.000Z',
    dateTo: '2023-12-12T23:30:00.000Z',
    destination: ['1'],
    isFavorite: false,
    offers: ['1', '2', '3'],
    type: 'sightseeing',
  },
  {
    id: pointsId(),
    basePrice: getRandomInteger(MAX_NUMBER_VALUE),
    dateFrom: '2023-12-13T19:00:00.000Z',
    dateTo: '2023-12-13T21:00:00.000Z',
    destination: ['2'],
    isFavorite: false,
    offers: [],
    type: 'restaurant',
  },
];

const getRandomMockPoints = () => getRandomArrayElement(mockPoints);

export { getRandomMockPoints };
