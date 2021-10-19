import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ count, filterText, onChange }) => (
  <div className="filter">
    <span className="filter__count">{count}</span>
    <input
      type="text"
      className="filter__input"
      value={filterText}
      onChange={event => onChange(event.target.value)}
    />
  </div>
);

export default Filter;

Filter.propTypes = {
  count: PropTypes.number.isRequired,
  filterText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
