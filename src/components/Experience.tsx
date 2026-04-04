import { motion } from "motion/react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Scriptevolve Private Limited",
    period: "2023 – Present",
    location: "Howrah, WB",
    description: [
      "Built responsive, high-performance web applications using React.js, Next.js, Chakra UI",
      "Managed state using Redux Toolkit",
      "Collaborated with designers and backend teams",
    ],
  },
  {
    title: "Website Designer",
    company: "Scriptevolve Private Limited",
    period: "2019 – 2023",
    location: "Howrah, WB",
    description: [
      "Designed mobile-first websites",
      "Created custom WordPress themes",
      "Worked directly with clients",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
            Career <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-start group"
            >
              <div className="shrink-0">
                <div className="p-5 rounded-3xl gradient-bg text-white shadow-[0_0_20px_rgba(112,0,255,0.3)] group-hover:scale-110 transition-transform">
                  <FaBriefcase size={32} />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                    <p className="text-xl text-slate-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt color="#00aaff" /> {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt color="#00d2ff" /> {exp.location}
                    </div>
                  </div>
                </div>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
