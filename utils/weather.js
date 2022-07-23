const request = require('request')


const getweather = (lat, lng , callback) => {
    const url = `http://api.weatherstack.com/current?access_key=83bbfd77a46eff1fc132d9fbcd409f00&query=${lat},${lng}`;
    request({ url: url, json: true }, function (error, response, body) {
        if (error) {
            callback('unable to connect to services', undefined);
        } else if (!body.current || body.current.length == 0) {
            callback('invalid location , try another search', undefined);
        } else {
            callback(undefined,{temperature : body.current.temperature , feelslike : body.current.feelslike})
        }
    })
};

module.exports = getweather;