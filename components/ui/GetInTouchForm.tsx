const GetInTouchForm = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center">
          Get In Touch
        </h2>
      </div>

      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 dark:text-gray-200"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 dark:text-gray-200"
            placeholder="john.doe@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 dark:text-gray-200"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 px-4 rounded-md transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default GetInTouchForm;
