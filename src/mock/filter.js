import { filters } from '../utils/filters';

const generateFilter = (points) => Object.entries(filters).map(([filterType, filterPoints]) => ({
  type: filterType,
  count: filterPoints(points).length
}));

export { generateFilter };
