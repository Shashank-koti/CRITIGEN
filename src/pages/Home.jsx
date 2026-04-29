import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FlaskConical, ShieldCheck, Globe2, Activity, HeartPulse, Syringe, Pill, ArrowRight, CheckCircle2 } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import ContactForm from '../components/sections/contactForm';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const strengths = [
    { icon: <FlaskConical size={28} />, title: "R&D Excellence", desc: "State-of-the-art laboratories focusing on complex and novel formulations." },
    { icon: <ShieldCheck size={28} />, title: "Quality Assurance", desc: "Stringent protocols ensuring every dose meets global pharmacopeial standards." },
    { icon: <Globe2 size={28} />, title: "Global Reach", desc: "Supplying life-saving medicines to over 50+ countries reliably." },
    { icon: <Activity size={28} />, title: "Critical Care", desc: "Specializing in high-end anesthetics, analgesics, and injectables." }
  ];

  const therapeuticAreas = [
    { icon: <HeartPulse size={24} />, title: "Cardiology", desc: "Advanced cardiovascular formulations for precise cardiac management.", color: "from-red-500/10 to-rose-500/5" },
    { icon: <Activity size={24} />, title: "Critical Care", desc: "High-performance medicines for intensive care units and emergency settings.", color: "from-blue-500/10 to-indigo-500/5" },
    { icon: <Syringe size={24} />, title: "Anesthesia", desc: "Safe, consistent anesthetics and analgesics for surgical environments.", color: "from-teal-500/10 to-cyan-500/5" },
    { icon: <Pill size={24} />, title: "Anti-Infectives", desc: "Broad-spectrum antibiotics and anti-microbials for hospital-grade treatment.", color: "from-amber-500/10 to-yellow-500/5" },
  ];

  const stats = [
    { value: "50+", label: "Countries Served" },
    { value: "200+", label: "Product Registrations" },
    { value: "4", label: "Manufacturing Units" },
    { value: "10M+", label: "Lives Touched Yearly" },
  ];

  return (
    <div className="w-full bg-background">
      <HeroSlider />

      {/* ── Company Intro ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Who We Are</span>
            <h2 className="text-textPrimary text-3xl md:text-4xl font-bold leading-tight mb-6">
              A Global Force in <span className="text-primary">Essential Healthcare</span>
            </h2>
            <p className="text-textSecondary leading-relaxed mb-5">
              Critigen Pharma is committed to delivering high-quality, life-saving medicines
              across the globe. With state-of-the-art manufacturing and a science-first
              approach, we bridge the gap between innovation and accessibility.
            </p>
            <ul className="space-y-3 mb-8">
              {["Patient-focused pharmaceutical company", "Specializing in Cardiology, Critical Care & Pain Management", "Operating across domestic and global markets"].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-textSecondary">
                  <CheckCircle2 size={16} className="text-primary mr-2.5 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center space-x-2 text-primary font-semibold text-sm hover:text-secondary transition-colors group">
              <span>Discover Our Story</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1661770294094-06167872e079?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhhcm1hY2V1dGljYWwlMjBpbmR1c3RyeXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Pharma Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-background p-5 rounded-xl shadow-lg hidden md:block">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-xs text-background/80 font-medium">Years of Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Banner ──
      <section className="bg-[#1A202C] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-background/70 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Core Competencies ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16 max-w-[600px] mx-auto"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Core Competencies</span>
            <h2 className="text-primary text-2xl md:text-3xl font-bold mb-4">Why Choose Critigen Pharma</h2>
            <p className="text-textSecondary leading-relaxed">Backed by science, driven by purpose — here's what sets us apart.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-background p-7 rounded-2xl border border-border hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(58,124,140,0.08)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-textPrimary text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-textSecondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Therapeutic Areas ── */}
      <section className="py-24 md:py-32 bg-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">What We Offer</span>
              <h2 className="text-textPrimary text-3xl md:text-4xl font-bold leading-tight mb-6">
                Therapeutic Areas <br className="hidden md:block" />
                <span className="text-primary">We Specialize In</span>
              </h2>
              <p className="text-textSecondary leading-relaxed mb-8">
                We offer a comprehensive range of high-quality injectables and oral solid dosage formulations, including critical care medicines, anti-infectives, anesthetics, and analgesics — designed for hospitals where consistency and performance are critical.
              </p>
              <Link to="/portfolio" className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-background px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
                <span>Explore Full Portfolio</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {therapeuticAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-gradient-to-br ${area.color} bg-background border border-border p-6 rounded-xl hover:shadow-md transition-all duration-300`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {area.icon}
                  </div>
                  <h4 className="text-textPrimary font-bold mb-1.5">{area.title}</h4>
                  <p className="text-textSecondary text-xs leading-relaxed">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Presence ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1584931423298-c576fda54bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGVhbHRoY2FyZSUyMFdvcmxkd2lkZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Global Reach"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Global Presence</span>
            <h2 className="text-textPrimary text-3xl md:text-4xl font-bold mb-4">
              Impacting Healthcare <span className="text-primary">Worldwide</span>
            </h2>
            <p className="text-textSecondary leading-relaxed mb-8">
              Our products are developed and manufactured in compliance with stringent quality standards. We serve regions including Europe, Latin America, Asia, and Africa with reliability and consistency.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-section p-4 rounded-xl border border-border"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-textSecondary text-xs font-medium mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ──
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">Ready to Partner With Us?</h2>
            <p className="text-background/80 mb-8 leading-relaxed">
              We are constantly exploring new partnerships for contract manufacturing, out-licensing, and distribution. Let's build something meaningful together.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-background text-primary px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section> */}

      <ContactForm />

    </div>
  );
};

export default Home;
