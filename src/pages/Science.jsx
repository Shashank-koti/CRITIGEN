import { motion } from 'framer-motion';
import { FlaskConical, Microscope, FileCheck } from 'lucide-react';

const Science = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-background pt-24 pb-12">
      {/* Page Header */}
      <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-background mb-4"
          >
            Our Science
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-100 text-lg md:text-xl"
          >
            Driven by research, innovation, and unwavering compliance.
          </motion.p>
        </div>
      </section>

      {/* Science-Driven Approach */}
      <section className="py-24 max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-card w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-secondary">
            <FlaskConical size={32} />
          </div>
          <h3 className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Foundation</h3>
          <h2 className="text-textPrimary text-3xl md:text-4xl font-bold leading-tight mb-6">
            A Science-Driven Approach
          </h2>
          <p className="text-textSecondary text-lg leading-relaxed mb-6">
            At Critigen Pharma, science forms the absolute foundation of our operations. Our processes are guided by rigorous research, constant innovation, and a deep understanding of complex pharmaceutical development.
          </p>
          <p className="text-textSecondary text-lg leading-relaxed">
            We focus intensely on developing formulations that are not only highly effective but also strictly aligned with global quality and compliance standards, ensuring every product we release is one we can be proud of.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[300px] md:h-[500px] bg-section rounded-2xl shadow-sm overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800"
            alt="Science Approach"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Research & Development */}
      <section className="py-24 bg-section">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[300px] md:h-[500px] bg-background rounded-2xl shadow-sm overflow-hidden order-2 md:order-1"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1676325102413-f60b77fc1566?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJlc2VhcmNoJTIwJTI2JTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt="Research & Development"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-1 md:order-2"
          >
            <div className="bg-background w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-secondary shadow-sm">
              <Microscope size={32} />
            </div>
            <h3 className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Innovation</h3>
            <h2 className="text-textPrimary text-2xl md:text-3xl font-bold leading-tight mb-6">
              Research & Development
            </h2>
            <p className="text-textSecondary text-lg leading-relaxed mb-6">
              Our dedicated research and development efforts are focused on creating safe, highly stable, and remarkably effective pharmaceutical products that directly address evolving global healthcare demands.
            </p>
            <p className="text-textSecondary text-lg leading-relaxed">
              We continually invest in improving existing formulations, optimizing manufacturing processes, and, accessible, and competitive in the fast-paced global market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regulatory Focus */}
      <section className="py-24 max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-[800px] mx-auto"
        >
          <div className="bg-card w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-secondary">
            <FileCheck size={32} />
          </div>
          <h3 className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Compliance</h3>
          <h2 className="text-textPrimary text-3xl font-bold mb-6">Strict Regulatory Focus</h2>
          <p className="text-textSecondary text-lg leading-relaxed mb-6">
            We follow the strictest regulatory guidelines and ensure that our products meet the exacting requirements of various international markets without exception.
          </p>
          <p className="text-textSecondary text-lg leading-relaxed">
            Our specialized team works diligently to maintain flawless compliance, precise documentation, and the highest quality standards across all stages of development and commercial production.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default Science;
