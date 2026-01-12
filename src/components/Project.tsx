import React, { useEffect, useRef, useState } from "react";
import type { Project } from "../types";
import { PROJECTS } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard: React.FC<{ project: Project; delay: number }> = ({
  project,
  delay,
}) => {
  const mainLink = project.liveUrl || project.repoUrl;

  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className="
        bg-secondary rounded-lg overflow-hidden group
        transform transition-all duration-500
        hover:scale-[1.03] hover:shadow-2xl hover:shadow-accent/20
        opacity-0 animate-fade-up
      "
    >
      <div className="relative overflow-hidden">
        {mainLink ? (
          <a href={mainLink} target="_blank" rel="noopener noreferrer">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="
                w-full h-48 sm:h-56 md:h-64
                object-cover transition-transform duration-500
                group-hover:scale-110
              "
            />
          </a>
        ) : (
          <div className="w-full aspect-video bg-primary flex items-center justify-center">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="
                max-w-full max-h-full object-contain
                transition-transform duration-500
                group-hover:scale-105
              "
            />
          </div>
        )}

        <div className="
          absolute inset-0 bg-black/50
          flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        ">
          <div className="flex space-x-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent p-3 bg-primary/50 rounded-full"
              >
                <FaExternalLinkAlt size={22} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent p-3 bg-primary/50 rounded-full"
              >
                <FaGithub size={22} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="text-xl sm:text-2xl font-bold text-white-text mb-3">
          {project.title}
        </h3>
        <p className="text-light-gray mb-6 text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary text-accent text-sm font-semibold px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white-text">
          My Projects
        </h2>
      </div>

      <div className="
        grid md:grid-cols-2
        gap-14 sm:gap-12
        max-w-6xl mx-auto px-4
      ">
        {visible &&
          PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={index * 150}
            />
          ))}
      </div>
    </section>
  );
};

export default Projects;
