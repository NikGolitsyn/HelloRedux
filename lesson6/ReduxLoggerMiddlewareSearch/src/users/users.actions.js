import { getUserData } from './users.gateway.js';

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_RECIEVED = 'USER_DATA_RECIEVED';
export const showSpinner = () => ({
  type: SHOW_SPINNER,
});

export const userDataRecieved = userData => ({
  type: USER_DATA_RECIEVED,
  payload: {
    userData,
  },
});

export const fetchUserData = userName => dispatch => {
  dispatch(showSpinner());
  getUserData(userName).then(userData => {
    dispatch(userDataRecieved(userData));
  });
};
