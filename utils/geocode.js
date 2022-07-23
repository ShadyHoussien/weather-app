const request = require('request')


const geocode = (address, callback) => {
    //New York
    const geoLocUrl = `http://api.positionstack.com/v1/forward?access_key=a4d95f0fdce3fd1fe1c76676dd3b2a4c&query=${encodeURIComponent(address)}`;
    request({ url: geoLocUrl, json: true }, (error, response, body) => {
        if (error) {
            callback('unable to connect to services', undefined);
        } else if (!body.data || body.data.length == 0) {
            callback('invalid location , try another search', undefined);
        }
        else {
            const lat = body.data[0].latitude;
            const lng = body.data[0].longitude;
            callback(undefined, { lat: lat, lng: lng });
        }
    });
}

module.exports = geocode;