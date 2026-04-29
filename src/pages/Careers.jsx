import { motion } from 'framer-motion';
import { Upload, Briefcase, GraduationCap, Building } from 'lucide-react';

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
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" alt="Team" className="w-full h-full object-cover"/>
          </div>
          <div className="bg-section rounded-2xl h-48 overflow-hidden mt-8">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Professional" className="w-full h-full object-cover"/>
          </div>
        </motion.div>
      </section>

      {/* Apply Now Form */}
      <section className="py-20 bg-section">
        <div className="max-w-[1000px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-background rounded-3xl shadow-lg border border-border p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-textPrimary mb-4">Apply Now</h2>
              <p className="text-textSecondary">
                Fill in your details to explore career opportunities with Critigen Pharma.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textSecondary">Full Name *</label>
                  <input type="text" className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textSecondary">Date of Birth *</label>
                  <input type="date" className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-textPrimary" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textSecondary">Email Address *</label>
                  <input type="email" className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textSecondary">Mobile Number *</label>
                  <input type="tel" className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors" placeholder="+91 9876543210" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textSecondary">Educational Qualification *</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3.5 text-textLight" size={18} />
                    <input type="text" className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors" placeholder="B.Pharm, M.Sc, etc." required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textSecondary">Department / Area of Interest *</label>
                  <select className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors appearance-none" required>
                    <option value="" disabled selected>Select Department</option>
                    <option value="R&D">Research & Development</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                    <option value="Sales & Marketing">Sales & Marketing</option>
                    <option value="Regulatory Affairs">Regulatory Affairs</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 border-t border-border pt-6 mt-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textSecondary">Total Experience (in years) *</label>
                  <input type="number" min="0" step="0.5" className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors" placeholder="e.g. 5" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textSecondary">Current Location</label>
                  <input type="text" className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors" placeholder="City, Country" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textSecondary">Current Company Name</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3.5 text-textLight" size={18} />
                    <input type="text" className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors" placeholder="Company Ltd." />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-textSecondary">Current Salary <span className="text-xs">(Lakhs)</span></label>
                    <input type="text" className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors" placeholder="e.g. 8.5" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-textSecondary">Expected Salary <span className="text-xs">(Lakhs)</span></label>
                    <input type="text" className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors" placeholder="e.g. 12" />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <label className="text-sm font-medium text-textSecondary block mb-2">Upload Resume (PDF/DOC) *</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-card hover:bg-border/50 transition-colors cursor-pointer group">
                  <Upload className="mx-auto h-12 w-12 text-textLight group-hover:text-secondary transition-colors mb-4" />
                  <p className="text-sm text-textSecondary">
                    <span className="font-semibold text-secondary">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-textLight mt-1">PDF, DOC, DOCX up to 5MB</p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-background font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Briefcase size={20} />
                  <span>Submit Application</span>
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Careers;
