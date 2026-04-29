import { motion } from 'framer-motion';
import { FlaskConical, ShieldCheck, Globe2, Activity } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import ContactForm from '../components/sections/contactForm';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const strengths = [
    { icon: <FlaskConical size={32} />, title: "R&D Excellence", desc: "State-of-the-art laboratories focusing on complex formulations." },
    { icon: <ShieldCheck size={32} />, title: "Quality Assurance", desc: "Stringent protocols ensuring every dose meets global standards." },
    { icon: <Globe2 size={32} />, title: "Global Reach", desc: "Supplying life-saving medicines to over 50+ countries." },
    { icon: <Activity size={32} />, title: "Critical Care", desc: "Specializing in high-end anesthetics and injectables." }
  ];

  return (
    <div className="w-full bg-background">
      <HeroSlider />

      {/* Company Intro */}
      <section className="py-[120px] max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h3 className=" font-semibold text-sm tracking-widest uppercase mb-4">Who We Are</h3>
          <h2 className="text-primary text-3xl md:text-4xl font-bold leading-tight mb-6">
            A Global Force in Essential Healthcare
          </h2>
          <p className="text-textSecondary text-md leading-relaxed mb-8">
            Critigen Pharma is committed to delivering high-quality, life-saving medicines
            across the globe. With state-of-the-art manufacturing and a science-first
            approach, we bridge the gap between innovation and accessibility.
          </p>
          <button className="border-b-2 border-secondary text-textPrimary font-semibold pb-1 hover:text-secondary hover:border-accent transition-colors">
            Discover Our Story
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[500px] bg-accent rounded shadow-sm overflow-hidden"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661770294094-06167872e079?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhhcm1hY2V1dGljYWwlMjBpbmR1c3RyeXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Pharma Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
        </motion.div>
      </section>


      {/* Our Strengths */}
      <section className="py-[120px]  mb-8">
        <div className=" mx-auto max-w-[1400px] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h3 className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Core Competencies</h3>
            <h2 className="text-textPrimary text-4xl font-bold">Driven by Science. Built for Impact.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-secondary mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {item.icon}
                </div>
                <h4 className="text-textPrimary text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-textSecondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-[120px] mb-8">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-primary font-semibold text-lg tracking-widest uppercase mb-6">Global Reach</h3>
            <img
              src="https://images.unsplash.com/photo-1584931423298-c576fda54bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGVhbHRoY2FyZSUyMFdvcmxkd2lkZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Global Reach"
              className="w-full h-auto rounded shadow-sm " />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-primary text-4xl font-bold mb-4">Impacting Healthcare Worldwide</h2>
            <p className="text-textSecondary text-lg leading-relaxed mb-4">
              Our expansive network ensures that critical medicines reach the patients who need them most, reliably and efficiently.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-secondary ">50+</div>
                <div className="text-textPrimary font-medium">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary ">200+</div>
                <div className="text-textPrimary font-medium">Product Registrations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary ">4</div>
                <div className="text-textPrimary font-medium">Manufacturing Units</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary ">10M+</div>
                <div className="text-textPrimary font-medium">Lives Touched Yearly</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm />

    </div>
  );
};

export default Home;
