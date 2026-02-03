import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative py-32 px-6 bg-zinc-900 overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-500/10 blur-[200px]" />
      <div className="absolute bottom-[-15rem] right-[-10rem] w-[30rem] h-[30rem] bg-pink-500/10 blur-[200px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-white text-center">
          Skills
        </h2>

        <p className="mt-6 text-gray-400 text-center max-w-2xl mx-auto">
          A combination of frontend, backend, programming, and data-focused
          skills that allow me to build complete and practical solutions.
        </p>

        {/* Skills Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-16">

          {/* FRONTEND */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative p-10 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur"
          >
            <h3 className="text-xl font-medium text-white mb-6">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10 hover:border-white/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative p-10 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur"
          >
            <h3 className="text-xl font-medium text-white mb-6">
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Node.js",
                "Express.js",
                "REST APIs",
                "CRUD Operations",
                "MySQL",
              ].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10 hover:border-white/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* PROGRAMMING */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative p-10 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur"
          >
            <h3 className="text-xl font-medium text-white mb-6">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Python", "Java", "C", "SQL"].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10 hover:border-white/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ML & DATA */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative p-10 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur"
          >
            <h3 className="text-xl font-medium text-white mb-6">
              Machine Learning & Data Analysis
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Machine Learning Algorithms",
                "Pandas",
                "NumPy",
                "Seaborn",
                "Matplotlib",
                "Exploratory Data Analysis (EDA)",
                "Excel",
              ].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10 hover:border-white/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
