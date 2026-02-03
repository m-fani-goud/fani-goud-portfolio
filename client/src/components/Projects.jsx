import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "Used Car Price Prediction",
    description:
      "A machine learning application that predicts the price of used cars based on multiple input features.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/m-fani-goud",
    live: "#",
    explanation:
      "In this project, I worked on data cleaning, feature selection, and training machine learning models to predict car prices. It helped me understand how real-world data is prepared, analyzed, and used for accurate predictions.",
  },
  {
    title: "Email Spam Detection",
    description:
      "A machine learning system that classifies emails as spam or not spam by analyzing text patterns.",
    tech: ["Python", "Machine Learning"],
    github: "https://github.com/m-fani-goud",
    live: "#",
    explanation:
      "This project focused on text preprocessing, feature extraction, and training classification models. I learned how machine learning techniques are applied to solve real-world classification problems.",
  },
  {
    title: "Weather Application",
    description:
      "A real-time weather application that fetches live data using APIs and displays city-based weather information.",
    tech: ["JavaScript", "REST APIs"],
    github: "https://github.com/m-fani-goud",
    live: "#",
    explanation:
      "Through this project, I gained experience working with external APIs, handling asynchronous data, and dynamically updating the user interface based on API responses.",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website designed to showcase projects, skills, and experience with a clean and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/m-fani-goud",
    live: "https://fani-goud-portfolio-m7aswdfun-mandala-fanis-projects.vercel.app",
    explanation:
      "This project helped me improve my frontend skills, focusing on layout design, responsiveness, and presenting information clearly to recruiters.",
  },
  {
    title: "Employee Leave Management System",
    description:
      "A system that manages employee leave requests and approvals with structured workflows.",
    tech: ["ReactJs", "Backend Logic"],
    github: "https://github.com/m-fani-goud",
    live: "https://employee-leave-management-rho.vercel.app",
    explanation:
      "I learned how to design application workflows, handle user actions, and manage leave records efficiently through this project.",
  },
  {
    title: "College Website",
    description:
      "A responsive full-stack college website with dynamic content and database integration.",
    tech: ["React.js", "Node.js", "MySQL"],
    github: "https://github.com/m-fani-goud",
    live: "https://college-website-sqkb.vercel.app",
    explanation:
      "This project gave me hands-on experience in full-stack development by connecting React frontend components with Node.js APIs and storing data in MySQL.",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative py-32 px-6 bg-neutral-900 overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Projects
        </h2>

        <p className="mt-6 text-gray-400 text-center max-w-2xl mx-auto">
          A collection of projects that reflect my experience with frontend,
          backend, machine learning, and real-world problem solving.
        </p>

        {/* Projects Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="
                p-8 rounded-3xl
                bg-neutral-950/70
                border border-white/10
                hover:border-white/30
                transition
              "
            >
              <h3 className="text-xl font-medium text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs text-gray-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-lg border border-white/20 text-gray-300 hover:border-white transition"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-lg bg-white text-black hover:bg-gray-200 transition"
                >
                  Live Demo
                </a>
              </div>

              {/* Interview explanation */}
              <p className="mt-6 text-sm text-gray-500 leading-relaxed">
                <span className="text-gray-400 font-medium">What I learned:</span>{" "}
                {project.explanation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
