import { useEffect, useState } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiEasterEgg() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === KONAMI[index]) {
        const next = index + 1;
        if (next === KONAMI.length) {
          setShow(true);
          setIndex(0);
        } else {
          setIndex(next);
        }
      } else {
        setIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-8 rounded-xl text-center max-w-sm">
        <h2 className="text-2xl font-bold text-yellow-400">
          🎉 Easter Egg Found!
        </h2>
        <p className="mt-4 text-gray-300">
          Fun fact: I enjoy debugging complex bugs more than writing code 😄
        </p>
        <button
          onClick={() => setShow(false)}
          className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
