import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Machine Learning Enthusiast",
  "Problem Solver"
];

export default function About() {

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {

    const typing = setInterval(() => {

      setText(roles[index].slice(0, char + 1));
      setChar(char + 1);

      if (char === roles[index].length) {

        setTimeout(() => {
          setChar(0);
          setIndex((index + 1) % roles.length);
        }, 1200);

      }

    }, 80);

    return () => clearInterval(typing);

  }, [char, index]);

  return (

    <section
      id="about"
      className="relative py-32 px-6 bg-slate-900 overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] bg-indigo-500/10 rounded-full blur-[180px]" />

      <div className="absolute bottom-[-12rem] left-[-12rem] w-[28rem] h-[28rem] bg-pink-500/10 rounded-full blur-[180px]" />

      <div className="relative max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          About Me
        </h2>

        {/* Typing Text */}

        <p className="text-center mt-6 text-indigo-400 text-lg font-medium h-6">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        <div className="mt-20 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <p className="text-xl text-gray-300 leading-relaxed">
              I’m a <span className="text-white font-medium">Full Stack Developer</span>
              passionate about building scalable applications and solving
              real-world problems with modern technologies.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              My main stack includes <span className="text-white">
              React, Node.js, Express and MongoDB</span>.
              I focus on creating smooth user interfaces while building
              efficient backend systems.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              I also explore <span className="text-white">
              Machine Learning and Data Analysis</span>
              using Python tools like Pandas, NumPy,
              Matplotlib and Scikit-Learn.
            </p>

          </motion.div>

          {/* RIGHT PROFILE CARD */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            {/* Floating tech icons */}

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-8 left-6 text-sky-400 text-3xl"
            >
              <FaReact />
            </motion.div>

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-20 -left-6 text-green-400 text-3xl"
            >
              <FaNodeJs />
            </motion.div>

            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute -bottom-6 left-10 text-yellow-400 text-3xl"
            >
              <FaPython />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-10 -right-6 text-indigo-400 text-3xl"
            >
              <FaDatabase />
            </motion.div>

            {/* Neon Border Card */}

            <div className="group relative p-[2px] rounded-3xl overflow-hidden">

              {/* Neon Gradient Border */}

              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

              {/* Card */}

              <div className="relative p-12 rounded-3xl bg-slate-950/80 backdrop-blur border border-white/10 text-center">

                {/* Avatar */}

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative w-32 h-32 mx-auto"
                >

                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-pink-500 to-yellow-400 blur-xl opacity-70 animate-pulse"></div>

                  <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-indigo-500 via-pink-500 to-yellow-400">

                    <img
                      src="/avatar.png"
                      alt="Developer"
                      className="w-32 h-32 rounded-full object-cover border border-white/20"
                    />

                  </div>

                </motion.div>

                <h3 className="mt-6 text-white text-xl font-semibold">
                  Fani Goud
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Full Stack Developer
                </p>

                {/* Stats */}

                <div className="mt-8 grid grid-cols-2 gap-4 text-sm">

                  <div className="stat-card">💻 8+ Projects</div>
                  <div className="stat-card">⚙ MERN Stack</div>
                  <div className="stat-card">📊 Machine Learning</div>
                  <div className="stat-card">🚀 Real Apps</div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );
}