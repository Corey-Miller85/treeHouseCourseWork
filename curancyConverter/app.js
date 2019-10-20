const currancy = require('./currancy');

const query = process.argv.slice(2,6)

const number = query[0];
const origin = query[1];
const target = query[3];

currancy.get(number,origin,target);

/************************************************************************
**** To run type: "node app.js {number} {currancy} in {Target currancy}" 
************************************************************************/