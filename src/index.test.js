const calculateImc = require('./');

test('result should be Subnormal', () => {
  expect(calculateImc(50, 1.7)).toBe('Subnormal');
});

test('result should be Normal', () => {
  expect(calculateImc(60, 1.64)).toBe('Normal');
});

test('result should be Overweight', () => {
  expect(calculateImc(73, 1.58)).toBe('Overweight');
});

test('result should be Obesity I', () => {
  expect(calculateImc(90, 1.72)).toBe('Obesity I');
});

test('result should be Obesity II', () => {
  expect(calculateImc(115, 1.78)).toBe('Obesity II');
});

test('result should be Obesity III', () => {
  expect(calculateImc(134, 1.8)).toBe('Obesity III');
});
