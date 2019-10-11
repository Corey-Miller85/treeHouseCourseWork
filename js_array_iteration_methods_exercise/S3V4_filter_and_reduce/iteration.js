// const products = [
//   { name: 'hard drive', price: 59.99 },
//   { name: 'lighbulbs', price: 2.59 },
//   { name: 'paper towels', price: 6.99 },
//   { name: 'flatscreen monitor', price: 159.99 },
//   { name: 'cable ties', price: 19.99 },
//   { name: 'ballpoint pens', price: 4.49 },
// ];

//     // Result: { name: 'paper towels', price: 6.99 }
// let highestUnder10 = products 
//     .filter(product => product.price < 10.00)
//     .reduce((value, product) => {
//       if (value.price > product.price) {
//         return value;
//       } else {
//         return product;
//       }
//     }) ;
//     console.log(highestUnder10)

// let totalOver10 = products
//     .filter(product => product.price > 10.00)
//     .reduce((acc, product) => {
//       let total =  acc + product.price;
//       return total;
//     },0)
//     .toFixed(2)

// console.log(totalOver10);


// const purchaseItems = [
//   {
//       name: 'apples',
//       dept: 'groceries',
//       price: 2.49
//   },
//   {
//       name: 'bread',
//       dept: 'groceries',
//       price: 2.99
//   },
//   {
//       name: 'batteries',
//       dept: 'electronics',
//       price: 5.80
//   },
//   {
//       name: 'eggs',
//       dept: 'groceries',
//       price: 3.99
//   },
//   {
//       name: 't-shirts',
//       dept: 'apparel',
//       price: 9.99
//   }
// ];
// let groceryTotal;

// // groceryTotal should be: 9.47
// // Write your code below

// groceryTotal = purchaseItems
//   .filter(item => item.dept === 'groceries')
//   .reduce((sum, item) => {
//     return sum + item.price; 
//   },0);


//   console.log(groceryTotal);


// const customerNames = [
//   [ "John", "Sandy", "Tyrone", "Elizabeth", "Penny" ],
//   [ "Barry", "Wanda", "Jamal", "Hayden" ],
//   [ "Portia", "Pam", "Philip" ]
// ];
// let flattenedCustomerNames;

// flattenedCustomerNames = customerNames
//   .reduce((acc, name)=> {
//     return [ ...acc, ...name];
//   }
//   , []);

// console.log(flattenedCustomerNames);

// const customers = [
//   {
//     name: "Tyrone",
//     personal: {
//       age: 33,
//       hobbies: ["Bicycling", "Camping"]
//     }
//   },
//   {
//     name: "Elizabeth",
//     personal: {
//       age: 25,
//       hobbies: ["Guitar", "Reading", "Gardening"]
//     }
//   },
//   {
//     name: "Penny",
//     personal: {
//       age: 36,
//       hobbies: ["Comics", "Chess", "Legos"]
//     }
//   }
// ];
// let hobbies;

// // hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
// // Write your code below

// hobbies = customers
//   .map(customer => customer.personal.hobbies) //returns the hobbies for earch customer in an array 
//   //[ 
//   //[ 'Bicycling', 'Camping' ],
//   //[ 'Guitar', 'Reading', 'Gardening' ],
//   //[ 'Comics', 'Chess', 'Legos' ] 
//   //]
//   .reduce((arr, hobbies) => [...arr, ...hobbies],[]);//hobbies contains the array returned by map, arr is just an empty array because you set that up after the comma.

// console.log(hobbies);

const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

// filteredColors should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
// Write your code below

console.log(months.forEach(month => {
 return month.toUpperCase()
}));

