import ExperienceCard from "@/components/ui/ExperienceCard";
import { experiences } from "@/types/data";

const page = () => {
  return (
    <div className="sm:px-10 px-7">
      <div className="text-black-100 dark:text-white min-h-screen py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">My Experience</h1>
          <p className="text-lg mb-12">
            A glimpse of my journey in the tech industry.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div key={index}>
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
