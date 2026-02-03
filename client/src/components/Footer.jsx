import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-stone-950 text-gray-300 overflow-hidden">
      
      {/* 🌈 Ambient Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-gradient-to-r from-indigo-500/20 via-teal-500/20 to-pink-500/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-14 items-start"
        >

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold text-white tracking-wide">
              Fani Goud
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-sm">
              Fresher Full-Stack Developer passionate about building
              scalable, user-focused web applications with clean design
              and modern technologies.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg text-white font-medium mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-lg text-white font-medium mb-4">
              Connect With Me
            </h4>

            <div className="flex items-center gap-5">
              <a
                href="https://github.com/m-fani-goud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="https://linkedin.com/in/fani-goud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-white/10" />

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Fani Goud. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with <FaHeart className="text-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
