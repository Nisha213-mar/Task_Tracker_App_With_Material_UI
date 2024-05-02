import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';


const TaskTrackerApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { id: tasks.length + 1, name: taskName }]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const taskName = e.target.taskName.value;
          addTask(taskName);
          e.target.reset();
        }}
      >
        <input type="text" name="taskName" placeholder="Enter task name" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskTrackerApp;
// import React, { useState } from 'react';
// import TaskForm from './TaskForm';
// import TaskList from './TaskList';

// const TaskTrackerApp = () => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//     setTasks([...tasks, { id: tasks.length + 1, ...task }]);
//   };

//   const removeTask = (taskId) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   return (
//     <div>
//       <h1>Task Tracker</h1>
//       <TaskForm onSubmit={addTask} />
//       <TaskList tasks={tasks} onRemove={removeTask} />
//     </div>
//   );
// };

// export default TaskTrackerApp;
