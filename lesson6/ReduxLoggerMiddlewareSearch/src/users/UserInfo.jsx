import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './Spinner.jsx';
import { isFetchingSelector, userDataSelector } from './users.selectors.js';

const UserInfo = ({ userData, isFetching }) => {
  if (isFetching) {
    return <Spinner />;
  }
  
  if (!userData) {
    return null;
  }

  const { avatar_url, name, location } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

const mapState = state => ({
  isFetching: isFetchingSelector(state),
  userData: userDataSelector(state),
});

UserInfo.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  userData: PropTypes.shape(),
};

UserInfo.defaultValue = {
  userData: null,
};

export default connect(mapState)(UserInfo);
