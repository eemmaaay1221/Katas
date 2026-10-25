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
export const game = (input: number) => {
  let result = "";

  if (input % 3 === 0) {
    result += "Fizz";
  }
  if (input % 5 === 0) {
    result += "Buzz";
  }

  // Lista de números primos hasta el 100 para la regla del Whizz
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  
  if (primes.includes(input)) {
    result += "Whizz";
  }

  return result === "" ? input : result;
};