import React, { useState } from "react";
import { motion } from "motion/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: "Email", value: "dasrana373@gmail.com", href: "mailto:dasrana373@gmail.com" },
    { icon: <FaPhone />, label: "Phone", value: "+91 8697059241", href: "tel:+918697059241" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Hooghly, Howrah", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a question or want to work together? Drop me a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info Bento */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="block glass-card p-8 rounded-[2rem] group"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-2xl bg-white/5 text-primary group-hover:gradient-bg group-hover:text-white transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{info.label}</p>
                    <p className="text-lg font-bold">{info.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-[2rem] flex justify-around"
            >
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="p-4 rounded-2xl bg-white/5 text-primary hover:gradient-bg hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon size={24} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Contact Form Bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-10 md:p-12 rounded-[2.5rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-primary/50 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-primary/50 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-primary/50 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 rounded-2xl gradient-bg text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(112,0,255,0.4)] transition-all transform hover:-translate-y-1"
              >
                Send Message <FaPaperPlane size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
