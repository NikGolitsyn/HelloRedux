import { createSelector } from 'reselect';

export const usersListSelector = state => state.users.usersList;

export const filterTextSelector = state => state.users.filterText;

export const filteredUsersSelector = createSelector(
  [filterTextSelector, usersListSelector],
  (filterText, usersList) =>
    usersList.filter(user => user.name.toLowerCase().includes(filterText.toLowerCase())),
);
