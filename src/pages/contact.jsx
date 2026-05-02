import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from "../components/sections/contactForm";

const contact = () => {
  return (
    <div className="w-full bg-background pt-24 pb-12">
      <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-background mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-100 text-lg md:text-xl"
          >
            Reach out to us for inquiries, partnerships, or more information.
          </motion.p>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}

export default contact
