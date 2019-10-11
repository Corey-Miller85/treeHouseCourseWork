// const users = [
//   {name: 'Samir', age: 27},
//   {name: 'Angela', age: 33},
//   {name: 'Beatrice', age: 42}
// ];


// let newList = users.filter( user => user['name'] !== 'Samir');

// let ageList = users.map(user => `${user.name} is ${user.age} years old.`);
// console.log(ageList);

// const authors = [
//   { firstName: "Beatrix", lastName: "Potter" },
//   { firstName: "Ann", lastName: "Martin" },
//   { firstName: "Beverly", lastName: "Cleary" },
//   { firstName: "Roald", lastName: "Dahl" },
//   { firstName: "Lewis", lastName: "Carroll" }
// ];
// let fullAuthorNames;

// // fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// // Write your code below

// fullAuthorNames = authors.map( author => `${author.firstName} ${author.lastName}`);

// console.log(fullAuthorNames);


// const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

//     // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];
// let newArray = userNames.filter(name => name.charAt(0).toLowerCase() === 's')
//     .map(name => ({ name: name }));

// console.log(newArray);

// const users = [
//   {name: 'Samir', age: 27},
//   {name: 'Angela', age: 33},
//   {name: 'Beatrice', age: 42},
//   {name: 'Shaniqua', age: 30},
//   {name: 'Marvin', age: 23},
//   {name: 'Sean', age: 47}
// ];

//     // Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];

// let years30 = users.filter(user => user.age >= 30)
//                   // .map(user => `${user.name}` );

// console.log(years30);

const todos = [
  {
      todo: 'Buy apples',
      done: false
  },
  {
      todo: 'Wash car',
      done: true
  },
  {
      todo: 'Write web app',
      done: false
  },
  {
      todo: 'Read MDN page on JavaScript arrays',
      done: true
  },
  {
      todo: 'Call mom',
      done: false
  }
];
let unfinishedTasks;

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below

unfinishedTasks = todos
    .filter( item => item.done === false )
    .map(item => item.todo);
console.log(unfinishedTasks);