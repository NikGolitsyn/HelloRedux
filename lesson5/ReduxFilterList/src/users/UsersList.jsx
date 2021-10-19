import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import User from './User';
import Filter from '../Filter.jsx';
import { filteredUsersSelector, filterTextSelector } from './users.selectors.js';
import { filterUsers } from './users.action';

const UsersList = ({ filterText, usersList, filterHandler }) => (
  <div>
    <Filter filterText={filterText} count={usersList.length} onChange={filterHandler} />
    <ul className="users">
      {usersList.map(user => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  </div>
);

const mapState = state => ({
  filterText: filterTextSelector(state),
  usersList: filteredUsersSelector(state),
});

const mapDispatch = {
  filterHandler: filterUsers,
};

export default connect(mapState, mapDispatch)(UsersList);

UsersList.propTypes = {
  filterText: PropTypes.string.isRequired,
  usersList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filterHandler: PropTypes.func.isRequired,
};
