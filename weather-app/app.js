const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (geocodeError, geocodeResults) => {
  if (geocodeError) {
    console.log(geocodeError);
  } else {
    weather.getWeather(geocodeResults.latitude, geocodeResults.longitude, (weatherError, weatherResults) => {
      if (weatherError) {
        console.log(weatherError);
      } else {
        console.log(JSON.stringify(weatherResults, undefined, 2));
      }
    });
  }
});
