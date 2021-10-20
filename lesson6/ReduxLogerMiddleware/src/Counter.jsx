import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as counterActions from './counter.actions';

const Counter = ({ counter, increment, decrement, reset }) => (
  <div className="counter">
    <button className="counter__button" onClick={decrement}>
      -
    </button>
    <span className="counter__value" onClick={reset}>
      {counter}
    </span>
    <button className="counter__button" onClick={increment}>
      +
    </button>
  </div>
);

const mapState = state => ({
  counter: state,
});

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

const connector = connect(mapState, mapDispatch); // HOC

export default connector(Counter);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
