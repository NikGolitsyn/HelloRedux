import * as taskGateway from './tasksGateway';
import { tasksListSelector } from './tasks.selectors';

export const TASK_LIST_RECIEVED = 'TASK_LIST/TASK_LIST_RECIEVED';

export const taskListRecieved = tasksList => ({
  type: TASK_LIST_RECIEVED,
  payload: {
    tasksList,
  },
});

export const fetchTasks = () => dispatch => {
  taskGateway.fetchTaskList().then(data => {
    dispatch(taskListRecieved(data));
  });
};

export const updateTask = taskId => {
  const thunkAction = (dispatch, getState) => {
    const state = getState();
    const taskList = tasksListSelector(state);

    const { done, text } = taskList.find(task => task.id === taskId);
    const updatedTask = { text, done: !done };

    taskGateway.updateTask(updatedTask, taskId).then(() => {
      dispatch(fetchTasks());
    });
  };

  return thunkAction;
};

export const createTask = text => {
  const thunkAction = dispatch => {
    const newTask = { text, done: false, id: Math.random() };
    taskGateway.createTask(newTask).then(() => {
      dispatch(fetchTasks());
    });
  };

  return thunkAction;
};

export const deleteTask = taskId => {
  const thunkAction = dispatch => {
    taskGateway.deleteTask(taskId).then(() => {
      dispatch(fetchTasks());
    });
  };

  return thunkAction;
};
