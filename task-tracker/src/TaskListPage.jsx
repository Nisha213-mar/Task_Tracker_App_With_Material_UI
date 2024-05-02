import React from 'react';
import TaskForm from './TaskForm';

const TaskListPage = () => {
    const handleSubmit = (task) => {
        // Handle the submission, for example, add the task to a list
        console.log('Task submitted:', task);
    };

    return (
        <div>
            <h1>Task List</h1>
            <TaskForm onSubmit={handleSubmit} />
            {/* Other components and logic */}
        </div>
    );
};

export default TaskListPage;
