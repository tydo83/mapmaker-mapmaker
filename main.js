/******************
 * YOUR CODE HERE *
******************/
function doubleAll(array) {
  let doubleArray = [];
  for(let i = 0; i < array.length; i++) {
    doubleArray.push(array[i] * 2);
  }
  return doubleArray;
} 

function yelledGreetings(array) {
  let yelledArray = [];
  for(let i = 0; i < array.length; i++) {
    yelledArray.push(array[i] + '!');
  }
  return yelledArray;
} 

function absoluteValues(array) {
  let absoluteValues = [];
  for(let i = 0; i < array.length; i++) {
    absoluteValues.push(Math.abs(array[i]));
  }
  return absoluteValues;
} 

function upperCaseFirstLetters(array) {
  let upperCaseFirstLetters = [];
  for(let i = 0; i < array.length; i++) {
    upperCaseFirstLetters.push(array[i][0].toUpperCase() + array[i].slice(1).toLowerCase());
  }
  return upperCaseFirstLetters;
}

function changeToInitials(array) {
  initials = [];
  for(let i = 0; i < array.length; i++) {
    let secondInitial = 1 + array[i].indexOf(' ');
    initials.push(array[i][0] + array[i][secondInitial]);
  }
  return initials;
}

function doubleOdd(array) {
  doubleOdd = [];
  for(i = 0; i < array.length; i++) {
    if(Math.abs(array[i]) % 2 === 1) {
      doubleOdd.push(array[i] * 2);
    }
    else {
      doubleOdd.push(array[i]);
    }
  } 
  return doubleOdd;
}

function add1ToLeft(array) {
  addedOne = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] >= 0) { 
      addedOne.push(Number('1' + array[i]))
    }
    if (array[i] < 0) {
      addedOne.push(-1 * Number('1' + Math.abs(array[i])))
    }
  } 
  return addedOne;
}

/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
