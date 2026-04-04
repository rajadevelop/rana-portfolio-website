import { motion } from "motion/react";
import { FaGraduationCap, FaAward, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Arts (B.A.)",
    institution: "University of Burdwan",
    year: "2019",
    location: "Burdwan, WB",
  },
];

const certifications = [
  {
    title: "Project Dynamotion",
    issuer: "Aptech Bengal",
    icon: <FaAward />,
  },
  {
    title: "Frontend Developer",
    issuer: "Unified Mentor",
    icon: <FaAward />,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem]"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 rounded-2xl gradient-bg text-white">
                <FaGraduationCap size={32} />
              </div>
              <h2 className="text-3xl font-black tracking-tighter uppercase">Education</h2>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-lg text-primary font-medium mb-4">{edu.institution}</p>
                  <div className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt color="#00aaff" /> {edu.year}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt color="#00d2ff" /> {edu.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem]"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 rounded-2xl gradient-bg text-white">
                <FaAward size={32} />
              </div>
              <h2 className="text-3xl font-black tracking-tighter uppercase">Certifications</h2>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-2xl bg-white/5 flex items-center gap-6 group transition-all"
                >
                  <div className="text-3xl text-primary group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
