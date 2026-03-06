import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const API_URL = "https://fani-goud-portfolio.onrender.com/api/contact";

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
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      setSuccess(true);
      e.target.reset();

      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative py-32 px-6 bg-stone-900 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background glow */}

      <div className="absolute -top-40 right-[-10rem] w-[28rem] h-[28rem] bg-indigo-500/10 blur-[180px]" />
      <div className="absolute bottom-[-12rem] left-[-10rem] w-[28rem] h-[28rem] bg-pink-500/10 blur-[180px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Title */}

        <h2 className="text-4xl font-semibold text-white text-center">
          Get In Touch
        </h2>

        <p className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
          Let’s talk about opportunities, collaborations, or ideas.
        </p>

        <div className="mt-20 grid md:grid-cols-2 gap-14">

          {/* LEFT — CONTACT INFO */}

          <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-8">

            <h3 className="text-xl text-white font-medium">
              Contact Information
            </h3>

            <div className="space-y-5 text-gray-300">

              <a
                href="mailto:mfanigoud@gmail.com"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaEnvelope className="text-yellow-400" />
                mfanigoud@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/fani-goud/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaLinkedin className="text-yellow-400" />
                linkedin.com/in/fani-goud
              </a>

              <a
                href="https://github.com/m-fani-goud"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaGithub className="text-yellow-400" />
                github.com/m-fani-goud
              </a>

            </div>

          </div>

          {/* RIGHT — CONTACT FORM */}

          <form
            onSubmit={handleSubmit}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-6"
          >

            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-black/40 text-gray-200 border border-white/10 focus:border-yellow-400 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-black/40 text-gray-200 border border-white/10 focus:border-yellow-400 outline-none"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl bg-black/40 text-gray-200 border border-white/10 focus:border-yellow-400 outline-none resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl font-medium transition ${
                loading
                  ? "bg-gray-500 text-black"
                  : "bg-yellow-400 hover:scale-[1.03] text-black"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* SUCCESS MESSAGE */}

            {success && (
              <div className="flex items-center gap-3 text-green-400 justify-center pt-2">
                <FaCheckCircle />
                Message sent successfully!
              </div>
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