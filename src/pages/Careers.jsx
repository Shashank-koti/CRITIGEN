import { motion } from 'framer-motion';
import { Upload, Briefcase, GraduationCap, Building } from 'lucide-react';
import CareerForm from '../components/sections/careerForm';

const Careers = () => {
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
            Careers at Critigen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-100 text-lg md:text-xl"
          >
            Build a rewarding and meaningful career with us.
          </motion.p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-textPrimary text-3xl font-bold mb-6">People-centric at our core</h2>
          <p className="text-textSecondary text-lg leading-relaxed mb-6">
            We strive to bring out the best in every individual. We create an environment that encourages continuous growth — both professionally and personally — through learning, responsibility, and meaningful opportunities.
          </p>
          <p className="text-textSecondary text-lg leading-relaxed mb-6">
            Supportive and transparent, we believe in equal opportunity and invest deeply in the development of every member of our team.
          </p>
          <p className="text-textSecondary text-lg leading-relaxed">
            We are a diverse yet closely connected organization, united by shared values and a common purpose. As we continue to grow, we welcome individuals who are passionate about pharmaceutical sciences and committed to making a positive impact on healthcare.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-card rounded-2xl h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" alt="Team" className="w-full h-full object-cover" />
          </div>
          <div className="bg-section rounded-2xl h-48 overflow-hidden mt-8">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Professional" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </section>


      <CareerForm />
    </div>
  );
};

export default Careers;
