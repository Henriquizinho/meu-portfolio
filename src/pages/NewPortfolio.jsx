import React from 'react';

const NewPortfolio = () => {
  const projects = [
    {
      name: "Projeto 1",
      description: "Descrição breve do Projeto 1",
      image: "path/to/project1.png",
      link: "https://github.com/seuusuario/projeto1"
    },
    {
      name: "Projeto 2",
      description: "Descrição breve do Projeto 2",
      image: "path/to/project2.png",
      link: "https://github.com/seuusuario/projeto2"
    }
  ];

  return (
    <div>
      <h1>Portfólio</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <img src={project.image} alt={`Imagem do ${project.name}`} />
          <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
        </div>
      ))}
    </div>
  );
}

export default NewPortfolio;
