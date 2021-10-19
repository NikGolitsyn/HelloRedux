export const INCREMENT = 'CURRENT_PAGE/INCREMENT';
export const DECREMENT = 'CURRENT_PAGE/DECREMENT';

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

