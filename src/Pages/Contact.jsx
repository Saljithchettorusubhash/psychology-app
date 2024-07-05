import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactSection from '../Components/ContactSection';
import ContactForm from '../Components/ContactForm';
import Accordion from '../Components/Accordian';
import Faq from '../Components/Faq';

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactSection />
      <ContactForm />
      <Faq/>
      <Footer />
    </div>
  );
};

export default Contact;
