'use client';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useObserverContext } from '../context/intersectionObserver';
import Project from './Project';
import { projects } from '../lib/data';

function Projects() {
  const { inView: projectsInView, ref: projectsRef, entry } = useInView();
  const { setActiveSection } = useObserverContext();

  useEffect(() => {
    if (entry?.isIntersecting) {
      setActiveSection('projects');
      // entry?.target.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'center',
      // });
    }
  }, [entry?.isIntersecting]);
  //ubaciti kao kartice verticalne accordione stack deskripcija a  slika da ide preko ceolog polja
  return (
    <div id="projects" className="flex-col my-8">
      <h3
        className="text-[4em] mb-8 dark:text-[#55cebc] relative"
        ref={projectsRef}
      >
        Projects
      </h3>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        {projects.map((project, idx) => (
          <Project key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
