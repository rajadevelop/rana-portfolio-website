import { motion } from "motion/react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      onAnimationComplete={() => (document.body.style.overflow = "auto")}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900 text-white"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold gradient-text mb-8"
      >
        Rana Das
      </motion.div>
      <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-full gradient-bg"
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 text-slate-500 uppercase tracking-widest text-sm"
      >
        Loading Portfolio...
      </motion.p>
    </motion.div>
  );
}
