"use client";

import { myDetails } from "@/types/data";
import Image from "next/image";
import ContactCard from "./ui/ContactCard";

const Hero = () => {
  return (
    // <div className="min-h-screen">
    // <div className="sm:px-10 px-7">
    <div className="text-black-100 dark:text-white min-h-screen py-6">
      <div className="container mx-auto text-center">
        {/* <PageHeading
            title="Overview"
            subtitle="summary of my expertise and experience"
          /> */}

        <div className="text-center grid grid-cols-1 sm:grid-cols-2 gap-2 m-auto sm:mt-8">
          <div className="p-10 mx-auto rounded-full w-full max-h-full sm:w-7/12">
            <Image
              src="/images/profile-pic6.png"
              width={500}
              height={500}
              alt="Picture of the author"
              priority={true}
              className="rounded"
            />
          </div>
          <div className="sm:p-10">
            <h2 className="text-3xl sm:text-5xl text-teal-600 font-semibold">
              {myDetails.name}
            </h2>
            <h3 className="text-xl sm:text-2xl py-2 font-medium">
              {myDetails.profession}
            </h3>
            <p className="text-justify sm:text-center">
              {myDetails.description}
            </p>
          </div>
        </div>

        {/* <PageHeading
            title="Skills"
            subtitle="Proficiencies that drive My Projects"
          />

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
          </div> */}
        <div className="text-center mt-4">
          <h3 className="text-2xl font-semibold mb-4">Let’s Connect!</h3>
          <p className="text-lg mb-6">
            If you&apos;d like to collaborate, discuss a project, or just say
            hello, feel free to reach out.
          </p>
        </div>

        <div className="mt-8">
          {/* Contact Information */}
          <ContactCard />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
