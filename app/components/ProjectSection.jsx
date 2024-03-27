'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';
import ProjectsData from './ProjectData';

const ProjectSection = () => {
  const [tag, setTag] = useState('All');
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-3">
        My projects
      </h2>
      <div className="flex flex-wrap gap-2 pt-6 pb-10 text-white items-center justify-center">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Projects"
          isSelected={tag === 'Projects'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Challenges"
          isSelected={tag === 'Challenges'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === 'Personal'}
        />
      </div>
      <ul className="grid md:grid-cols-2 gap-8 md:gap-12" ref={ref}>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
