import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={`Imagem do ${project.name}`} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
    </div>
  );
}

export default ProjectCard;
