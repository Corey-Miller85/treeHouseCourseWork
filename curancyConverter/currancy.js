const https = require('https');

function get(amount, original,target) {
    const input = original.toString().toUpperCase();
    try {
        const request = https.get(`https://api.exchangeratesapi.io/latest?base=${input}`, response => {
            let string = "";
            response.on('data', data => {
                const buffer = data.toString()
                string += buffer;
            });
            const targetInput = target.toString().toUpperCase();
            response.on('end', () => {
                const jsonData = JSON.parse(string)
                const amountXOriginal = jsonData.rates[targetInput].toFixed(2) * amount;
                console.log(`${amount} ${input} is equal to ${amountXOriginal.toFixed(2)} ${targetInput}`)
            });
        });
    } catch (error) {
        console.error("there was an error");
    }
}

module.exports.get = get;
