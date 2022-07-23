const request = require('request')
const geocode = require('./geocode.js')


const getweather = (lat, lng , callback) => {
    const url = `http://api.weatherstack.com/current?access_key=83bbfd77a46eff1fc132d9fbcd409f00&query=${lat},${lng}`;
    request({ url: url, json: true }, function (error, response, body) {
        const {current} = body;
        if (error) {
            callback('unable to connect to services', undefined);
        } else if (!current || current.length == 0) {
            callback('invalid location , try another search', undefined);
        } else {
            const {temperature , feelslike} = body.current;
            callback(undefined,{temperature , feelslike})
        }
    })
};

const forcast = (address) => {
    geocode(address, (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            const {lat , lng} = data;
            console.log(`lat : ${lat} , lng : ${lng}`);
            getweather(lat, lng, (error, weatherData) => {
                if (error) {
                    console.log(error);
                } else {
                    const {temperature , feelslike} = weatherData;
                    console.log(`Its currently ${temperature} degrees , but it feels like ${feelslike} degrees`);
                }
            })
        }
    })
};

module.exports = forcast;