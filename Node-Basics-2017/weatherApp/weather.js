const https = require('https');
const api = require('./apikey');


/**
 * Get the temperature and city from the openweather map API.
 * @param {(string|number)} query - the city or zipcode to be searched.
 */

function get(query) { 
    try {
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${api.key}`, response => {
    let body = '';
    response.on('data', raw => {
        body += raw;
    })
    response.on('end', () => {
        const jsonData = JSON.parse(body);
        printMessage(jsonData.main.temp, jsonData.name);
    });
    });
} catch (error) {
    console.log("there was an error with the page" + error.message)
}
}

/**
 * Prints the message to screen containing the temperature and location.
 * @param {string} weather - the temperature data from jsonData 
 * @param {string} location - the jsonData[name], name of city.
 */

function printMessage(weather, location) {
    process.stdout.write(`The current temperature in ${location} is ${weather} degrees fahrenheit.` + '\n');
}

module.exports.get = get;

