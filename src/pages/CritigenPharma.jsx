import { motion } from 'framer-motion';
import { HeartPulse, Shield, Syringe, Globe2, Award, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import D1 from "../assets/D1.png";
import D2 from "../assets/D2.jpeg";


const CritigenPharma = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const offerings = [
    { icon: <HeartPulse size={28} />, title: "Cardiology", desc: "Advanced cardiovascular formulations delivering precision care for cardiac patients worldwide.", gradient: "from-rose-500/10 via-red-500/5 to-transparent" },
    { icon: <Shield size={28} />, title: "Critical Care Medications", desc: "Reliable, high-performance medicines designed for intensive care units and emergency settings.", gradient: "from-blue-500/10 via-indigo-500/5 to-transparent" },
    { icon: <Syringe size={28} />, title: "Anesthesia", desc: "Safe and consistent anesthetics and analgesics for pain management in surgical environments.", gradient: "from-teal-500/10 via-cyan-500/5 to-transparent" }
  ];

  const directors = [
    { name: "Middey Janani", role: "Promoter & Director", url: D2 },
    { name: "Venkat Ram Jagarlamudi", role: "Promoter & Director", url: D1 }
  ];

  const globalReach = [
    { region: "Europe" }, { region: "Latin America" }, { region: "Asia" }, { region: "Africa" }
  ];

  return (
    <div className="w-full bg-background">
      {/* Hero Banner */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/who-we-are.png" alt="Critigen Pharma Laboratory" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A202C]/90 via-[#1A202C]/70 to-[#1A202C]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/60 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-[700px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Critigen Pharma <span className="text-primary">Private Limited</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-[550px]">
              Patient-focused pharmaceutical innovation for Cardiology, Critical Care, and Pain Management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Who We Are</span>
            <h2 className="text-textPrimary text-3xl md:text-4xl font-bold leading-tight mb-6">Patient-Focused <span className="text-primary">Innovation</span></h2>
            <p className="text-textSecondary leading-relaxed mb-5">We are a patient-focused pharmaceutical company specializing in formulations for Cardiology, Critical Care, and Pain Management. At Critigen Pharma, our priority is to enhance both the quality of treatment and the overall patient experience.</p>
            <p className="text-textSecondary leading-relaxed mb-5">Our products are designed to deliver meaningful outcomes in areas where precision and reliability are essential — from cardiac care to intensive care units and pain management.</p>
            <p className="text-textSecondary leading-relaxed mb-8">Our strength comes from a team of experienced professionals who bring deep industry knowledge and a commitment to excellence. We continuously innovate and refine our processes to ensure that high-quality medicines are accessible to patients and healthcare providers alike.</p>
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Globe2 size={20} /></div>
              <p className="text-textSecondary text-sm leading-relaxed">Based in India, we operate with a vision that extends across both <strong className="text-textPrimary">domestic and global markets</strong>.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="relative">
            <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/who-we-are.png" alt="Critigen Pharma Research Lab" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-background p-5 rounded-xl shadow-lg hidden md:block">
              <Award size={24} className="mb-1" />
              <div className="text-xs font-medium text-background/80">GMP Certified</div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl hidden lg:block"></div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 md:py-32 bg-section relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/what-we-offer.png" alt="Pharmaceutical Manufacturing" className="w-full h-[450px] object-cover" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">What We Offer</span>
              <h2 className="text-textPrimary text-3xl md:text-4xl font-bold leading-tight mb-6">Cardiology · Critical Care · <span className="text-primary">Anesthesia</span></h2>
              <p className="text-textSecondary leading-relaxed mb-5">We offer a comprehensive range of high-quality injectables and oral solid dosage (OSD) formulations, including critical care medicines, anti-infectives, anesthetics, and analgesics.</p>
              <p className="text-textSecondary leading-relaxed mb-8">Our products are developed and manufactured in compliance with stringent quality standards. We are equipped to meet regulatory requirements across multiple international markets.</p>
              <div className="grid grid-cols-2 gap-3">
                {globalReach.map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex items-center gap-2.5 p-3 bg-background rounded-lg border border-border">
                    <Globe2 size={18} className="text-primary" />
                    <span className="text-sm font-medium text-textPrimary">{item.region}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {offerings.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative bg-background p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(58,124,140,0.08)] transition-all duration-500 group overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background transition-all duration-300">{item.icon}</div>
                  <h4 className="text-xl font-bold text-textPrimary mb-3">{item.title}</h4>
                  <p className="text-textSecondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Directors */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1000px] mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Leadership</span>
            <h2 className="text-textPrimary text-3xl md:text-4xl font-bold mb-4">Our Directors</h2>
            <p className="text-textSecondary max-w-[500px] mx-auto leading-relaxed">Guided by experienced leadership committed to innovation, quality, and global healthcare impact.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {directors.map((director, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }} className="group relative bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-[0_12px_40px_rgba(58,124,140,0.1)] transition-all duration-500">
                <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-secondary"></div>
                <div className="p-8 md:p-10 text-center">
                  <div className="relative mx-auto mb-6 w-28 h-28">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-section shadow-lg">
                      <img src={director.url} alt={director.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-accent rounded-full border-2 border-background shadow-sm"></div>
                  </div>
                  <h4 className="text-xl font-bold text-textPrimary mb-2 group-hover:text-primary transition-colors duration-300">{director.name}</h4>
                  <p className="text-secondary font-semibold uppercase text-xs tracking-[0.15em] mb-4">{director.role}</p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
                  <div className="flex items-center justify-center gap-2 text-textLight text-sm">
                    <Users size={14} />
                    <span>Critigen Pharma Pvt. Ltd.</span>
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

export default CritigenPharma;
