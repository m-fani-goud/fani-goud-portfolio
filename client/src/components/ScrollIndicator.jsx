import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scrollTop / height) * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="h-40 w-[2px] bg-white/10 relative rounded-full">
        <div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full
          bg-gradient-to-tr from-indigo-400 via-teal-400 to-pink-400
          shadow-lg transition-all"
          style={{ top: `${progress}%` }}
        />
      </div>
    </div>
  );
}
