import { useEffect, useState } from "react";

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed z-[999] pointer-events-none hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="
          w-4 h-4 rounded-full
          bg-gradient-to-tr from-indigo-400 via-teal-400 to-pink-400
          opacity-80
          blur-[1px]
        "
      />
    </div>
  );
}
