import { motion } from 'framer-motion';
import { Upload, Briefcase, GraduationCap, Building } from 'lucide-react';
import { useState } from "react";

const Careers = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // ✅ STATE
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        email: "",
        phone: "",
        education: "",
        department: "",
        experience: "",
        location: "",
        company: "",
        currentSalary: "",
        expectedSalary: "",
    });

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    // ✅ HANDLE INPUT
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ SUBMIT LOGIC
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) return alert("Please upload resume");
        if (!formData.email.includes("@")) return alert("Invalid email");
        if (formData.phone.length < 10) return alert("Invalid phone number");

        if (file.size > 5 * 1024 * 1024) {
            return alert("File must be less than 5MB");
        }

        setLoading(true);

        try {
            const cloudData = new FormData();
            cloudData.append("file", file);
            cloudData.append("upload_preset", "resume_upload"); // your preset

            const cloudRes = await fetch(
                "https://api.cloudinary.com/v1_1/dsv556z7n/auto/upload",
                {
                    method: "POST",
                    body: cloudData,
                }
            );

            const cloudJson = await cloudRes.json();
            const resumeUrl = cloudJson.secure_url;

            console.log("RESUME URL = ", resumeUrl);

            // 📊 Send to Google Sheets
            const sheetPayload = new FormData();
            Object.entries({ ...formData, resumeUrl, secret: "critigen_secure_2026" }).forEach(
                ([key, value]) => sheetPayload.append(key, value)
            );

            await fetch("https://script.google.com/macros/s/AKfycbxR9uGAJyfUSXACsWMkcdT4v0jGhLOedSDqrumHPuviNJ_-379m8k35MKFxNoJei0HUGw/exec", {
                method: "POST",
                mode: "no-cors",
                body: sheetPayload,
            });

            alert("Application submitted successfully!");

            // reset
            setFormData({
                name: "",
                dob: "",
                email: "",
                phone: "",
                education: "",
                department: "",
                experience: "",
                location: "",
                company: "",
                currentSalary: "",
                expectedSalary: "",
            });

            setFile(null);

        } catch (err) {
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full bg-background pt-24 pb-12">

            {/* Apply Now Form */}
            <section className="py-20 bg-section">
                <div className="max-w-[1100px] mx-auto px-6">
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

                        <form className="space-y-6" onSubmit={handleSubmit}>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-textSecondary">Full Name *</label>
                                    <input name="name" value={formData.name} onChange={handleChange}
                                        type="text" className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-textSecondary">Date of Birth *</label>
                                    <input name="dob" value={formData.dob} onChange={handleChange}
                                        type="date" className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-textPrimary" required />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-textSecondary">Email Address *</label>
                                    <input name="email" value={formData.email} onChange={handleChange}
                                        type="email" className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-textSecondary">Mobile Number *</label>
                                    <input name="phone" value={formData.phone} onChange={handleChange}
                                        type="tel" className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors" required />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-textSecondary">Educational Qualification *</label>
                                    <div className="relative">
                                        <GraduationCap className="absolute left-3 top-3.5 text-textLight" size={18} />
                                        <input name="education" value={formData.education} onChange={handleChange}
                                            type="text" className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-textSecondary">Department / Area of Interest *</label>
                                    <select name="department" value={formData.department} onChange={handleChange}
                                        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors appearance-none" required>
                                        <option value="">Select Department</option>
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
                                    <label className="text-sm font-medium text-textSecondary">Total Experience *</label>
                                    <input name="experience" value={formData.experience} onChange={handleChange}
                                        type="number" min="0" step="0.5"
                                        className="w-full px-4 py-3 bg-card border border-border rounded-lg" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-textSecondary">Current Location</label>
                                    <input name="location" value={formData.location} onChange={handleChange}
                                        type="text" className="w-full px-4 py-3 bg-card border border-border rounded-lg" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-textSecondary">Current Company Name</label>
                                    <div className="relative">
                                        <Building className="absolute left-3 top-3.5 text-textLight" size={18} />
                                        <input name="company" value={formData.company} onChange={handleChange}
                                            type="text" className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-textSecondary">Current Salary <span className="text-xs">(Lakhs)</span></label>
                                        <input name="currentSalary" value={formData.currentSalary} onChange={handleChange} placeholder="Current Salary" className="w-full px-4 py-3 bg-card border border-border rounded-lg" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-textSecondary">Expected Salary <span className="text-xs">(Lakhs)</span></label>
                                        <input name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} placeholder="Expected Salary" className="w-full px-4 py-3 bg-card border border-border rounded-lg" />
                                    </div>
                                </div>
                            </div>

                            {/* FILE */}
                            <div className="pt-4">
                                <label className="text-sm font-medium text-textSecondary block mb-2">Upload Resume *</label>

                                <input
                                    id="resumeUpload"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />

                                <label htmlFor="resumeUpload">
                                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-card hover:bg-border/50 cursor-pointer">
                                        <Upload className="mx-auto h-12 w-12 mb-4" />
                                        Click to upload
                                    </div>
                                </label>
                            </div>

                            <div className="pt-6">
                                <button type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-secondary to-accent text-background font-semibold rounded-lg flex items-center justify-center space-x-2">
                                    <Briefcase size={20} />
                                    <span>{loading ? "Submitting..." : "Submit Application"}</span>
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