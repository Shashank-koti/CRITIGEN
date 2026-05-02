import { motion } from 'framer-motion';
import { Factory, Award, Globe2, Layers } from 'lucide-react';

const Infrastructure = () => {
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
            Infrastructure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-100 text-lg md:text-xl"
          >
            Enabling high-quality manufacturing that supports better healthcare outcomes.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-textPrimary text-3xl md:text-4xl font-bold leading-tight mb-6">
              Modern Manufacturing for Global Demands
            </h2>
            <p className="text-textSecondary text-lg leading-relaxed mb-6">
              At Critigen Pharma, we have invested heavily in building modern manufacturing infrastructure designed specifically to meet and exceed evolving global pharmaceutical standards.
            </p>
            <p className="text-textSecondary text-lg leading-relaxed">
              Our facilities are developed with a sharp focus on operational efficiency, unyielding compliance, and long-term scalability, ensuring the consistent and safe production of high-quality formulations across critical care and specialty segments.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[300px] md:h-[400px] rounded-2xl shadow-lg overflow-hidden relative"
          >
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SW5mcmFzdHJ1Y3R1cmUlMjBwaGFybWFjdXRpY2FsfGVufDB8fDB8fHww"
              alt="Pharma Manufacturing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-secondary/10"></div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-2xl shadow-sm border border-border"
          >
            <Globe2 className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-xl font-bold text-textPrimary mb-3">Global Alignment</h3>
            <p className="text-textSecondary leading-relaxed">
              Our manufacturing capabilities are perfectly aligned with international regulatory expectations and designed to seamlessly meet the strict requirements of major global markets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card p-8 rounded-2xl shadow-sm border border-border"
          >
            <Award className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-xl font-bold text-textPrimary mb-3">Quality Systems</h3>
            <p className="text-textSecondary leading-relaxed">
              With a strong, uncompromising emphasis on automated quality systems and tight process control, we guarantee every batch meets predefined specifications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card p-8 rounded-2xl shadow-sm border border-border"
          >
            <Layers className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-xl font-bold text-textPrimary mb-3">Continuous Improvement</h3>
            <p className="text-textSecondary leading-relaxed">
              We are well-positioned to deliver reliable pharmaceutical products through constant technological upgrades, facility expansions, and workflow optimizations.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Infrastructure;
