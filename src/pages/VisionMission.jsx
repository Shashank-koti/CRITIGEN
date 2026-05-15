import { motion } from 'framer-motion';
import { Target, HeartPulse, Eye, Rocket, Handshake, Lightbulb, Globe2, ShieldCheck } from 'lucide-react';

const VisionMission = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const values = [
    { icon: <ShieldCheck size={24} />, title: "Quality", desc: "Unwavering commitment to the highest standards in every formulation we develop." },
    { icon: <Lightbulb size={24} />, title: "Innovation", desc: "Continuously pushing boundaries to create better healthcare solutions." },
    { icon: <Handshake size={24} />, title: "Partnerships", desc: "Building lasting relationships with healthcare providers and institutions globally." },
    { icon: <Globe2 size={24} />, title: "Accessibility", desc: "Making essential medicines available to patients who need them most." }
  ];

  return (
    <div className="w-full bg-background">
      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/vision-mission.png" alt="Vision & Mission" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A202C]/90 via-[#1A202C]/75 to-[#1A202C]/50"></div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-[700px]">
            {/* <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4 bg-primary/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-primary/20">Our Purpose</span> */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Vision & <span className="text-primary">Mission</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-[550px]">
              Driven by purpose. Guided by values. Committed to transforming global healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-primary to-[#2d6a77] text-background p-10 md:p-14 rounded-3xl shadow-xl overflow-hidden min-h-[400px] flex flex-col justify-center">
                <div className="absolute -right-12 -top-12 opacity-[0.07]"><Target size={200} /></div>
                <div className="absolute -left-8 -bottom-8 opacity-[0.05]"><Eye size={160} /></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-white/10">
                    <Eye size={28} className="text-white" />
                  </div>
                  <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary-100/70 mb-3">Our Vision</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">A Trusted Global Force in Critical Care</h2>
                  <p className="text-lg md:text-xl leading-relaxed text-white/85">
                    To become a trusted global pharmaceutical company recognized for quality, innovation, and impact in critical care.
                  </p>
                  <div className="mt-8 w-20 h-1 bg-gradient-to-r from-white/60 to-transparent rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-3xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-secondary to-[#1e528a] text-background p-10 md:p-14 rounded-3xl shadow-xl overflow-hidden min-h-[400px] flex flex-col justify-center">
                <div className="absolute -right-12 -top-12 opacity-[0.07]"><HeartPulse size={200} /></div>
                <div className="absolute -left-8 -bottom-8 opacity-[0.05]"><Rocket size={160} /></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-white/10">
                    <Rocket size={28} className="text-white" />
                  </div>
                  <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-blue-100/70 mb-3">Our Mission</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">Reliable Formulations. Essential Access.</h2>
                  <p className="text-lg md:text-xl leading-relaxed text-white/85">
                    To develop reliable formulations, ensure accessibility of essential medicines, and build long-term value through innovation.
                  </p>
                  <div className="mt-8 w-20 h-1 bg-gradient-to-r from-white/60 to-transparent rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-section relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16 max-w-[600px] mx-auto">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">What Drives Us</span>
            <h2 className="text-textPrimary text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-textSecondary leading-relaxed">The principles that guide every decision, every formulation, and every partnership we build.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-background p-7 rounded-2xl border border-border hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(58,124,140,0.08)] transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 mx-auto group-hover:bg-primary group-hover:text-background transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-textPrimary text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-textSecondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-24 md:py-32">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl font-serif text-primary/10 select-none">"</div>
              <p className="text-textPrimary text-2xl md:text-3xl font-bold leading-relaxed mb-8 relative z-10">
                We believe that <span className="text-primary">quality healthcare</span> is not a privilege — it is a fundamental right that every patient deserves, regardless of geography.
              </p>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-textSecondary text-lg leading-relaxed max-w-[700px] mx-auto">
              This conviction drives everything we do — from the formulations we develop to the partnerships we forge and the markets we serve. Our vision and mission are not just statements; they are the compass that guides our journey.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default VisionMission;
