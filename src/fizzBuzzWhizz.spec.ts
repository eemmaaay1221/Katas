import { game } from "./fizzBuzzWhizz";

describe("FizzBuzz Game", () => {
  test("should return 1 when the input is 1", () => {
    const result = game(1);
    expect(result).toEqual(1);
  });

  test("should return Whizz when the input is 2", () => {
    const result = game(2);
    expect(result).toEqual("Whizz");
  });

  test("should return FizzWhizz when the input is 3", () => {
    const result = game(3);
    expect(result).toEqual("FizzWhizz");
  });

  test("should return 4 when the input is 4", () => {
    const result = game(4);
    expect(result).toEqual(4);
  });

  test("should return BuzzWhizz when the input is 5", () => {
    const result = game(5);
    expect(result).toEqual("BuzzWhizz");
  });

  test("should return Fizz when the input is 6", () => {
    const result = game(6);
    expect(result).toEqual("Fizz");
  });

  test("should return Whizz when the input is 7", () => {
    const result = game(7);
    expect(result).toEqual("Whizz");
  });

  test("should return Fizz when the input is 9", () => {
    const result = game(9);
    expect(result).toEqual("Fizz");
  });

  test("should return Buzz when the input is 10", () => {
    const result = game(10);
    expect(result).toEqual("Buzz");
  });

  test("should return Whizz when the input is 11", () => {
    const result = game(11);
    expect(result).toEqual("Whizz");
  });

  test("should return FizzBuzz when the input is 15", () => {
    const result = game(15);
    expect(result).toEqual("FizzBuzz");
  });

  test("should return Buzz when the input is 20", () => {
    const result = game(20);
    expect(result).toEqual("Buzz");
  });

  test("should return FizzBuzz when the input is 30", () => {
    const result = game(30);
    expect(result).toEqual("FizzBuzz");
  });

  test("should return 49 when the input is 49", () => {
    const result = game(49);
    expect(result).toEqual(49);
  });

  test("should return FizzBuzz when the input is 75", () => {
    const result = game(75);
    expect(result).toEqual("FizzBuzz");
  });

  test("should return Whizz when the input is 97", () => {
    const result = game(97);
    expect(result).toEqual("Whizz");
  });

  test("should return Whizz for large prime 101", () => {
    const result = game(101);
    expect(result).toEqual("Whizz");
  });

  test("should return Whizz for large prime 2003", () => {
    const result = game(2003);
    expect(result).toEqual("Whizz");
  });

  test("should return 121 for composite number 121", () => {
    const result = game(121);
    expect(result).toEqual(121);
  });

  test("should throw an error when the input is 0", () => {
    expect(() => game(0)).toThrow(RangeError);
  });

  test("should throw an error when the input is negative", () => {
    expect(() => game(-3)).toThrow(RangeError);
  });
});