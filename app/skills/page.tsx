import PageHeading from "@/components/PageHeading";
import ProgressBar from "@/components/ui/ProgressBar";

const Skills = () => {
  return (
    <div className="sm:px-10 px-7">
      <div className="text-black-100 dark:text-white min-h-screen py-12 sm:p-8">
        <div className="container mx-auto text-center ">
          <PageHeading
            title="Skills"
            subtitle="Proficiencies that drive My Projects"
          />

          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 m-auto">
              <div className="sm:p-10">
                <ProgressBar skill="JavaScript" progress="75%" />
                <ProgressBar skill="React" progress="80%" />
                <ProgressBar skill="Next.js" progress="60%" />
                <ProgressBar skill="ReactNative" progress="70%" />
                <ProgressBar skill="Node.js" progress="50%" />
                <ProgressBar skill="Express" progress="50%" />
              </div>
              <div className="sm:p-10">
                <ProgressBar skill="TypeScript" progress="70%" />
                <ProgressBar skill="MongoDB" progress="75%" />
                <ProgressBar skill="AWS" progress="50%" />
                <ProgressBar skill="Figma" progress="80%" />
                <ProgressBar skill=" Adobe XD" progress="75%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
