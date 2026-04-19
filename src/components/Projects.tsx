import { motion } from "motion/react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Classint",
    description: "A modern landing page to start your programming journey. ",
    tech: ["Bootstrap", "Html", "Css", "Javascript"],
    image: "classint-banner.png",
    live: "https://class-int.netlify.app",
  },
  {
    title: "CV Stick",
    description: "Create a professional, ATS-friendly CV in minutes.",
    tech: ["React", "Chakra UI", "Framer Motion"],
    image: "coming-soon.png",
    live: "#",
    disabled: "true",
  },
  // {
  //   title: "Portfolio Website",
  //   description: "High-end personal portfolio with smooth animations.",
  //   tech: ["React", "Vite", "Tailwind", "Motion"],
  //   image: "https://picsum.photos/seed/portfolio/800/600",
  //   live: "#",
  //   github: "#",
  // },
  // {
  //   title: "Real Estate App",
  //   description: "Property listing and search application with map integration.",
  //   tech: ["Next.js", "Google Maps API", "Tailwind"],
  //   image: "https://picsum.photos/seed/realestate/800/600",
  //   live: "#",
  //   github: "#",
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
            Selected <span className="gradient-text">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-[2.5rem] overflow-hidden glass-card"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-10">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <FaCode size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">{project.tech[0]}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.disabled ? (
                    <button
                      className="flex-1 py-4 rounded-2xl bg-gray-500 text-white font-bold cursor-not-allowed opacity-50"
                      disabled
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex-1 py-4 rounded-2xl gradient-bg text-white font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
                    >
                      Live Demo <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
