// Codnig challenge #1
// Print number from 1 to 10

let ch1 = [];
for (let i = 1; i <= 10; i++) {
  ch1.push(i);
}
console.log("Challenge #1 number 1 to 10: " + ch1);

// secound option
let number = 1;
while (number <= 10) {
  number++;
}

// Codnig challenge #2
// Print the odd number less than 100
let ch2 = [];
for (let i = 1; i < 100; i += 2) {
  ch2.push(i);
}
console.log("Challenge #2 odd number to 100: " + ch2);

// Codnig challenge #3
// Print the multiplication table with 7

let ch3 = [];
for (let i = 1; i <= 10; i++) {
  let result = "7 * " + i + " = " + 7 * i;
  ch3.push(result);
}
console.log("Challenge #3 multiplication table with 7: " + ch3);

// Codnig challenge #4
// Print the all the multiplication tables with number 1 to 10
console.log("Challenge #4 multiplication tables with number 1 to 10:");
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}

// Codnig challenge #5
// Calculate the sum of number from 1 to 10

let sumCh5 = 0;
for (let i = 1; i <= 10; i++) {
  sumCh5 += i;
}
console.log("Codnig challenge #5 sum of number from 1 to 10 is " + sumCh5);

// Coding challenge #6
// Calculate 10!

let prodCH6 = 1;
for (let i = 1; i <= 10; i++) {
  prodCH6 *= i;
}
console.log("Codnig challenge #6 product is " + prodCH6);

// Coding challenge #7
// Calculate the sum odd numbers greater than 10 and less than 30

let sumCh7 = 0;
for (let i = 11; i < 30; i += 2) {
  //console.log(i);
  sumCh7 += i;
}
console.log(
  "Coding challenge #7 sum odd numbers greater than 10 and less than 30 is " +
    sumCh7
);

// Coding challenge #8
// Create a function that will convert from Celsius to Fahrenheit multiply 9/5 and add 32.

const celsiusToFahrenheit = (Celsius) => (Celsius * 9) / 5 + 32;
console.log(
  "Coding challange #8 Celsius in Fahrenheit is " + celsiusToFahrenheit(10)
);

// Coding challenge #9
// Create a function that will convert from Fahrenheit to Celsius

const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
console.log(
  "Coding challange #9 Fahrenheit in Celsius is " + fahrenheitToCelsius(50)
);

// Coding challenge #10
// Calculate the sum of numbers in an array of numbers

const addNumberArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(
  "Coding challenge #10 sum of an arry is " + addNumberArray([1, 2, 3])
);

// Coding challenge #11
// Calculate the average of the numbers in an array of numbers

const addNumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(
  "Coding challenge #11 average of the numbers in an array is " +
    addNumArray([1, 2, 3])
);

// Coding challenge #12
// Create an array that receives an array of numbers and returns an array containing only the positive numbers

const positiveNumbers = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) newArr.push(arr[i]);
  }
  return newArr;
};

console.log(
  "Coding challenge #12 Positives array of positives numbers: " +
    positiveNumbers([2, -1, 0, 5, 7, -4])
);

// Coding challenge #13
// Find the maximum number in an array of numbers

const maximumNumber = (arr) => Math.max(...arr);

console.log(
  "Coding challenge #13 Maximum number in an array of numbers is: " +
    maximumNumber([2, 4, 5, 6, 8, 8, 155, 200])
);

// Coding challenge #14
// Print the 10 Fibonacci numbers without recursion

function fibonacciNumber(num) {
  const firstNumber = 0;
  const secoundNumber = 1;
  let arr = [];

  arr.push(firstNumber);
  arr.push(secoundNumber);

  for (let i = firstNumber; i < num - 2; i++) {
    let sum = arr[i] + arr[i + 1];
    //console.log("sum: ", sum);
    if (i < num) {
      arr.push(arr[i] + arr[i + 1]);
    }
  }
  return arr;
}
console.log(
  "Coding challenge #14 10 Fibonacci numbers without recursion : " +
    fibonacciNumber(10)
);

// Coding challenge #15
// Print the 10 Fibonacci numbers with recursion

const fibonacci = (number) => {
  if (number < 2) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
};
let arr = [];
for (let i = 0; i < number; i++) {
  arr.push(fibonacci(i));
}
console.log("Coding challenge #15 Fibonacci numbers with recursion " + arr);

// Coding challenge #16
// Create a function that will return a boolean specifying if a number is prime

function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

console.log("Coding challenge #16 Prime number: " + isPrime(89));

// Coding challenge #17
// Calculate the sum of digits of a positive integer number

let value = 2568,
  sum = value
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);

console.log("Coding challenge #17 sum : " + sum);
