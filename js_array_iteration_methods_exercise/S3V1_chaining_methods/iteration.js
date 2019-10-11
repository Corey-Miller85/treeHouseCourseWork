// const arr = [1,2,3];

// const smallerArr = arr.filter(number => number !== 2);
// const incrementedArr = smallerArr.map(number => number + 1);

// console.log(incrementedArr); // => [2,4]


const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below

displayYears = years.filter(year => year > 2000).map(year => year + " A.D.");

console.log(displayYears)