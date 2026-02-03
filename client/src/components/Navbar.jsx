import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [bg, setBg] = useState("bg-gray-950/80");
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  // SECTION COLOR SYNC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case "about":
                setBg("bg-indigo-950/80");
                break;
              case "skills":
                setBg("bg-teal-950/80");
                break;
              case "projects":
                setBg("bg-purple-950/80");
                break;
              case "contact":
                setBg("bg-stone-900/80");
                break;
              default:
                setBg("bg-gray-950/80");
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll("section").forEach((sec) => {
      if (sec.id) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  // SCROLL EFFECTS
  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((currentScroll / height) * 100);

      if (currentScroll > lastScroll && currentScroll > 120) {
        setShow(false); // hide
      } else {
        setShow(true); // show
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 w-full z-50
          backdrop-blur-xl border-b border-white/10
          transition-all duration-500
          ${bg}
          ${show ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <span className="tracking-[0.3em] text-xs md:text-sm font-medium text-white">
            FANI&nbsp;GOUD
          </span>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            {["about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-white transition"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* SCROLL PROGRESS BAR */}
        <div className="h-[2px] bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-indigo-400 via-teal-400 to-pink-400 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/80 backdrop-blur
          flex flex-col items-center justify-center gap-8
          text-white text-xl
          transition-all duration-500
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {["about", "skills", "projects", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setOpen(false)}
            className="hover:text-indigo-400 transition"
          >
            {item.toUpperCase()}
          </a>
        ))}
      </div>
    </>
  );
}
