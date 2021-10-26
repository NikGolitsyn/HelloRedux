import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TasksList from './TasksList.jsx';
import CreateTaskInput from './CreateTaskInput';
import { sortedTaskListSelector } from '../tasks.selectors';
import * as taskActionCreator from '../tasks.actions';

const TodoList = ({ tasks, getTasks, createTask, updateTask, deleteTask }) => {
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput onCreate={createTask} />
        <TasksList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      </main>
    </>
  );
};

const mapState = state => ({
  tasks: sortedTaskListSelector(state),
});

const mapDispatch = {
  getTasks: taskActionCreator.fetchTasks,
  updateTask: taskActionCreator.updateTask,
  createTask: taskActionCreator.createTask,
  deleteTask: taskActionCreator.deleteTask,
};

export default connect(mapState, mapDispatch)(TodoList);

TodoList.propTypes = {
  getTasks: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
