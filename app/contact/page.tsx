import PageHeading from "@/components/PageHeading";
import ContactCard from "@/components/ui/ContactCard";

const Contact = () => {
  return (
    <div className="sm:px-10 px-7 min-h-screen py-12">
      <PageHeading
        title="Contact Me"
        // subtitle="Proficiencies that drive My Projects"
      />
      <div className="mt-8">
        {/* Contact Information */}
        <ContactCard />

        {/* Get in touch */}
        {/* <GetInTouchForm /> */}
      </div>
    </div>
  );
};

export default Contact;
