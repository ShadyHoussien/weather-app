const geocode = require('./utils/geocode.js')
const getweather = require('./utils/weather.js')


const forcast = (address) => {
    geocode(address, (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(`lat : ${data.lat} , lng : ${data.lng}`);
            getweather(data.lat, data.lng, (error, weatherData) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(`Its currently ${weatherData.temperature} degrees , but it feels like ${weatherData.feelslike} degrees`);
                }
            })
        }
    })
};

forcast("Newyork");

