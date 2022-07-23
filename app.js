const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=83bbfd77a46eff1fc132d9fbcd409f00&query=37.8267,-122.4233';

request(url, function (error, response, body) {
  const data = JSON.parse(body);
  console.log(data.current);
});