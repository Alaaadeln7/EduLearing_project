import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <div className="bg-base-200 min-h-screen mx-14">
      <ContactHeader />
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
