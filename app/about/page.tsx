import PageHeading from "@/components/PageHeading";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { Educations } from "@/types/data";

const About = () => {
  return (
    <div className="sm:px-10 px-7">
      <div className="text-black-100 dark:text-white min-h-screen py-12 sm:p-8">
        <div className="container mx-auto text-center ">
          <PageHeading
            title="About Me"
            subtitle="Get to know more about me, my skills, and my journey."
          />

          <div className="mt-8">
            {/* Description Section */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">Who Am I?</h2>
              <p className="text-lg text-justify leading-relaxed mb-6">
                I am a passionate and dedicated Software Engineer with 3 years
                of experience in full-stack development, specializing in both
                front-end and back-end technologies. My expertise lies in
                building scalable, high-performance applications using modern
                frameworks like React and Node.js, and cloud platforms like AWS.
                I have a strong background in UI/UX design, using tools such as
                Adobe XD and Figma to create intuitive user interfaces that
                enhance user experience.
              </p>

              {/* Skills Section */}
              {/* <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-400">
                <li className="bg-gray-800 p-4 rounded-md shadow-md">React</li>
                <li className="bg-gray-800 p-4 rounded-md shadow-md">
                  Next.js
                </li>
                <li className="bg-gray-800 p-4 rounded-md shadow-md">
                  Node.js
                </li>
                <li className="bg-gray-800 p-4 rounded-md shadow-md">
                  Tailwind CSS
                </li>
                <li className="bg-gray-800 p-4 rounded-md shadow-md">AWS</li>
                <li className="bg-gray-800 p-4 rounded-md shadow-md">
                  TypeScript
                </li>
              </ul> */}
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-center">
                Education
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Educations.map((education, index) => (
                  <div className="mb-2" key={index}>
                    <ExperienceCard experience={education} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
