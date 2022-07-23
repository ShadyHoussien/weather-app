const request = require('request')
const geocode = require('./geocode.js')

const forcast = (address) => {
    geocode(address, (error, location) => {
        if (error) {
            console.log(error);
        }
        else {
            const {lat , lng} = location;
            console.log(`lat : ${lat} , lng : ${lng}`);
            getweather(location, (error, {temperature , feelslike}) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(`Its currently ${temperature} degrees , but it feels like ${feelslike} degrees`);
                }
            })
        }
    })
};

const getweather = ({lat, lng} , callback) => {
    const url = `http://api.weatherstack.com/current?access_key=83bbfd77a46eff1fc132d9fbcd409f00&query=${lat},${lng}`;
    request({ url: url, json: true }, function (error, response, body) {
        const {current} = body;
        if (error) {
            callback('unable to connect to services', undefined);
        } else if (!current || current.length == 0) {
            callback('invalid location , try another search', undefined);
        } else {
            const {temperature , feelslike} = current;
            callback(undefined,{temperature , feelslike})
        }
    })
};



module.exports = forcast;