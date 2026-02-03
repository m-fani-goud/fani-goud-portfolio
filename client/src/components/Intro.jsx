import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 3200); // full intro duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  const skipIntro = () => {
    setShow(false);
    onFinish();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[999] bg-gray-950 flex items-center justify-center"
        >
          {/* CENTER CONTENT */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center"
          >
            {/* NAME */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="tracking-[0.45em] text-sm text-gray-400 mb-6"
            >
              FANI GOUD
            </motion.p>

            {/* ROLE + SKIP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <span className="text-gray-500 text-sm">
                Full-Stack Developer
              </span>

              {/* SKIP BUTTON (BESIDE ROLE) */}
              <button
                onClick={skipIntro}
                className="
                  text-xs px-3 py-1 rounded-full
                  border border-white/20
                  text-gray-400
                  hover:text-white hover:border-white
                  transition
                "
              >
                Skip →
              </button>
            </motion.div>

            {/* LOADING LINE */}
            <div className="w-56 h-[2px] bg-white/10 overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-400 via-teal-400 to-pink-400"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
