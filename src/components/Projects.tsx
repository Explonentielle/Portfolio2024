import React from 'react';
import Card from './Card';
import Modal from './Modale';
import { projectsData } from '../lib/data'

const Projects = () => {
  return (
    <section id='projects' className='mb-32'>
      <div>
        <h2 className='ml-32 text-5xl text-white font-bold projectTitle'>Selected Projects</h2>
      </div>
      <div className='m-auto flex flex-wrap justify-center'>
        <Modal />
        {projectsData.map((project) => (
          <Card
            key={project.id}
            src={project.src}
            title={project.title}
            link={project.link}
            techno={project.techno}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;