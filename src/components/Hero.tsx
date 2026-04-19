import { motion } from "motion/react";
import { HiArrowRight } from "react-icons/hi";
import { FaPhone, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {

  const socialLinks = [
    { icon: FaPhone, link: "tel:+918697059241" },
    { icon: FaEnvelope, link: "mailto:dasrana373@gmail.com" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/rana-das-frontend" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full glass text-xs font-bold uppercase tracking-widest text-primary"
          >
            Available for new projects
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.9]"
          >
            CREATING <br />
            <span className="gradient-text">DIGITAL</span> <br />
            EXPERIENCES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            I'm <span className="text-white font-bold">Rana Das</span>, a Frontend Developer & Designer 
            crafting modern, responsive, and user-focused websites that drive results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#projects"
              className="group px-10 py-5 rounded-full gradient-bg text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:shadow-[0_0_40px_rgba(112,0,255,0.4)] transition-all transform hover:-translate-y-1"
            >
              View Projects <span className="group-hover:translate-x-1 transition-transform"><HiArrowRight size={20} /></span>
            </a>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target={link.includes("linkedin") ? "_blank" : "_self"}
                  rel={link.includes("linkedin") ? "noopener noreferrer" : ""}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-4 rounded-full glass hover:text-primary transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
