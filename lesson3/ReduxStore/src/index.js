import store from './store.js';
import { removeUser, setUser } from './user.actions.js';
import { setLanguage } from './language.actions.js';
import { addProduct, removeProduct } from './cart.actions';

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(setUser({ name: 'Thomas' }));
store.dispatch(removeUser());
store.dispatch(setUser({ name: 'Nikita' }));
store.dispatch(setLanguage('ru'));
store.dispatch(addProduct({ id: 47, product: 'milk' }));
store.dispatch(addProduct({ id: 66, product: 'porridge' }));
store.dispatch(removeProduct(47));
