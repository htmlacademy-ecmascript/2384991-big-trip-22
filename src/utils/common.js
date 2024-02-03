const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  capitalizeFirstLetter,
  isEscapeKey
};
