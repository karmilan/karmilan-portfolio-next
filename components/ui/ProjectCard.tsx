"use client";
import { Projects } from "@/types/data";
import { FC, useState } from "react";

type ProjectProps = {
  project: Projects;
};

const ProjectCard: FC<ProjectProps> = ({ project }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="group bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <img
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {showMore
              ? project.description
              : `${project.description.slice(0, 60)}...`}
          </p>
          {project.description.length > 60 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}
          {/* <p className="text-sm text-gray-600 dark:text-gray-400">
            {project.description}
          </p> */}
          <div className="mt-2 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-700 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
          >
            View Project →
          </a>
        </div>
        {/* <Stepper /> */}
      </div>
    </>
  );
};

export default ProjectCard;
