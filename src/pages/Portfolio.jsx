import { motion } from 'framer-motion';
import { Pill, Activity, Syringe, HeartPulse } from 'lucide-react';

const Portfolio = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const categories = [
    {
      title: "Cardiology",
      icon: <HeartPulse className="w-10 h-10 text-secondary" />,
      desc: "Advanced therapeutic solutions designed to support cardiovascular health and manage complex cardiac conditions with precision.",
      items: ["Anti-hypertensives", "Statins", "Beta Blockers", "Anti-arrhythmics"]
    },
    {
      title: "Critical Care",
      icon: <Activity className="w-10 h-10 text-secondary" />,
      desc: "High-performance formulations developed specifically for intensive care units and emergency medical interventions.",
      items: ["Broad-spectrum Antibiotics", "Life-saving Injectables", "Vasopressors", "Fluid Management"]
    },
    {
      title: "Anesthesia & Analgesia",
      icon: <Syringe className="w-10 h-10 text-secondary" />,
      desc: "Safe, consistent, and effective anesthetics and pain management solutions for surgical and post-operative care.",
      items: ["General Anesthetics", "Local Anesthetics", "Opioid Analgesics", "Muscle Relaxants"]
    },
    {
      title: "Oral Solid Dosages",
      icon: <Pill className="w-10 h-10 text-secondary" />,
      desc: "A wide range of reliable and bioavailable tablets and capsules covering various therapeutic segments.",
      items: ["Anti-infectives", "Gastrointestinal", "Neurology", "Endocrinology"]
    }
  ];

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
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-100 text-lg md:text-xl"
          >
            Comprehensive pharmaceutical formulations for global healthcare needs.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 max-w-[1000px] mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-textPrimary text-3xl font-bold mb-6">Delivering Effective and Timely Treatment</h2>
          <p className="text-textSecondary text-lg leading-relaxed mb-4">
            Critigen Pharma offers a comprehensive portfolio of pharmaceutical formulations designed to support hospitals, clinics, and healthcare providers.
          </p>
          <p className="text-textSecondary text-lg leading-relaxed">
            Our product range is developed with a strict focus on quality, safety, and therapeutic efficiency, ensuring that healthcare professionals have the tools they need to improve patient outcomes.
          </p>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 bg-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-card p-4 rounded-xl">
                      {cat.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-textPrimary">{cat.title}</h3>
                  </div>
                  <p className="text-textSecondary mb-8 leading-relaxed">
                    {cat.desc}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-textLight mb-4">Key Focus Areas</h4>
                    <ul className="space-y-2">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-center text-textSecondary font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
