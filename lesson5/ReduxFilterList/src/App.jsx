import React from 'react';
import { Provider } from 'react-redux';
import UsersList from './users/UsersList';
import store from './store';

console.log(store.getState());

const App = () => (
  <Provider store={store}>
    <UsersList />
  </Provider>
);

export default App;
