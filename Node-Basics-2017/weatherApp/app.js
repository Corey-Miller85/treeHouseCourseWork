const weather = require('./weather');

const query = process.argv.slice(2);
try {
    weather.get(query);
} catch (error) {
    console.error(error.message);
}