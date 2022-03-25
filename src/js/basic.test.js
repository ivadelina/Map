/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import ErrorRepository from './app.js';

test('Check existing code', () => {
  const map = new ErrorRepository();
  map.collection.set(1, 'ошибка 1');
  map.collection.set(2, 'ошибка 2');
  expect(map.translate(1)).toEqual('ошибка 1');
});

test('Check null code', () => {
  const map = new ErrorRepository();
  map.collection.set(1, 'ошибка 1');
  map.collection.set(2, 'ошибка 2');
  expect(() => {
    map.translate(33);
  }).toThrow();
});
