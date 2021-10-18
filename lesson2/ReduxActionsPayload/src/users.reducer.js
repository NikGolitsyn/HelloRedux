import { ADD_USER, DELETE_USER } from './users.actions.js';

const initialState = {
  usersList: [],
};

const findAndDelete = (array, id) => {
  const newArray = [...array];
  newArray.splice(
    array.findIndex(user => user.id === id),
    1,
  );
  
  return newArray;
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.userData),
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: findAndDelete(state.usersList, action.id),
      };

    default:
      return state;
  }
};

export default usersReducer;
