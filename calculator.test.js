// calculator.test.js

const calculator = require('./calculator');

// Test for addition
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

// Test for subtraction
test('subtracts 5 - 3 to equal 2', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

// Test for multiplication
test('multiplies 2 * 3 to equal 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

// Test for division
test('divides 6 / 2 to equal 3', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

// Test for division by zero
test('throws error on divide by zero', () => {
  expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
});
