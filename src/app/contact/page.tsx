import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ContactPage() {
  return (
    <div>
        <div>
          <Header />
        </div>
        <div>
          <ContactForm />
        </div>
      <Footer />
    </div>
  );
}