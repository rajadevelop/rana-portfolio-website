import React, { useState } from "react";
import { motion } from "motion/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    { icon: <FaEnvelope />, label: "Email", value: "dasrana373@gmail.com", href: "mailto:dasrana373@gmail.com" },
    { icon: <FaPhone />, label: "Phone", value: "+91 8697059241", href: "tel:+918697059241" },
  ];

  return (
    <section id="contact" className="py-16 relative">
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
            For hiring opportunities or any inquiries, feel free to contact me directly.
          </p>
        </motion.div>

          {/* Contact Info Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, i) => (
              <div className="">
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
              </div>
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
      </div>
    </section>
  );
}
