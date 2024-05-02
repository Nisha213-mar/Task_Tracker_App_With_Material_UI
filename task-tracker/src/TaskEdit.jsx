import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TaskEdit = ({ tasks, onEdit }) => {
  const { taskId } = useParams();
  const task = tasks.find(task => task.id === taskId);
  const [editTaskName, setEditTaskName] = useState(task ? task.name : '');
  const [editTaskDescription, setEditTaskDescription] = useState(task ? task.description : '');

  const handleSaveEdit = () => {
    onEdit(taskId, editTaskName, editTaskDescription);
  };

  return (
    <div>
      <TextField
        label="Task Name"
        fullWidth
        margin="normal"
        value={editTaskName}
        onChange={(e) => setEditTaskName(e.target.value)}
      />
      <TextField
        label="Task Description"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={editTaskDescription}
        onChange={(e) => setEditTaskDescription(e.target.value)}
      />
      <Button variant="contained" onClick={handleSaveEdit}>Save</Button>
    </div>
  );
};

export default TaskEdit;
