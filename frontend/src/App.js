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

  /*
  * useEffect vai executar script sempre que o estado de algo for alterado, ou passar um array
  * vazio [] para executar quando carregar a página
  * O useState vai atualizar as informações na página sempre que o estado de algo for alterado
  * no caso, segundo parâmetro, defido nessa aplicação como setProjects vai exibir sempre a
  * informação atualizada da variável que está usando o state.
  */

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Projeto novo ${Date.now()}`,
      owner: 'Luã Braga'
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <h1>Hello GoStack</h1>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;

/*
 * O map vai percorrer um array sem alterá-lo. Ao invés disso ele irá criar um novo array
 * e será também possível inserir html diretamente na função.
 */