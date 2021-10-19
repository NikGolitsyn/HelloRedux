export const SAVE_USER = 'USER/SAVE_USER';
export const CLEAR_USER = 'USER/CLEAR_USER';

export const saveUser = userData => {
  return { type: SAVE_USER, payload: { userData } };
};

export const clearUser = () => {
  return { type: CLEAR_USER };
};
