import { motion } from 'framer-motion';
import ContactForm from '../components/sections/contactForm';

const Placeholder = ({ title }) => {
  if (title === "Contact Us") {
    return (
      <div className="pt-24 pb-12">
        <div className="text-center mb-8 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-textPrimary mb-4"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-textSecondary max-w-2xl text-lg mx-auto"
          >
            We'd love to hear from you. Reach out to us using the details below.
          </motion.p>
        </div>
        <ContactForm />
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center bg-background text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-textPrimary mb-6"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-textSecondary max-w-2xl text-lg"
      >
        This page is currently under construction. Please check back later.
      </motion.p>
    </div>
  );
};

export default Placeholder;
