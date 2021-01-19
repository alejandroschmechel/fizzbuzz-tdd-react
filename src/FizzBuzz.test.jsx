import { render, screen } from '@testing-library/react';
import FizzBuzz, { convert } from "./FizzBuzz";

test('return fizz if number is multiple of 3', () => {
  const number = 3;

  const result = FizzBuzz.convert(number);
  expect(result).toEqual("fizz");
});

test('return buzz if number is multiple of 5', () => {
  const number = 5;

  const result = FizzBuzz.convert(number);
  expect(result).toEqual("buzz");
});

test('return fizzbuzz if number is multiple of 3 and 5', () => {
  const number = 30;

  const result = FizzBuzz.convert(number);
  expect(result).toEqual("fizzbuzz");
});

test('return the entry number if number is not multiple of 3 and 5', () => {
  const number = 4;

  const result = FizzBuzz.convert(number);
  expect(result).toEqual(4);
});

test('throws exception if number is negative', () => {
  const error = new Error("Negative numbers are not allowed");
  const number = -2;

  expect(() => FizzBuzz.convert(number)).toThrow(error);
});
