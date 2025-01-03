"use client";

import { FC } from "react";

type CustomButtonProps = {
  children: React.ReactNode;
  btnLink: string;
};

const CustomButton: FC<CustomButtonProps> = ({ children, btnLink }) => {
  return (
    <a
      href={btnLink}
      target="_blank"
      className="bg-teal-600 px-2 py-1 sm:px-4 sm:py-2 rounded-md ml-8 text-md sm:text-lg cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      {children}
    </a>
  );
};

export default CustomButton;
