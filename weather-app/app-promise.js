const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then(response => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find specified address.');
  }
  let lat = response.data.results[0].geometry.location.lat;
  let lng = response.data.results[0].geometry.location.lng;
  let weatherUrl = `https://api.darksky.net/forecast/82a1a91801546e30b279a696dffe7302/${lat},${lng}`;
  console.log(`\n${response.data.results[0].formatted_address}`);
  console.log('---')
  return axios.get(weatherUrl);
}).then((response) => {

  let temperature = ((response.data.currently.temperature - 32) * 5 / 9).toFixed(2);
  let apparentTemperature = ((response.data.currently.apparentTemperature - 32) * 5 / 9).toFixed(2);
  let humidity = response.data.currently.humidity;
  let windSpeed = response.data.currently.windSpeed;

  console.log(`It's currently ${temperature}. Feels like ${apparentTemperature}`);
  console.log(`Humidity: ${humidity}; wind speed: ${windSpeed}\n`);
}).catch(error => {
  if (error.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(error.message);
  }
});