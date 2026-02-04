import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 bg-gray-950">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            Hi, I’m <br />
            <span className="font-bold">Fani Goud</span>
          </h1>

          <p className="mt-2 text-sm text-gray-400 tracking-wide">
            Full-Stack Developer • Based in India 🇮🇳
          </p>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
            I build clean, scalable, and thoughtfully designed web applications.
            I enjoy working across the stack and refining details that improve
            user experience.
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
              {/* background slide */}
              <span
                className="
                  absolute inset-0
                  bg-white
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-300
                "
              />

              {/* content */}
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

        {/* RIGHT — PHOTO WITH PARALLAX + ALWAYS-ON GLOW */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex justify-center relative -translate-y-6 md:-translate-y-10"
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
          {/* MATCHED AMBIENT GLOW */}
          <div
            className="
              absolute -inset-12
              rounded-3xl
              bg-gradient-to-tr
              from-indigo-500/35
              via-pink-500/30
              to-yellow-400/25
              blur-[160px]
              opacity-90
            "
          />

          {/* PROFILE IMAGE */}
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
              transition duration-700
            "
          />
        </motion.div>

      </div>
    </section>
  );
}
