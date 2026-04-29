import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, ShieldCheck, Globe2, Clock } from 'lucide-react';

const ContactForm = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Subtle background accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[30%] -right-[15%] w-[60%] h-[60%] rounded-full bg-primary/[0.03] blur-3xl"></div>
                <div className="absolute -bottom-[30%] -left-[15%] w-[60%] h-[60%] rounded-full bg-secondary/[0.03] blur-3xl"></div>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* ── LEFT SIDE: Rich Text Content ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeInUp}
                        className="lg:sticky lg:top-32"
                    >
                        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Contact Us</span>
                        <h2 className="text-textPrimary text-3xl md:text-4xl font-bold leading-tight mb-6">
                            Let's Build Something <br className="hidden md:block" />
                            <span className="text-primary">Meaningful Together</span>
                        </h2>
                        <p className="text-textSecondary text-base leading-relaxed mb-8">
                            Whether you are exploring partnership opportunities, contract manufacturing, product licensing, or simply have a question about our capabilities — we would love to hear from you. Our business development team is ready to discuss how Critigen Pharma can support your goals.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-5 mb-10">
                            <div className="flex items-start space-x-4 group">
                                <div className="bg-primary/10 p-2.5 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <MapPin className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-textPrimary mb-0.5">Headquarters</h4>
                                    <p className="text-textSecondary text-sm leading-relaxed">
                                        123 Pharma Avenue, Innovation Park, Mumbai, MH 400001, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="bg-primary/10 p-2.5 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <Phone className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-textPrimary mb-0.5">Phone</h4>
                                    <p className="text-textSecondary text-sm">+91 (800) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="bg-primary/10 p-2.5 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <Mail className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-textPrimary mb-0.5">Email</h4>
                                    <p className="text-textSecondary text-sm">contact@critigenpharma.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="border-t border-border pt-8">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <p className="text-xs font-medium text-textSecondary">GMP Certified</p>
                                </div>
                                <div className="text-center">
                                    <Globe2 className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <p className="text-xs font-medium text-textSecondary">50+ Countries</p>
                                </div>
                                <div className="text-center">
                                    <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <p className="text-xs font-medium text-textSecondary">24hr Response</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── RIGHT SIDE: Premium Form Card ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <div className="bg-background rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-border p-8 md:p-10">
                            <h3 className="text-xl font-bold text-textPrimary mb-1">Send us a Message</h3>
                            <p className="text-sm text-textLight mb-8">We'll get back to you within 24 hours.</p>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                {/* Name */}
                                <div>
                                    <label htmlFor="contact-name" className="block text-xs font-semibold text-textSecondary uppercase tracking-wider mb-2">Full Name <span className="text-red-400">*</span></label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-section border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-textLight"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Email */}
                                    <div>
                                        <label htmlFor="contact-email" className="block text-xs font-semibold text-textSecondary uppercase tracking-wider mb-2">Email <span className="text-red-400">*</span></label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 bg-section border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-textLight"
                                        />
                                    </div>

                                    {/* Mobile */}
                                    <div>
                                        <label htmlFor="contact-mobile" className="block text-xs font-semibold text-textSecondary uppercase tracking-wider mb-2">Mobile <span className="text-red-400">*</span></label>
                                        <input
                                            type="tel"
                                            id="contact-mobile"
                                            placeholder="+91 98765 43210"
                                            className="w-full px-4 py-3 bg-section border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-textLight"
                                        />
                                    </div>
                                </div>

                                {/* Country */}
                                <div>
                                    <label htmlFor="contact-country" className="block text-xs font-semibold text-textSecondary uppercase tracking-wider mb-2">Country</label>
                                    <select
                                        id="contact-country"
                                        defaultValue=""
                                        className="w-full px-4 py-3 bg-section border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none text-textSecondary"
                                    >
                                        <option value="" disabled>Select your country</option>
                                        <option value="in">India</option>
                                        <option value="us">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="de">Germany</option>
                                        <option value="au">Australia</option>
                                        <option value="ca">Canada</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="contact-message" className="block text-xs font-semibold text-textSecondary uppercase tracking-wider mb-2">Message <span className="text-red-400">*</span></label>
                                    <textarea
                                        id="contact-message"
                                        rows="4"
                                        placeholder="Tell us about your requirements..."
                                        className="w-full px-4 py-3 bg-section border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none placeholder:text-textLight"
                                    ></textarea>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3.5 bg-primary hover:bg-primary/90 text-background font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                                >
                                    <span>Send Message</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-center text-xs text-textLight pt-1">
                                    By submitting, you agree to our Privacy Policy.
                                </p>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
