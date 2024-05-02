
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TaskForm = ({ onSubmit }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ taskName, taskDescription });
        setTaskName('');
        setTaskDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Task Name"
                variant="outlined"
                fullWidth
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                margin="normal"
            />
            <TextField
                label="Task Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Add Task
            </Button>
        </form>
    );
};

export default TaskForm;
