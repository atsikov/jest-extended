import { equals } from 'expect/build/jasmine_utils';

export const contains = (list, value) => {
  return list.findIndex(item => equals(item, value)) > -1;
};

export const determinePropertyMessage = (actual, property, message = 'Not Accessible') => {
  return actual && actual[property] ? actual[property] : message;
};

export const isJestMockOrSpy = value => {
  return !!(value && value._isMockFunction === true && typeof value.mock === 'object');
};

export { equals };
