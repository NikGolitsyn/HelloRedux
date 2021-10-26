const baseUrl = 'https://613e4b5094dbd600172abb49.mockapi.io/api/v1/tasks';

export const createTask = taskDate => fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskDate),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });

export const fetchTaskList = () => fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to fetch data')
  });

export const updateTask = (taskData, id) => fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to update task');
    }
  });

export const deleteTask = id => fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });
