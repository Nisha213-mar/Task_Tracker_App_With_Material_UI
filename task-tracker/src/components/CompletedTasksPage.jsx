import React from 'react';

const CompletedTasksPage = () => {
  // Assume completedTasks is an array of completed tasks
  const completedTasks = [
    { id: 1, name: 'Task 1', description: 'Description for Task 1' },
    { id: 2, name: 'Task 2', description: 'Description for Task 2' },
    { id: 3, name: 'Task 3', description: 'Description for Task 3' },
  ];

  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>
            <strong>{task.name}</strong>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasksPage;
