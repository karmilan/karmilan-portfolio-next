import { Experiences } from "@/types/data";
import { FC } from "react";

type ExperienceProps = {
  experience: Experiences;
};

const ExperienceCard: FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="p-6">
        <h3 className="text-2xl font-semibold">{experience.title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{experience.company}</p>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          {experience.yearRange}
        </p>
        <p className="mt-4 text-md">{experience.description}</p>
      </div>
    </div>

    // ----------------------timeline design------------------------------
    // <div className="relative flex flex-col items-start space-y-6">
    //   <div className="relative pl-10">
    //     <span className="absolute left-0 top-2 h-4 w-4 bg-blue-500 rounded-full"></span>
    //     <h3 className="text-lg font-semibold">{experience.title}</h3>
    //     <p className="text-sm text-gray-600">
    //       {experience.company} | {experience.yearRange}
    //     </p>
    //     <p className="text-gray-800">{experience.description}</p>
    //   </div>
    // </div>
  );
};

export default ExperienceCard;
