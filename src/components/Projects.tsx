import { motion } from "motion/react";
import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart and payment integration.",
    tech: ["React", "Next.js", "Tailwind", "Redux"],
    image: "https://picsum.photos/seed/ecommerce/800/600",
    live: "#",
    github: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Modern analytics dashboard with real-time data visualization.",
    tech: ["React", "Chakra UI", "Framer Motion", "Recharts"],
    image: "https://picsum.photos/seed/dashboard/800/600",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "High-end personal portfolio with smooth animations.",
    tech: ["React", "Vite", "Tailwind", "Motion"],
    image: "https://picsum.photos/seed/portfolio/800/600",
    live: "#",
    github: "#",
  },
  {
    title: "Real Estate App",
    description: "Property listing and search application with map integration.",
    tech: ["Next.js", "Google Maps API", "Tailwind"],
    image: "https://picsum.photos/seed/realestate/800/600",
    live: "#",
    github: "#",
  },
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
                  <a
                    href={project.live}
                      className="flex-1 py-4 rounded-2xl gradient-bg text-white font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
                  >
                    Live Demo <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
