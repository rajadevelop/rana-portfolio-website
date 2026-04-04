import { motion } from "motion/react";
import { FaHtml5, FaCss3Alt, FaJs, FaSass, FaReact, FaWordpress, FaSearch, FaPaintBrush } from "react-icons/fa";
import { SiTailwindcss, SiChakraui, SiNextdotjs, SiRedux, SiElementor } from "react-icons/si";
import { HiOutlineDeviceMobile } from "react-icons/hi";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 color="#f06529" /> },
      { name: "CSS", icon: <FaCss3Alt color="#2965f1" /> },
      { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
      { name: "Sass", icon: <FaSass color="#cc6699" /> },
      { name: "Tailwind", icon: <SiTailwindcss color="#06b6d4" /> },
      { name: "Chakra UI", icon: <SiChakraui color="#319795" /> },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", icon: <FaReact color="#61dafb" /> },
      { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
      { name: "Redux", icon: <SiRedux color="#764abc" /> },
    ],
  },
  {
    title: "CMS & Tools",
    skills: [
      { name: "WordPress", icon: <FaWordpress color="#21759b" /> },
      { name: "Elementor", icon: <SiElementor color="#d62828" /> },
      { name: "Photoshop", icon: <FaPaintBrush color="#31a8ff" /> },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "SEO", icon: <FaSearch color="#4caf50" /> },
      { name: "Responsive", icon: <HiOutlineDeviceMobile color="#00aaff" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem]"
            >
              <h3 className="text-2xl font-bold mb-8 text-slate-300 uppercase tracking-widest">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className="text-4xl group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-tighter text-slate-500 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
