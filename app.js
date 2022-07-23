const forcast = require('./utils/weather.js')

var address = process.argv[2];
if (!address) {
    console.log('please provide an address !');
} else {
    forcast(address);
}