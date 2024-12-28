import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/types/data";

const page = () => {
  return (
    <div className="sm:px-10 px-7">
      <div className="min-h-screen py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          My Projects
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
