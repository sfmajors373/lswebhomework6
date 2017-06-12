//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  var Ans = num * 10;
  return Ans;
}

function subtractFive(num) {
  //return num after subtracting five
  var Ans = num - 5;
  return Ans;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  str1.length == str2.length;
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  x === y;
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  num < 90;
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  num > 50;
}

function add(x, y) {
  //add x and y together and return the value
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  //subtract y from x and return the value
  var diff = x - y;
  return diff;
}

function divide(x, y) {
  //divide x by y and return the value
  var quotient = x/y;
  return quotient;
}

function multiply(x, y) {
  //multiply x by y and return the value
  var prod = x * y;
  return prod;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  var Remainder = x % y;
  return Remainder;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  num % 2 == 0;
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  num % 2 == 1;
}

function square(num) {
  //square num and return the new value
  var sqr = num * num;
  return sqr;
}

function cube(num) {
  //cube num and return the new value
  var cub = Math.pow(num, 3);
  return cub;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  var Ans = Math.pow(num, exponent);
  return Ans;
}

function roundNumber(num) {
  //round num and return it
  var Ans = Math.round(num);
  return Ans;

}

function roundUp(num) {
  //round num up and return it
  var Ans = Math.ceil(num);
  return Ans;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  return (str + '!');
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  return (firstName + ' ' + lastName);
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  return ('Hello ' + name + '!');
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  var area = length * width;
  return area;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  var area = (base * height)/2;
  return area;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  var area = Math.pi * Math.pow(radius, 2);
  return area;
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  var vol = length * width * height;
  return vol;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
