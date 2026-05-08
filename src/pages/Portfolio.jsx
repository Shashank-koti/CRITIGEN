import { motion } from 'framer-motion';
import { Pill, Activity, Syringe, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react';
import DisplayData from '../components/sections/displayData';

const Portfolio = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const categories = [
    {
      title: "Cardiology",
      icon: <HeartPulse className="w-7 h-7" />,
      image: "/cardiology.png",
      desc: "Advanced therapeutic solutions designed to support cardiovascular health and manage complex cardiac conditions with precision.",
      items: ["Anti-hypertensives", "Statins", "Beta Blockers", "Anti-arrhythmics"],
      accent: "from-rose-500 to-red-600"
    },
    {
      title: "Critical Care",
      icon: <Activity className="w-7 h-7" />,
      image: "/critical-care.png",
      desc: "High-performance formulations developed specifically for intensive care units and emergency medical interventions.",
      items: ["Broad-spectrum Antibiotics", "Life-saving Injectables", "Vasopressors", "Fluid Management"],
      accent: "from-blue-500 to-indigo-600"
    },
    {
      title: "Anesthesia & Analgesia",
      icon: <Syringe className="w-7 h-7" />,
      image: "/anesthesia.png",
      desc: "Safe, consistent, and effective anesthetics and pain management solutions for surgical and post-operative care.",
      items: ["General Anesthetics", "Local Anesthetics", "Opioid Analgesics", "Muscle Relaxants"],
      accent: "from-teal-500 to-cyan-600"
    },
    {
      title: "Oral Solid Dosages",
      icon: <Pill className="w-7 h-7" />,
      image: "/oral-dosage.png",
      desc: "A wide range of reliable and bioavailable tablets and capsules covering various therapeutic segments.",
      items: ["Anti-infectives", "Gastrointestinal", "Neurology", "Endocrinology"],
      accent: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="w-full bg-background">

      {/* ── Premium Hero Banner ── */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/portfolio-hero.png"
            alt="Pharmaceutical Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A202C]/90 via-[#1A202C]/70 to-[#1A202C]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/50 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[650px]"
          >
            {/* <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-5 bg-primary/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-primary/20">
              Our Portfolio
            </span> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Comprehensive <span className="text-primary">Pharmaceutical</span> Formulations
            </h1>
            <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-[500px]">
              Comprehensive pharmaceutical formulations for global healthcare needs.
            </p>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* ── Intro Section ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">What We Deliver</span>
            <h2 className="text-textPrimary text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Delivering Effective and <span className="text-primary">Timely Treatment</span>
            </h2>
            <p className="text-textSecondary text-lg leading-relaxed mb-4">
              Critigen Pharma offers a comprehensive portfolio of pharmaceutical formulations designed to support hospitals, clinics, and healthcare providers.
            </p>
            <p className="text-textSecondary text-lg leading-relaxed">
              Our product range is developed with a strict focus on quality, safety, and therapeutic efficiency, ensuring that healthcare professionals have the tools they need to improve patient outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Portfolio Grid ── */}
      <section className="py-16 md:py-24 bg-section relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/[0.03] rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Therapeutic Areas</span>
            <h2 className="text-textPrimary text-3xl md:text-4xl font-bold">Our Specializations</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 md:gap-7"
          >
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-[0_16px_48px_rgba(58,124,140,0.1)] transition-all duration-500"
              >
                {/* Card Image */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/70 via-[#1A202C]/20 to-transparent"></div>

                  {/* Floating icon badge */}
                  <div className={`absolute bottom-4 left-6 flex items-center gap-3`}>
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.accent} flex items-center justify-center text-white shadow-lg`}>
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white drop-shadow-md">{cat.title}</h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7">
                  <p className="text-textSecondary leading-relaxed mb-6 text-[15px]">
                    {cat.desc}
                  </p>

                  <div>
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-textLight mb-3">Key Focus Areas</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {cat.items.map((item, i) => (
                        <div key={i} className="flex items-center text-sm text-textSecondary">
                          <CheckCircle2 size={14} className="text-primary mr-2 shrink-0" />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Product Data ── */}
      <DisplayData />

      {/* ── Stats Bar ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "4", label: "Therapeutic Areas" },
              { value: "50+", label: "Product Formulations" },
              { value: "15+", label: "Dosage Forms" },
              { value: "40+", label: "Countries Served" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl bg-section border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-textSecondary text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
