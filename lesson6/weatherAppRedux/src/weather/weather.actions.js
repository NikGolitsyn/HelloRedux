import { fetchWeatherData } from './weather.gateway.js';

export const WEATHER_DATA_RECIEVED = 'WEATHER/WEATHER_DATA_RECIEVED';

export const weatherDataRecieved = weatherData => ({
  type: WEATHER_DATA_RECIEVED,
  payload: {
    weatherData,
  },
});

export const getWeatherData = () => dispatch => {
  fetchWeatherData().then(citiesArray => {
    dispatch(weatherDataRecieved(citiesArray));
  });
};

