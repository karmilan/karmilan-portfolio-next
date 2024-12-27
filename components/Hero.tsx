"use client";

import { myDetails } from "@/types/data";
import Image from "next/image";
import ProgressBar from "./ui/ProgressBar";

const Hero = () => {
  return (
    <div className="min-h-screen text-center grid grid-cols-1 sm:grid-cols-2 gap-2 m-auto">
      <div className="p-10 mx-auto rounded-full w-full max-h-full sm:w-7/12">
        <Image
          src="/images/avatar.png"
          width={500}
          height={500}
          alt="Picture of the author"
          priority={true}
        />
      </div>
      <div className="sm:p-10">
        <h2 className="text-3xl sm:text-5xl text-teal-600 font-semibold">
          {myDetails.name}
        </h2>
        <h3 className="text-xl sm:text-2xl py-2 font-medium">
          {myDetails.profession}
        </h3>
        <p className="text-justify sm:text-center">{myDetails.description}</p>
      </div>
      <div className="sm:p-10">
        <ProgressBar skill="React" progress="80%" />
        <ProgressBar skill="Next.js" progress="60%" />
        <ProgressBar skill="ReactNative" progress="70%" />
        <ProgressBar skill="Node.js" progress="50%" />
        <ProgressBar skill="Express" progress="50%" />
      </div>
      <div className="sm:p-10">
        <ProgressBar skill="MongoDB" progress="75%" />
        <ProgressBar skill="AWS" progress="50%" />
        <ProgressBar skill="Figma" progress="80%" />
        <ProgressBar skill=" Adobe XD" progress="75%" />
      </div>
    </div>
  );
};

export default Hero;
