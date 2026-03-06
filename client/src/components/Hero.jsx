import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 bg-gray-950 overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-500/10 blur-[200px]" />
      <div className="absolute bottom-[-10rem] right-[-10rem] w-[28rem] h-[28rem] bg-pink-500/10 blur-[180px]" />

      <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            Hi, I’m <br />
            <span className="font-bold text-white">
              Fani Goud
            </span>
          </h1>

          <p className="mt-3 text-sm text-gray-400 tracking-wide">
            Full Stack Developer • India 🇮🇳
          </p>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
            I build modern web applications using the MERN stack and
            enjoy turning ideas into clean, scalable, and user-friendly
            digital products.
          </p>

          {/* ACTION BUTTONS */}

          <div className="mt-10 flex flex-wrap gap-4">

            {/* Projects */}

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              View Projects
            </a>

            {/* Resume */}

            <a
              href="/Fani_Goud_Resume.pdf"
              download
              className="
                group relative overflow-hidden
                px-6 py-3 rounded-xl
                border border-white/20
                text-gray-200 font-medium
                flex items-center gap-3
                transition
                hover:border-white
              "
            >

              <span
                className="
                  absolute inset-0
                  bg-white
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-300
                "
              />

              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition">
                <FaFileDownload />
                Resume
              </span>

            </a>

          </div>

          {/* SOCIAL ICONS */}

          <div className="mt-8 flex gap-6 text-2xl text-gray-400">

            <a
              href="https://github.com/m-fani-goud"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/fani-goud/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          className="flex justify-center relative"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            e.currentTarget.style.setProperty("--x", `${x / 20}px`);
            e.currentTarget.style.setProperty("--y", `${y / 20}px`);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.setProperty("--x", `0px`);
            e.currentTarget.style.setProperty("--y", `0px`);
          }}
          style={{
            transform: "translate(var(--x), var(--y))",
            transition: "transform 0.15s ease-out",
          }}
        >

          {/* Glow */}

          <div
            className="
              absolute -inset-12
              rounded-3xl
              bg-gradient-to-tr
              from-indigo-500/30
              via-pink-500/25
              to-yellow-400/25
              blur-[160px]
              opacity-90
            "
          />

          {/* Profile image */}

          <img
            src="/profile.jpg"
            alt="Fani Goud"
            className="
              relative z-10
              w-72 h-[28rem]
              md:w-80 md:h-[32rem]
              object-cover
              rounded-2xl
              border border-white/10
              shadow-2xl
            "
          />

        </motion.div>

      </div>
    </section>
  );
}