// Codnig challenge #1
// Print number from 1 to 10

let ch1 = [];
for (let i = 1; i <= 10; i++) {
  ch1.push(i);
}
console.log('Challenge #1 number 1 to 10: ' + ch1);

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
console.log('Challenge #2 odd number to 100: ' + ch2);

// Codnig challenge #3
// Print the multiplication table with 7

let ch3 = [];
for (let i = 1; i <= 10; i++) {
  let result = '7 * ' + i + ' = ' + 7 * i;
  ch3.push(result);
}
console.log('Challenge #3 multiplication table with 7: ' + ch3);

// Codnig challenge #4
// Print the all the multiplication tables with number 1 to 10
console.log('Challenge #4 multiplication tables with number 1 to 10:');
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + ' * ' + j + ' = ' + i * j);
  }
}

// Codnig challenge #5
// Calculate the sum of number from 1 to 10

let sumCh5 = 0;
for (let i = 1; i <= 10; i++) {
  sumCh5 += i;
}
console.log('Codnig challenge #5 sum of number from 1 to 10 is ' + sumCh5);

// Coding challenge #6
// Calculate 10!

let prodCH6 = 1;
for (let i = 1; i <= 10; i++) {
  prodCH6 *= i;
}
console.log('Codnig challenge #6 product is ' + prodCH6);

// Coding challenge #7
// Calculate the sum odd numbers greater than 10 and less than 30

let sumCh7 = 0;
for (let i = 11; i < 30; i += 2) {
  //console.log(i);
  sumCh7 += i;
}
console.log(
  'Coding challenge #7 sum odd numbers greater than 10 and less than 30 is ' +
    sumCh7
);

// Coding challenge #8
// Create a function that will convert from Celsius to Fahrenheit multiply 9/5 and add 32.

const celsiusToFahrenheit = Celsius => (Celsius * 9) / 5 + 32;
console.log(
  'Coding chalange #8 Celsius in Fahrenheit is ' + celsiusToFahrenheit(10)
);

// Coding challenge #9
// Create a function that will convert from Fahrenheit to Celsius

const fahrenheitToCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;
console.log(
  'Coding chalange #8 Fahrenheit in Celsius is ' + fahrenheitToCelsius(50)
);

// Coding challenge #10
// Calculate the sum of numbers in an array of numbers

const addNumberArray = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(
  'Coding challenge #10 sum of an arry is ' + addNumberArray([1, 2, 3])
);
