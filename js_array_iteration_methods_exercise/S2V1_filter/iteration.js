// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

// let sNames = [];

// names.forEach(name => {
//   if(name.charAt(0) === 'S') {
//     sNames.push(name);
//   }
// });

// console.log(sNames);


// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const only2 = numbers.filter(number => number === 2 );
//     // Result: [2,4,6,8,10]
// console.log(only2);

const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(number => {
  if (number % 2 === 0) {
    return true
  }
});

console.log(evenNumbers);