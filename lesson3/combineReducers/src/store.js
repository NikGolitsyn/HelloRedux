import { createStore, combineReducers } from 'redux';
import counterReducer from './counter.reducer.js';
import usersReducer from './users.reducer.js';

const appReducers = combineReducers({
  users: usersReducer,
  counter: counterReducer,
});

const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
