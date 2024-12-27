import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-4">
      <div>
        {/* Mobile */}
        <div className="flex items-center space-x-4 mb-4">
          <FaPhoneAlt className="text-teal-600 dark:text-teal-400 text-xl" />
          <p className="text-gray-600 dark:text-gray-400">+94772392866</p>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4 my-4">
          <FaEnvelope className="text-teal-600 dark:text-teal-400 text-xl" />
          <p className="text-gray-600 dark:text-gray-400">
            delftkarmilan@gmail.com
          </p>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-4 mt-4">
          <FaMapMarkerAlt className="text-teal-600 dark:text-teal-400 text-xl" />
          <p className="text-gray-600 dark:text-gray-400">
            18, Collingwood Place, Wellawatte
          </p>
        </div>
      </div>

      <div>
        {/* Github */}
        <a
          href="https://github.com/karmilan"
          target="_blank"
          className="flex items-center space-x-4 mb-4"
        >
          <FaGithub className="text-teal-600 dark:text-teal-400 text-xl" />
          <p className="text-gray-600 dark:text-gray-400">@karmilan</p>
        </a>

        {/* LinkenIn */}
        <a
          href="https://www.linkedin.com/in/mahendrarasa-karmilan-0552b119b/"
          target="_blank"
          className="flex items-center space-x-4 mt-4"
        >
          <FaLinkedin className="text-teal-600 dark:text-teal-400 text-xl" />
          <p className="text-gray-600 dark:text-gray-400">
            @mahendrarasa-karmilan
          </p>
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
