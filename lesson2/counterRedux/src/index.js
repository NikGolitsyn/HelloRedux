import { createStore } from 'redux';

export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';

export const actionCreatorIncrement = () => {
  return { type: INCREMENT };
};

export const actionCreatorDecrement = () => {
  return { type: DECREMENT };
};

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);

store.dispatch(actionCreatorIncrement());
store.dispatch(actionCreatorDecrement());

console.log(store.getState());
