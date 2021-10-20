import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { weatherDataSelector } from './weather.selectors';
import { getWeatherData } from './weather.actions';

const Weather = ({ weatherForcast, fetchWeatherForcast }) => {
  useEffect(() => {
    fetchWeatherForcast();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherForcast.map(city => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = state => ({
  weatherForcast: weatherDataSelector(state),
});

const mapDispatch = {
  fetchWeatherForcast: getWeatherData,
};

Weather.propTypes = {
  weatherForcast: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  fetchWeatherForcast: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(Weather);
