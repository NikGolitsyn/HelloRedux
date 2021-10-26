import { WEATHER_DATA_RECIEVED } from './weather.actions';

const initialState = {
  cities: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_DATA_RECIEVED:
      return { ...state, cities: action.payload.weatherData };

    default:
      return state;
  }
};

export default weatherReducer;