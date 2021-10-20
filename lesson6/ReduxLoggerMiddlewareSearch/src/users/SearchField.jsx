import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as usersActions from './users.actions.js';

const SearchField = ({ fetchUserData }) => {
  const [inputValue, setInputValue] = useState({ userName: '' });

  const onChange = event => {
    setInputValue({ userName: event.target.value });
  };

  const handleUserSearch = () => {
    fetchUserData(inputValue.userName);
  };

  return (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        value={inputValue.userName}
        onChange={event => onChange(event)}
      />
      <button className="name-form__btn btn" onClick={handleUserSearch}>
        Show
      </button>
    </div>
  );
};

SearchField.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
};

const mapDispatch = {
  userDataRecieved: usersActions.userDataRecieved,
  fetchUserData: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
