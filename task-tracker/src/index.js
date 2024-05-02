import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TaskTrackerApp from './TaskTrackerApp';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Dashboard from './DashBoard';
import Settings from './Settings';
import MyForm from './MyForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
   <TaskTrackerApp/>

<TaskForm/>
<TaskList/> 
 <Dashboard/>
<Settings/>
<MyForm/>
  </>
 
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

