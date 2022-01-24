// Generating arrays
// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
// Generate an array that has all the numbers that end with the digit 1 from 1 to 1000

let arrayDivisibleBy3 = [];
let arrayDivisibleBy4 = [];
let arrayShowingNumbersThatEndsWith1 = [];

function makeArrayDivisibleBy3() {
  for (let i = 1; i < 1000; i++) {
    if (i % 3 == 0) {
      arrayDivisibleBy3.push(i);
    }
  }
  console.log(arrayDivisibleBy3);
  return arrayDivisibleBy3;
}
function makeArrayDivisibleBy4() {
  for (let i = 1; i < 1000; i++) {
    if (i % 4 == 0) {
      arrayDivisibleBy4.push(i);
    }
  }
  console.log(arrayDivisibleBy4);
  return arrayDivisibleBy4;
}
function showNumbersThatEndsWith1() {
  for (let i = 1; i < 1000; i += 10) {
    arrayShowingNumbersThatEndsWith1.push(i);
  }
  console.log(arrayShowingNumbersThatEndsWith1);
  return arrayShowingNumbersThatEndsWith1;
}
makeArrayDivisibleBy3();
makeArrayDivisibleBy4();
showNumbersThatEndsWith1();

// Clean arrays
// Create a function that cleans an array of any values and leaves only STRINGS
// Create a function that cleans an array of any values and leaves only NUMBERS
// Create a function that cleans undefined, null, NaN, and "" and leaves all other values
// Test arrays:
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function arrayThatLeavesStrings(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}
function arrayThatLeavesNumbers(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}
function arrayThatCleansFalsy(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}
arrayThatLeavesStrings(test);
arrayThatLeavesNumbers(test);
arrayThatCleansFalsy(test);

// Random color page
// Create an HTML page
// On every refresh the page should pick a random color and change the background of the page
// The RGB values of the color should be shown in the center of the page on every restart
