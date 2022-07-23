const request = require('request')


const geocode = (address, callback) => {
    //New York
    const geoLocUrl = `http://api.positionstack.com/v1/forward?access_key=a4d95f0fdce3fd1fe1c76676dd3b2a4c&query=${encodeURIComponent(address)}`;
    request({ url: geoLocUrl, json: true }, (error, response, body) => {
        const {data} = body;
        if (error) {
            callback('unable to connect to services', undefined);
        } else if (!data || data == 0) {
            callback('invalid location , try another search', undefined);
        }
        else {
            const  {latitude , longitude} = body.data[0];
            callback(undefined, { lat: latitude, lng: longitude });
        }
    });
}

module.exports = geocode;