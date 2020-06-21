import React, { useEffect, useState } from 'react';
import api from './services/api';

import './App.css';

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
      console.log(response);
    });
  }, []);

  return (
    <>
      <h1>Hello GoStack</h1>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
    </>
  );
}

export default App;