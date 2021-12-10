import { makeRandomString, swapCase, shuffle } from "./transformMethods";



test('the makeRandomString should return a string x length', () => {
  let x = 3;

  let testResult = makeRandomString(x);

  expect(typeof testResult).toBe("string");
  expect(testResult).toHaveLength(x);
});

test('the swapCase should return a new string with the letters case changed', () => {
  let testString = 'DA1b5';
  let correctResult = 'da1B5'

  let testResult = swapCase(testString);

  expect(testResult).toEqual(correctResult);
});

test('the shuffle should return a new string of same length', () => {
  let testString = 'DA1b5';

  let testResult = shuffle(testString);

  expect(typeof testResult).toBe("string");
  expect(testResult).not.toBe(testString);
  expect(testResult).toHaveLength(testString.length);
});