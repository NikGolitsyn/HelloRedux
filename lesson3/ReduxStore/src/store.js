import { createStore, combineReducers } from 'redux';
import userReducer from './user.reducer';
import languageReducer from './language.reducer';
import cartReducer from './cart.reducer';

const appReducers = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
