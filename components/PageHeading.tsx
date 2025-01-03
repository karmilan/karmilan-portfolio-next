import { FC } from "react";

type PageHeadingProps = {
  title: string;
  subtitle?: string;
};

const PageHeading: FC<PageHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mt-3 sm:mt-2 mb-1">
      <h1 className="text-3xl sm:text-6xl font-bold text-teal-600">{title}</h1>
      {subtitle && (
        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      )}
      <div className="mt-4">
        <div className="w-20 mx-auto border-b-4 " />
      </div>
    </div>
  );
};

export default PageHeading;
