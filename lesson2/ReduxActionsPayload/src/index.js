import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.subscribe(() => {
  const state = store.getState().usersList;
  console.log(state);
});

store.dispatch(addUser({ id: 66, name: 'Tomas' }));
store.dispatch(addUser({ id: 81, name: 'Andrew' }));
store.dispatch(addUser({ id: 99, name: 'Nikita' }));
store.dispatch(addUser({ id: 102, name: 'Maria' }));
store.dispatch(deleteUser(81));
store.dispatch(addUser({ id: 81, name: 'Andrew' }));
