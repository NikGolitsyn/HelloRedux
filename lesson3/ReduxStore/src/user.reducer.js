import { SAVE_USER, CLEAR_USER } from './user.actions';

const initialState = {
  user: null,
};

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, user: action.payload.userData };

    case CLEAR_USER:
      return { ...state, user: null };

    default:
      return state;
  }
};

export default userReducer;
