import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import TaskList from './components/TaskList';
import CompletedTasksPage from './components/CompletedTasksPage';
import SettingsPage from './components/SettingsPage';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/completed-tasks">Completed Tasks</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tasks" component={TaskList} />
        <Route path="/completed-tasks" component={CompletedTasksPage} />
        <Route path="/settings" component={SettingsPage} />
      </Switch>
    </div>
  );
};

export default App;
