import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TaskList from './TaskList';
import Settings from './Settings';

const Dashboard = ({ tasks, completedTasks, onRemove }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Task Tracker
            </Typography>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </Toolbar>
          <Tabs value={tabIndex} onChange={handleTabChange}>
            <Tab label="Tasks" />
            <Tab label="Completed Tasks" />
            <Tab label="Settings" />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        {tabIndex === 0 && (
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Task List</Typography>
            <TaskList tasks={tasks} onRemove={onRemove} />
          </Paper>
        )}
        {tabIndex === 1 && (
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Completed Tasks</Typography>
            <TaskList tasks={completedTasks} onRemove={onRemove} />
          </Paper>
        )}
        {tabIndex === 2 && (
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Settings</Typography>
            <Settings />
          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
