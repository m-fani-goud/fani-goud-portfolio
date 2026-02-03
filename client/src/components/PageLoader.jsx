import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ onSkip }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[999] bg-gray-950 flex items-center justify-center"
      >
        {/* SKIP BUTTON */}
        <button
          onClick={onSkip}
          className="
            absolute top-6 right-6
            text-sm text-gray-400
            border border-white/20
            px-4 py-2 rounded-full
            hover:text-white hover:border-white
            transition
          "
        >
          Skip Intro →
        </button>

        {/* CENTER CONTENT */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="tracking-[0.4em] text-sm text-gray-400 mb-6">
            FANI GOUD
          </p>

          <div className="w-52 h-[2px] bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-400 via-teal-400 to-pink-400"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
