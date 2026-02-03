import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative py-32 px-6 bg-slate-900 overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Ambient background glow */}
      <div
        className="
          absolute -top-40 -right-40
          w-[32rem] h-[32rem]
          bg-indigo-500/10
          rounded-full
          blur-[180px]
        "
      />
      <div
        className="
          absolute bottom-[-12rem] left-[-12rem]
          w-[28rem] h-[28rem]
          bg-pink-500/10
          rounded-full
          blur-[180px]
        "
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-white text-center">
          About Me
        </h2>

        {/* Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              I’m a fresher developer who enjoys building clean,
              structured, and meaningful web applications.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              I like understanding how applications work end-to-end,
              from user interactions on the frontend to logic and
              data handling on the backend. I focus on clarity,
              maintainability, and smooth application flow.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              I’m motivated to keep learning, improve my skills,
              and contribute to projects where quality,
              consistency, and collaboration matter.
            </p>
          </motion.div>

          {/* RIGHT — VISUAL STATEMENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="
                relative
                p-10
                rounded-3xl
                border border-white/10
                bg-slate-950/60
                backdrop-blur
              "
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I believe good software is built at the intersection of
                <span className="text-white"> logic</span>,
                <span className="text-white"> usability</span>, and
                <span className="text-white"> consistency</span>.
              </p>

              <p className="mt-6 text-gray-400 leading-relaxed">
                My approach is to keep things simple, write
                understandable code, and build solutions
                that are easy to use and easy to maintain.
              </p>
            </div>

            {/* Card glow */}
            <div
              className="
                absolute -inset-12
                rounded-3xl
                bg-gradient-to-tr
                from-indigo-500/20
                via-pink-500/15
                to-yellow-400/15
                blur-[160px]
                opacity-80
                -z-10
              "
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
