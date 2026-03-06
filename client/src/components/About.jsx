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
      transition={{ duration: 0.8 }}
    >
      {/* Background glow */}

      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] bg-indigo-500/10 rounded-full blur-[180px]" />
      <div className="absolute bottom-[-12rem] left-[-12rem] w-[28rem] h-[28rem] bg-pink-500/10 rounded-full blur-[180px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Title */}

        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          About Me
        </h2>

        <div className="mt-20 grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <p className="text-xl text-gray-300 leading-relaxed">
              I’m a <span className="text-white font-medium">Full Stack Developer</span>
              with a strong interest in building modern web applications
              that are clean, scalable, and user-friendly.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              My work focuses on creating end-to-end applications using
              technologies like <span className="text-white">React, Node.js,
              Express, and MongoDB</span>. I enjoy designing smooth user
              interfaces while also building structured backend systems
              that handle real-world data.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              I have built multiple real-world projects including job
              portals, dashboards, CRM systems, and business websites.
              These projects helped me strengthen my understanding of
              full-stack development, REST APIs, and application
              architecture.
            </p>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="relative p-10 rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur">

              <p className="text-gray-300 text-lg leading-relaxed">
                I believe great software exists where
                <span className="text-white"> technology</span>,
                <span className="text-white"> usability</span>,
                and <span className="text-white"> problem-solving</span>
                meet.
              </p>

              <p className="mt-6 text-gray-400 leading-relaxed">
                My goal is to continuously improve my skills,
                contribute to meaningful projects, and build
                applications that create real value for users
                and businesses.
              </p>

              {/* Quick highlights */}

              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">

                <div className="border border-white/10 rounded-lg p-4 text-gray-300">
                  💻 8+ Projects
                </div>

                <div className="border border-white/10 rounded-lg p-4 text-gray-300">
                  ⚙ Full Stack MERN
                </div>

                <div className="border border-white/10 rounded-lg p-4 text-gray-300">
                  📊 Machine Learning
                </div>

                <div className="border border-white/10 rounded-lg p-4 text-gray-300">
                  🚀 Real-world Apps
                </div>

              </div>

            </div>

            {/* Glow behind card */}

            <div className="absolute -inset-12 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-pink-500/15 to-yellow-400/15 blur-[160px] opacity-80 -z-10" />

          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}