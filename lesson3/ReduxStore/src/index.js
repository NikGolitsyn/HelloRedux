import store from './store.js';
import { clearUser, saveUser } from './user.actions.js';
import { setLanguage } from './language.actions.js';
import { addProduct, deleteProduct } from './cart.actions';

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(saveUser({ name: 'Thomas' }));
store.dispatch(clearUser());
store.dispatch(saveUser({ name: 'Nikita' }));
store.dispatch(setLanguage('ru'));
store.dispatch(addProduct({ id: 47, product: 'milk' }));
store.dispatch(addProduct({ id: 66, product: 'porridge' }));
store.dispatch(deleteProduct(47));
