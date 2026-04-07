import { motion } from "motion/react";
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-3xl font-black gradient-text tracking-tighter mb-4">RANA.DAS</p>
            <p className="text-slate-500 font-medium">
              Crafting digital excellence through code and design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
              <a key={i} href="#" className="p-4 rounded-2xl glass text-primary hover:gradient-bg hover:text-white transition-all transform hover:-translate-y-1">
                <Icon size={24} />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-2">
              © {currentYear} Rana Das
            </p>
            <p className="flex items-center justify-center md:justify-end gap-2 text-xs text-slate-600">
              Made with <span className="animate-pulse"><FaHeart color="#00aaff" /></span> in India
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
