// Write a function to return the highest number from a given array of integers

// Array of randomly generated numbers using [...Array(20).keys()].map(x => Math.floor(Math.random()*100))
const intArray = [19, 80, 46, 76, 3, 45, 41, 54, 4, 83, 18, 99, 87, 89, 87, 52, 1, 49, 66, 90];

function findHighestNumber(array) {
  let highest = 0;
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    if (currentNum > highest) {
      highest = currentNum;
    }
  }
  return highest;
}

const highestNumber = findHighestNumber(intArray);

// Using the above function, write a new function that takes an array of arrays of numbers and
// returns a new array of the highest numbers from each array

// Array of arrays randomy generated with [...Array(20).keys()].map(x => [...Array(20).keys()].map(x => Math.floor(Math.random()*100)))
const arrayOfArrays = [
  [77, 91, 39, 38, 55, 48, 73, 89, 35, 93, 58, 90, 15, 12, 20, 8, 25, 52, 35, 41],
  [14, 11, 81, 10, 7, 1, 17, 54, 72, 18, 28, 57, 53, 15, 22, 4, 12, 32, 16, 74],
  [10, 96, 57, 6, 93, 21, 78, 68, 13, 83, 8, 53, 62, 19, 7, 98, 88, 97, 85, 93],
  [31, 31, 7, 67, 60, 68, 18, 92, 74, 39, 85, 11, 52, 13, 78, 31, 70, 24, 53, 8],
  [83, 63, 34, 42, 11, 97, 50, 21, 73, 97, 10, 92, 66, 87, 19, 61, 40, 71, 99, 7],
  [77, 47, 36, 86, 91, 93, 65, 37, 29, 62, 93, 59, 7, 30, 70, 29, 25, 70, 93, 90],
  [37, 51, 89, 24, 26, 76, 49, 38, 19, 93, 82, 75, 54, 64, 51, 66, 33, 7, 70, 21],
  [3, 80, 93, 29, 57, 87, 50, 62, 81, 40, 95, 82, 16, 7, 59, 99, 53, 80, 30, 45],
  [17, 25, 95, 74, 60, 33, 25, 40, 14, 37, 23, 51, 56, 81, 58, 15, 88, 53, 46, 35],
  [25, 91, 90, 5, 35, 65, 64, 13, 50, 96, 30, 84, 58, 60, 13, 99, 82, 38, 53, 40],
  [74, 33, 31, 16, 22, 55, 99, 77, 30, 39, 72, 20, 88, 59, 92, 54, 17, 80, 42, 55],
  [66, 26, 30, 63, 43, 64, 70, 60, 74, 96, 24, 73, 7, 87, 34, 98, 42, 15, 67, 9],
  [30, 10, 52, 85, 96, 79, 66, 42, 98, 24, 40, 0, 54, 41, 7, 99, 98, 42, 46, 28],
  [2, 33, 68, 30, 84, 90, 35, 87, 13, 7, 3, 82, 45, 61, 6, 6, 0, 91, 1, 15],
  [96, 84, 42, 23, 47, 19, 80, 52, 44, 76, 16, 25, 19, 65, 37, 79, 45, 48, 85, 8],
  [43, 28, 52, 82, 30, 41, 29, 1, 48, 36, 43, 31, 37, 41, 8, 96, 75, 71, 54, 12],
  [66, 96, 56, 43, 10, 63, 58, 47, 49, 84, 0, 75, 57, 2, 16, 37, 45, 97, 31, 13],
  [6, 29, 4, 92, 67, 30, 92, 57, 43, 73, 79, 18, 76, 37, 52, 62, 86, 89, 10, 17],
  [94, 19, 15, 97, 29, 21, 88, 53, 56, 5, 79, 39, 9, 93, 75, 33, 26, 69, 46, 16],
  [81, 46, 15, 32, 1, 22, 82, 18, 61, 58, 89, 22, 1, 66, 60, 0, 25, 22, 30, 24]
];

function findArrayOfHighestNumbers(arrayOfArrays) {
  const arrayOfHighestNumbers = [];
  for (let i = 0; i < arrayOfArrays.length; i++) {
    const currentArray = arrayOfArrays[i];
    const highestNumber = findHighestNumber(currentArray);
    arrayOfHighestNumbers.push(highestNumber);
  }
  return arrayOfHighestNumbers;
}

const arrayOfHighestNumbers = findArrayOfHighestNumbers(arrayOfArrays);

// *******************************************************************************
// *******************************************************************************

// What if we want to be able to find the highes or lowest numbers from our array?
// lets write a function that finds the lowest value that looks just like our
// findHighestNumber function but that will return the lowest number instead


function findLowestNumber(array) {
  let lowest = 100;
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    if (currentNum < lowest) {
      lowest = currentNum;
    }
  }
  return lowest;
}

const lowestNumber = findLowestNumber(intArray);

function findArrayOfLowestNumbers(arrayOfArrays) {
  const arrayOfLowestNumbers = [];
  for (let i = 0; i < arrayOfArrays.length; i++) {
    const currentArray = arrayOfArrays[i];
    const lowestNumber = findLowestNumber(currentArray);
    arrayOfLowestNumbers.push(lowestNumber);
  }
  return arrayOfLowestNumbers;
}

const arrayOfLowestNumbers = findArrayOfLowestNumbers(arrayOfArrays);

// *******************************************************************************
// *******************************************************************************

// what if we want a function that will return either the array of highest numbers OR the
// array of lowest numbers???
// question : can we write a function where we pass in the data to be processed and how we want it to be
// processed,
// answer : its javascript, we can do whatever we want

function findArrayOfHighestOrLowestNumbers(stuffToProces, wayToProcessIt) {
  return wayToProcessIt(stuffToProces);
}

const lowestValueArray = findArrayOfHighestOrLowestNumbers(arrayOfArrays, findArrayOfLowestNumbers);
const highestValueArray = findArrayOfHighestOrLowestNumbers(arrayOfArrays, findArrayOfHighestNumbers);

// *******************************************************************************
// *******************************************************************************

// Awesome!  Now we are passing in a function into a function (or as I like to call it functception)
// and it may seem a bit strange, because it is!  What is the benefit of this?  This will take some time
// to understand, and thats ok, but the dumber your functions the better!  The less any chunk of code knows
// about what its doing, the easier it is to reason about what its purpose is and how it is going to accomplish
// that task, and functional composition (functception) is one way to acomplish that.
// Here is a refactored version of this code where we can use smaller / dumber functions to acomplish the same
// goal

function lessThan(int1, int2) {
  return int1 < int2;
}

function greaterThan(int1, int2) {
  return int1 > int2;
}

function findValue(array, operator) {
  let returnNum = array[0];
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    if (operator(currentNum, returnNum)) {
      returnNum = currentNum;
    }
  }
  return returnNum;
}

function findValueArray(arrayOfArrays, operator) {
  const resultArray = [];
  for (let i = 0; i < arrayOfArrays.length; i++) {
    const currentArray = arrayOfArrays[i];
    const returnedValue = findValue(currentArray, operator);
    resultArray.push(returnedValue);
  }
  return resultArray;
}

