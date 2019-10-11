// const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

// let total = prices.reduce((acc, cur) => {
//    return acc + cur;
// } , 0);



// console.log(total);

// const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

//     // Result: 4

// const gCount = names.reduce((acc, cur) => {
//     if (cur.charAt(0) === "G") {
//        return acc + 1;
//     } else {
//         return acc;
//     }
// }, 0);

// console.log(gCount);

const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

// numberOf503 should be: 3
// Write your code below

numberOf503 = phoneNumbers.reduce((acc, curr) => {
    if (curr.slice(0,5) === "(503)") {
        return acc + 1;
    } else {
        return acc; 
    }
},0);

console.log(numberOf503);