import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, age }) => (
  <li className="user">
    <span className="user__name">{name}</span>
    <span className="user__age">{age}</span>
  </li>
);

export default User;

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
