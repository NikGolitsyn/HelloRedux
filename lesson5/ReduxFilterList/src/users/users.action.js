export const GET_FILTER_VALUE = 'USERS/GET_FILTER_VALUE';

export const filterUsers = value => ({
  type: GET_FILTER_VALUE,
  payload: {
    value,
  },
});
