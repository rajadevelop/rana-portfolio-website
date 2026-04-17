import { motion } from "motion/react";
import { FaRocket, FaCode, FaPalette } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export default function About() {
  const stats = [
    { icon: <FaRocket />, label: "Experience", value: "6+ Years", color: "from-blue-500 to-cyan-500" },
    { icon: <FaCode />, label: "Projects", value: "50+", color: "from-sky-500 to-cyan-500" },
    { icon: <FaPalette />, label: "Design", value: "Modern", color: "from-orange-500 to-red-500" },
    { icon: <FaGear />, label: "Experience", value: "Production", color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bento-grid">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 lg:col-span-4 flex flex-col justify-center mr-10"
          >
            <h3 className="text-3xl font-bold mb-6">My Story</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Hi, I&#39;m Rana Das, a Website Designer and Frontend Developer with 6+ years of experience in building responsive, user-friendly, and visually appealing websites. I have worked on real-time, production-level projects where I focus on quality, performance, and smooth user experience.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I have strong knowledge of modern design tools and frontend technologies, and I always try to write clean and maintainable code. I enjoy creating websites that not only look good but also help businesses grow and build a strong online presence.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I believe in following best practices and paying attention to every detail to deliver reliable, production-ready work.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="md:col-span-4 lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-[2rem] flex flex-col items-center justify-center text-center group"
              >
                <div className={`text-2xl mb-3 p-3 rounded-2xl bg-linear-to-br ${stat.color} text-white transition-transform`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-black mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
