import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="
      fixed left-6 top-1/2 -translate-y-1/2
      z-40
      hidden md:flex flex-col gap-5
    ">
      <a
        href="https://github.com/m-fani-goud"
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-3 rounded-xl
          bg-gray-900/80
          text-gray-400
          hover:text-white
          hover:bg-gray-800
          transition
        "
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/fani-goud"
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-3 rounded-xl
          bg-gray-900/80
          text-gray-400
          hover:text-white
          hover:bg-gray-800
          transition
        "
      >
        <FaLinkedin size={20} />
      </a>
    </div>
  );
}
