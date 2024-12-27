import ContactCard from "@/components/ui/ContactCard";
import GetInTouchForm from "@/components/ui/GetInTouchForm";

const Contact = () => {
  return (
    <div className="sm:px-10 px-7 min-h-screen py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
        Contact Me
      </h1>
      {/* Contact Information */}
      <ContactCard />

      {/* Get in touch */}
      <GetInTouchForm />
    </div>
  );
};

export default Contact;
