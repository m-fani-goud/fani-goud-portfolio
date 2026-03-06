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
      transition={{ duration: 0.8 }}
    >

      {/* Background Glow Effects */}

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-500/10 blur-[200px]" />
      <div className="absolute bottom-[-15rem] right-[-10rem] w-[30rem] h-[30rem] bg-pink-500/10 blur-[200px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}

        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Skills
        </h2>

        <p className="mt-6 text-gray-400 text-center max-w-2xl mx-auto">
          Technologies and tools I use to build modern web applications,
          full stack systems, and data-driven solutions.
        </p>

        {/* Skills Grid */}

        <div className="mt-20 grid md:grid-cols-2 gap-12">

          {/* Frontend */}

          <motion.div
            whileHover={{ y: -6 }}
            className="group p-10 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur hover:border-white/30 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Frontend Development
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Tailwind CSS",
                "Responsive Design",
                "Component-Based Architecture"
              ].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10 group-hover:border-white/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}

          <motion.div
            whileHover={{ y: -6 }}
            className="group p-10 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur hover:border-white/30 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Backend Development
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Node.js",
                "Express.js",
                "REST APIs",
                "Authentication Systems",
                "CRUD Operations",
                "API Integration"
              ].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10 group-hover:border-white/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Databases */}

          <motion.div
            whileHover={{ y: -6 }}
            className="group p-10 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur hover:border-white/30 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Databases
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "MongoDB",
                "MySQL",
                "SQLite",
                "Database Design",
                "Prisma ORM"
              ].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10 group-hover:border-white/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Programming */}

          <motion.div
            whileHover={{ y: -6 }}
            className="group p-10 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur hover:border-white/30 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Programming Languages
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "Python",
                "Java",
                "C",
                "SQL"
              ].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10 group-hover:border-white/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Machine Learning */}

          <motion.div
            whileHover={{ y: -6 }}
            className="group p-10 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur hover:border-white/30 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Machine Learning & Data
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Machine Learning",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "Seaborn",
                "Exploratory Data Analysis"
              ].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10 group-hover:border-white/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}

          <motion.div
            whileHover={{ y: -6 }}
            className="group p-10 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur hover:border-white/30 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Tools & Platforms
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Git",
                "GitHub",
                "Docker",
                "Vercel",
                "Render",
                "VS Code"
              ].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10 group-hover:border-white/30 transition"
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