/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */
const isPrime = (input: number): boolean => {
  if (input < 2) {
    return false;
  }

  for (let divisor = 2; divisor * divisor <= input; divisor++) {
    if (input % divisor === 0) {
      return false;
    }
  }

  return true;
};

// Applies the FizzBuzzWhizz rules to a positive integer.
export const game = (input: number) => {
  // Reject zero and negative numbers.
  if (input <= 0) {
    throw new RangeError("Input must be a positive integer.");
  }

  let result = "";

  if (input % 3 === 0) {
    result += "Fizz";
  }
  if (input % 5 === 0) {
    result += "Buzz";
  }

  // Generic and scalable methodology to check prime numbers of any size
  if (isPrime(input)) {
    result += "Whizz";
  }

  return result === "" ? input : result;
};