import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <motion.section
      id="education"
      className="relative py-32 px-6 bg-stone-900 overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Ambient background glows */}
      <div className="absolute -top-40 left-[-12rem] w-[30rem] h-[30rem] bg-indigo-500/10 blur-[180px]" />
      <div className="absolute bottom-[-12rem] right-[-12rem] w-[30rem] h-[30rem] bg-pink-500/10 blur-[180px]" />

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-white text-center">
          Education
        </h2>

        <p className="mt-6 text-gray-400 text-center max-w-2xl mx-auto">
          My academic background that shaped my foundation in computer science
          and problem-solving.
        </p>

        {/* Education Timeline */}
        <div className="mt-20 space-y-12">

          {/* Graduation */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="
              relative p-8 rounded-3xl
              bg-stone-950/70
              border border-white/10
              backdrop-blur
            "
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-medium text-white">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="mt-1 text-gray-300">
                  Computer Science & Data Science
                </p>
                <p className="mt-1 text-gray-400 text-sm">
                  TKR College of Engineering and Technology, Hyderabad
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="text-gray-300 font-medium">
                  2021 – 2025
                </p>
                <p className="mt-1 text-gray-400">
                  CGPA: <span className="text-white">7.4 / 10</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Intermediate */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="
              relative p-8 rounded-3xl
              bg-stone-950/70
              border border-white/10
              backdrop-blur
            "
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-medium text-white">
                  Intermediate (MPC)
                </h3>
                <p className="mt-1 text-gray-300">
                  Synapse Junior College
                </p>
                <p className="mt-1 text-gray-400 text-sm">
                  Miryalaguda
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="text-gray-300 font-medium">
                  2021
                </p>
                <p className="mt-1 text-gray-400">
                  Marks: <span className="text-white">918 / 1000</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* SSC */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="
              relative p-8 rounded-3xl
              bg-stone-950/70
              border border-white/10
              backdrop-blur
            "
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-medium text-white">
                  Secondary School Certificate (SSC)
                </h3>
                <p className="mt-1 text-gray-300">
                  Word and Deed High School
                </p>
                <p className="mt-1 text-gray-400 text-sm">
                  Miryalaguda
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="text-gray-300 font-medium">
                  2019
                </p>
                <p className="mt-1 text-gray-400">
                  GPA: <span className="text-white">10 / 10</span>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
