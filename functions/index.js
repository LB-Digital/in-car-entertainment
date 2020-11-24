
// *** modules ***
// firebase
const functions = require('firebase-functions');
// external
const axios = require('axios');


// *** config ***
const OPEN_WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather';
const MEASUREMENT_UNITS = 'metric';
const OPEN_WEATHER_ICON_URL = 'https://openweathermap.org/img/w';


exports.getCurrentWeather = functions.https.onCall(async (data, context) => {

    if (!data)
        throw new functions.https.HttpsError(
            'invalid-argument',
            'missing arguments'
        );

    const { location } = data;

    if (!location)
        throw new functions.https.HttpsError(
            'invalid-argument',
            'missing location argument'
        );


    const OpenWeatherApiKey = functions.config().openweather.apikey;

    let weatherData;
    try {
        const reqUrl = `${OPEN_WEATHER_API_URL}?q=${location}&APPID=${OpenWeatherApiKey}&units=${MEASUREMENT_UNITS}`;
        const response = await axios.get(reqUrl);
        weatherData = response.data;

    } catch (err) {
        console.log(err);

        throw new functions.https.HttpsError('unknown', 'failed to get weather data');
    }


    return {
        temp: weatherData.main.temp,
        type: weatherData.weather[0].main,
        icon: `${OPEN_WEATHER_ICON_URL}/${weatherData.weather[0].icon}.png`
    };
});
