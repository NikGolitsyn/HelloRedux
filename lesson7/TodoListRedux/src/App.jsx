import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './tasks/components/TodoList';
import store from './store.js';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
