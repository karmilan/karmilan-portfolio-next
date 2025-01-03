import PageHeading from "@/components/PageHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/types/data";

const page = () => {
  return (
    <div className="sm:px-10 px-7">
      <div className="min-h-screen py-12 px-4">
        <PageHeading
          title="My Projects"
          subtitle="Projects That Define My Expertise"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-8">
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
