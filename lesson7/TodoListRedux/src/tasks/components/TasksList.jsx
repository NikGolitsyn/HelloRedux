import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TasksList = ({ updateTask, deleteTask, tasks }) => (
  <ul className="list">
    {tasks.map(task => (
      <Task key={task.id} {...task} onChange={updateTask} onDelete={deleteTask} />
    ))}
  </ul>
);

export default TasksList;

TasksList.propTypes = {
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
