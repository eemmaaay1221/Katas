import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should works 1', () => {
    const result = game(1);
    expect(result).toEqual(1);
  });
  test('should return Whizz for 2', () => {
    const result = game(2);
    expect(result).toEqual("Whizz");
  });
  test('should return FizzWhizz for 3', () => {
    const result = game(3);
    expect(result).toEqual("FizzWhizz");
  });
  test('should works 4', () => {
    const result = game(4);
    expect(result).toEqual(4);
  });
  test('should return BuzzWhizz for 5', () => {
    const result = game(5);
    expect(result).toEqual("BuzzWhizz");
  });
  test('should works 6', () => {
    const result = game(6);
    expect(result).toEqual("Fizz");
  });
  test('should works 9', () => {
    const result = game(9);
    expect(result).toEqual("Fizz");
  });
  test('should works 10', () => {
    const result = game(10);
    expect(result).toEqual("Buzz");
  });
  test('should works 15', () => {
    const result = game(15);
    expect(result).toEqual("FizzBuzz");
  }); 
  test('should works 20', () => {
    const result = game(20);
    expect(result).toEqual("Buzz");
  }); 
  test('should works 30', () => {
    const result = game(30);
    expect(result).toEqual("FizzBuzz");
  }); 
  test('should works 75', () => {
    const result = game(75);
    expect(result).toEqual("FizzBuzz");
  });
  test('should return Whizz for large prime 2003', () => {
    const result = game(2003);
    expect(result).toEqual("Whizz");
  });

});