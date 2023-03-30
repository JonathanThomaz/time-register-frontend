import { getTime } from './../screens/TimeRegister/functions/index';

test('time is 0h 0m', () => {
  const time = getTime('', '');
  expect(time).toBe('0h 0m');
});
test('time is 0h 1m', () => {
  const time = getTime('2023-03-29T00:34:56.860Z', '2023-03-29T00:35:56.860Z');
  expect(time).toBe('0h 1m');
});
