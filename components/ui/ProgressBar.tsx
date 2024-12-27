type ProgressProps = {
  progress: string;
  skill: string;
};

const ProgressBar: React.FC<ProgressProps> = ({ progress, skill }) => {
  return (
    <div className="mt-3 sm:mt-5">
      <div className="mb-1 text-left font-medium dark:text-white">{skill}</div>

      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div
          className="bg-teal-600 h-1.5 rounded-full"
          style={{ width: progress }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
