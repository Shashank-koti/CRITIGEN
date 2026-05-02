import { motion } from 'framer-motion';
import { Users, Target, Shield, HeartPulse } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="w-full bg-background pt-24 pb-12">
      {/* Page Header */}
      {/* <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-background mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-100 text-lg md:text-xl"
          >
            Enhancing treatment quality and patient experience globally.
          </motion.p>
        </div>
      </section> */}

      {/* Who We Are */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h3 className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Who We Are</h3>
          <h2 className="text-textPrimary text-3xl md:text-4xl font-bold leading-tight mb-6">
            Patient-Focused Innovation
          </h2>
          <p className="text-textSecondary text-md leading-relaxed mb-4">
            We are a patient-focused pharmaceutical company specializing in formulations for Cardiology, Critical Care, and Pain Management. At Critigen Pharma, our priority is to enhance both the quality of treatment and the overall patient experience.
          </p>
          <p className="text-textSecondary text-md leading-relaxed mb-4">
            Our products are designed to deliver meaningful outcomes in areas where precision and reliability are essential — from cardiac care to intensive care units and pain management.
          </p>
          <p className="text-textSecondary text-md leading-relaxed mb-8">
            Based in India, we operate with a vision that extends across both domestic and global markets, continuously innovating to ensure high-quality medicines are accessible to all.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[300px] md:h-[400px] bg-card rounded-2xl shadow-lg overflow-hidden relative"
        >
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
            alt="Medical Research"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
        </motion.div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16 max-w-[800px] mx-auto"
          >
            <h3 className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">What We Offer</h3>
            <h2 className="text-textPrimary text-3xl font-bold mb-6">Cardiology • Critical Care • Anesthesia</h2>
            <p className="text-textSecondary leading-relaxed">
              We offer a comprehensive range of high-quality injectables and oral solid dosage (OSD) formulations, including critical care medicines, anti-infectives, anesthetics, and analgesics. Our portfolio meets the demands of hospitals where consistency and performance are critical.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Offerings Cards */}
            <motion.div variants={fadeInUp} className="bg-background p-8 rounded-xl shadow-sm border border-border text-center hover:-translate-y-2 transition-transform duration-300">
              <HeartPulse className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h4 className="text-xl font-bold text-textPrimary mb-3">Cardiology</h4>
              <p className="text-textSecondary text-sm">Advanced formulations ensuring precise cardiovascular care.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-background p-8 rounded-xl shadow-sm border border-border text-center hover:-translate-y-2 transition-transform duration-300">
              <Shield className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h4 className="text-xl font-bold text-textPrimary mb-3">Critical Care</h4>
              <p className="text-textSecondary text-sm">Reliable treatments for intensive care and life-saving interventions.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-background p-8 rounded-xl shadow-sm border border-border text-center hover:-translate-y-2 transition-transform duration-300">
              <Target className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h4 className="text-xl font-bold text-textPrimary mb-3">Anesthesia</h4>
              <p className="text-textSecondary text-sm">Safe and consistent anesthetics and analgesics for pain management.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-primary text-background p-10 rounded-2xl shadow-lg relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 opacity-10">
            <Target size={150} />
          </div>
          <h3 className="text-2xl font-bold mb-6 relative z-10">Our Vision</h3>
          <p className="text-lg leading-relaxed relative z-10 text-primary-100">
            To become a trusted global pharmaceutical company recognized for quality, innovation, and impact in critical care.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
          }}
          className="bg-secondary text-background p-10 rounded-2xl shadow-lg relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 opacity-10">
            <HeartPulse size={150} />
          </div>
          <h3 className="text-2xl font-bold mb-6 relative z-10">Our Mission</h3>
          <p className="text-lg leading-relaxed relative z-10 text-blue-100">
            To develop reliable formulations, ensure accessibility of essential medicines, and build long-term value through innovation and partnerships.
          </p>
        </motion.div>
      </section>

      {/* Directors */}
      <section className="py-20 bg-section">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h3 className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Leadership</h3>
            <h2 className="text-textPrimary text-3xl font-bold">Our Directors</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background p-8 rounded-2xl shadow-sm border border-border"
            >
              <div className="w-24 h-24 bg-card rounded-full mx-auto mb-6 flex items-center justify-center text-secondary">
                <Users size={40} />
              </div>
              <h4 className="text-xl font-bold text-textPrimary mb-2">Shashank</h4>
              <p className="text-secondary font-medium uppercase text-sm tracking-wider">Promoter & Director</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-8 rounded-2xl shadow-sm border border-border"
            >
              <div className="w-24 h-24 bg-card rounded-full mx-auto mb-6 flex items-center justify-center text-secondary">
                <Users size={40} />
              </div>
              <h4 className="text-xl font-bold text-textPrimary mb-2">Praveen</h4>
              <p className="text-secondary font-medium uppercase text-sm tracking-wider">Promoter & Director</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our DNA */}
      <section className="py-24 max-w-[1000px] mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Our Core Values</h3>
          <h2 className="text-textPrimary text-3xl font-bold mb-8">This is Our DNA</h2>
          <p className="text-textSecondary text-lg leading-relaxed mb-6">
            At Critigen Pharma, we are driven by a shared passion for improving healthcare. We work as one cohesive team, combining our knowledge, expertise, and commitment to deliver the best possible outcomes. True strength comes from collaboration and trust.
          </p>
          <p className="text-textSecondary text-lg leading-relaxed">
            Integrity is at the core of our operations, guiding every decision and action we take. We take complete ownership of our responsibilities and remain accountable for the results we deliver. While we continuously explore new ideas and better ways of working, we never compromise on quality and consistency.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
