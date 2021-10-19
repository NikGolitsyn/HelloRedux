import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import * as counterActions from '../counter.actions.js';

const UsersList = ({ currentPage, goNext, goPrev, users }) => {
  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToRender = users.slice(startIndex, endIndex);
  return (
    <div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
        goNext={goNext}
        goPrev={goPrev}
        currentPage={currentPage}
      />
      <ul className="users">
        {usersToRender.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return { currentPage: state.users.currentPage, users: state.users.usersList };
};

const mapDispatch = {
  goNext: counterActions.increment,
  goPrev: counterActions.decrement,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
