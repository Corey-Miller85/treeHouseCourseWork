
//require https module 
const https = require('https');

/**
 * PRINT ERROR MESSAGE *
 */
function printError(error){
    console.error(error.message);
}


//print message to console.
function printMessage(username, badgecount, points) {
const message = `${username} has ${badgecount} total badge(s) and ${points} points in JavaScript`;
console.log(message);
}

function get(username) {

    try {
        // Connect to the API URL (https://teamtreehouse.com/username.json)
        const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
            let body = ""
            // Read the data
            response.on('data', data => {
                body += data.toString();
            });

            response.on('end', () => {
                try {
                    // Parse the data
                    const profile = JSON.parse(body);
                    // Print the data
                    printMessage(username, profile.badges.length, profile.points.JavaScript)
                } catch(error) {
                    printError(error);
                }
            })
        });
        request.on('error', printError);
    } catch (error) {
        printError(error);     
    }
}


module.exports.get = get;