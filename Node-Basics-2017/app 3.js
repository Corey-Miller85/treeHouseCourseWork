// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

const https = require('https') //require the https api
const username = "chalkers"

//print message to console
function printMessage(username, badgeCount, points) {
const message = `${username} has ${badgeCount} total badge(s) and ${points} in JavaScript`
console.log(message)
}

printMessage("Chalkers", 100, 20000)

//connect to the api url (https://teamtreehouse.com/username.json)

const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    console.dir(response.statusCode)
    let body = "";
    //read the data
    response.on('data', data => {
       body += data.toString();
    });

    response.on('end', () => {
        console.dir(data)
    });


    //parse the data
    //print the data
});



