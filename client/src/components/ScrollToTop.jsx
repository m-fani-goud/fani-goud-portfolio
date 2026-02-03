import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            fixed bottom-8 right-8 z-50
            w-14 h-14
            rounded-full
            bg-gradient-to-tr from-indigo-500 via-teal-500 to-pink-500
            text-white
            flex items-center justify-center
            shadow-2xl
            hover:scale-110
            transition
          "
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
