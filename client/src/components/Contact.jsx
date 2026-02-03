import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        "https://fani-goud-portfolio.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          mode: "cors",
          cache: "no-cache",
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        e.target.reset();
        setTimeout(() => setSuccess(false), 4000);
      } else {
        throw new Error("Backend error");
      }
    } catch (err) {
      console.error("Message failed", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative py-32 px-6 bg-stone-900 overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Glow */}
      <div className="absolute -top-40 right-[-10rem] w-[30rem] h-[30rem] bg-indigo-500/10 blur-[180px]" />
      <div className="absolute bottom-[-12rem] left-[-10rem] w-[30rem] h-[30rem] bg-pink-500/10 blur-[180px]" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Get In Touch
        </h2>

        <p className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
          Interested in working together or discussing opportunities?
        </p>

        <div className="mt-20 grid md:grid-cols-2 gap-14">
          {/* LEFT */}
          <div className="p-10 rounded-3xl bg-stone-950/70 border border-white/10 backdrop-blur space-y-6">
            <h3 className="text-xl text-white font-medium">
              Let’s Connect
            </h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400" />
                <span>mfanigoud@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-yellow-400" />
                <span>linkedin.com/in/fani-goud</span>
              </div>
              <div className="flex items-center gap-3">
                <FaGithub className="text-yellow-400" />
                <span>github.com/m-fani-goud</span>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-10 rounded-3xl bg-stone-950/70 border border-white/10 backdrop-blur space-y-6"
          >
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-stone-900 text-gray-200 border border-white/10 focus:border-yellow-400 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-stone-900 text-gray-200 border border-white/10 focus:border-yellow-400 outline-none"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl bg-stone-900 text-gray-200 border border-white/10 focus:border-yellow-400 outline-none resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`
                w-full py-4 rounded-xl font-medium
                ${loading ? "bg-gray-500" : "bg-yellow-400 hover:scale-[1.03]"}
                text-black transition
              `}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* SUCCESS */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-green-400 justify-center pt-4"
              >
                <FaCheckCircle />
                Message sent successfully!
              </motion.div>
            )}

            {/* ERROR */}
            {error && (
              <p className="text-red-400 text-center pt-2">{error}</p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  );
}
