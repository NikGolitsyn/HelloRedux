import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

const actionCreatorIncrement = () => {
  return { type: INCREMENT };
};

const actionCreatorDecrement = () => {
  return { type: DECREMENT };
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

store.dispatch(actionCreatorIncrement());
store.dispatch(actionCreatorDecrement());

console.log(store.getState());
