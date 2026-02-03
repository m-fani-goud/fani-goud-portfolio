export default function WaveDivider({ flip = false, color = "#0f172a" }) {
  return (
    <div className={`relative w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 90"
        className="w-full h-20"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C120,60 240,20 360,30 480,40 600,80 720,70 840,60 960,20 1080,30 1200,40 1320,60 1440,50 L1440,0 L0,0 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
