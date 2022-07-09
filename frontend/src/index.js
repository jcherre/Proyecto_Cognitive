import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Users from "./routes/Users";
import Dashboard from './routes/Dashboard';
import Projects from './routes/Projects';
import Settings from './routes/Settings';
import CreateUser from './routes/CreateUser'
import CreateProject from './routes/CreateProject';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<App />} />
      <Route path="users" element={<Users />} />
      <Route path="create-user" element={<CreateUser />} />
      <Route path="dashboard/:projectID" element={<Dashboard />} />
      <Route path="projects" element={<Projects />} />
      <Route path="create-project" element={<CreateProject />} />
      <Route path="settings" element={<Settings />} />
      

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
