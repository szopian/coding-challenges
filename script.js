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
let ch4 = [];
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    ch4.push(i + ' * ' + j + ' = ' + i * j);
  }
}
console.log('Challenge #4 multiplication tables with number 1 to 10: ' + ch4);
