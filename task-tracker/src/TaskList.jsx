import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TaskList = ({ onRemove, onEdit }) => {
    const [tasks, setTasks] = useState([]);
    const [editTaskId, setEditTaskId] = useState(null);
    const [editTaskName, setEditTaskName] = useState('');
    const [editTaskDescription, setEditTaskDescription] = useState('');

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleEdit = (taskId, taskName, taskDescription) => {
        setEditTaskId(taskId);
        setEditTaskName(taskName);
        setEditTaskDescription(taskDescription);
    };

    const handleSaveEdit = () => {
        onEdit(editTaskId, editTaskName, editTaskDescription);
        setEditTaskId(null);
        setEditTaskName('');
        setEditTaskDescription('');
    };

    const handleCloseEdit = () => {
        setEditTaskId(null);
        setEditTaskName('');
        setEditTaskDescription('');
    };

    const handleRemove = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        onRemove(taskId);
    };

    return (
        <List>
            {tasks.map((task) => (
                <ListItem key={task.id}>
                    <ListItemText
                        primary={task.name}
                        secondary={task.description}
                    />
                    <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(task.id, task.name, task.description)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleRemove(task.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}

            <Modal open={editTaskId !== null} onClose={handleCloseEdit}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
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
                    <Button variant="contained" onClick={handleCloseEdit}>Cancel</Button>
                </Box>
            </Modal>
        </List>
    );
};

export default TaskList;
