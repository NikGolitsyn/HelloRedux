import React from 'react';
import PropTypes from 'prop-types';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleCreateTask = () => {
    this.props.onCreate(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          value={this.state.value}
          className="create-task__input"
          onChange={this.handleChange}
        />
        <button className="btn create-task__btn" onClick={this.handleCreateTask}>
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
