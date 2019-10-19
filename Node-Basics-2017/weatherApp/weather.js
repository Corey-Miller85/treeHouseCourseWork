const https = require('https');
const api = require('./apikey');


function get(query) { 
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${api.key}`, response => {
    let body = '';
    response.on('data', raw => {
        body += raw;
    })
    response.on('end', () => {
        const jsonData = JSON.parse(body);
        process.stdout.write(`The current temperature in ${query} is ${jsonData.main.temp} degrees fahrenheit` + '\n');
    });
});
}
module.exports.get = get;