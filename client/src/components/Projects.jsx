import { motion } from "framer-motion";
import { useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiDocker } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

/* TECH ICONS */

const techIcons = {
  React: <FaReact className="text-sky-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  Docker: <SiDocker className="text-blue-400" />,
  Python: <FaPython className="text-yellow-400" />
};

/* FEATURED PROJECTS */

const featuredProjects = [
  {
    id: 1,
    title: "CareerForge – Job Portal",
    description:
      "A full stack MERN job portal connecting recruiters and job seekers with secure authentication and role based access.",
    features: [
      "OTP Email Authentication",
      "Role Based Access",
      "Recruiter Approval System",
      "Resume Upload",
      "Job Application Tracking",
      "Analytics Dashboard"
    ],
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/m-fani-goud",
    live: "https://careerforge-job-portal-3ep9w3810-mandala-fanis-projects.vercel.app",
    image: "/projects/careerforge.png"
  },
  {
    id: 2,
    title: "AI Worker Productivity Dashboard",
    description:
      "A dashboard analyzing worker activity and generating productivity insights using event based data processing.",
    features: [
      "Activity Event Processing",
      "Worker Productivity Analytics",
      "Interactive Charts",
      "Factory Dashboard"
    ],
    tech: ["React", "Node.js", "Docker"],
    github: "https://github.com/m-fani-goud",
    live: "https://ai-worker-productivity-dashboard-ymdo-r5vhsf86w.vercel.app",
    image: "/projects/ai-dashboard.png"
  },
  {
    id: 3,
    title: "CRM Lead Manager",
    description:
      "A full stack CRM platform for managing leads, follow ups and customer interactions.",
    features: [
      "Lead Tracking",
      "Follow Up Management",
      "Customer Logs",
      "Admin Dashboard"
    ],
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/m-fani-goud/FUTURE_FS_01",
    live: "https://future-fs-01-cyan.vercel.app",
    image: "/projects/crm.png"
  }
];

/* OTHER PROJECTS */

const otherProjects = [
  {
    id: 4,
    title: "Dawath Biryani Restaurant Website",
    description: "Modern responsive restaurant website for local business.",
    tech: ["React", "Tailwind", "Node.js"],
    github: "https://github.com/m-fani-goud",
    live: "https://future-fs-02-topaz.vercel.app",
    image: "/projects/restaurant.png"
  },
  {
    id: 5,
    title: "Enquero Blinkit Website",
    description: "Blinkit inspired grocery delivery application.",
    tech: ["React"],
    github: "https://github.com/m-fani-goud",
    live: "https://enquero-blink-d4owb06lj-mandala-fanis-projects.vercel.app",
    image: "/projects/blinkit.png"
  },
  {
    id: 6,
    title: "College Website",
    description: "Responsive college website with backend integration.",
    tech: ["React", "Node.js"],
    github: "https://github.com/m-fani-goud",
    live: "https://college-website-sqkb.vercel.app",
    image: "/projects/college.png"
  },
  {
    id: 7,
    title: "Employee Leave Management",
    description: "System to manage employee leave requests and approvals.",
    tech: ["React"],
    github: "https://github.com/m-fani-goud",
    live: "https://employee-leave-management.vercel.app",
    image: "/projects/leave.png"
  },
  {
    id: 8,
    title: "Weather Application",
    description: "Real time weather application using APIs.",
    tech: ["JavaScript"],
    github: "https://github.com/m-fani-goud",
    live: "https://weather-app-demo.vercel.app",
    image: "/projects/weather.png"
  },
  {
    id: 9,
    title: "Used Car Price Prediction",
    description: "Machine learning model predicting used car prices.",
    tech: ["Python"],
    github: "https://github.com/m-fani-goud",
    live: null,
    image: "/projects/carprice.png"
  },
  {
    id: 10,
    title: "Email Spam Detection",
    description: "Machine learning model classifying emails as spam.",
    tech: ["Python"],
    github: "https://github.com/m-fani-goud",
    live: null,
    image: "/projects/spam.png"
  }
];

export default function Projects() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setTilt({
      x: y / 20,
      y: -x / 20
    });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.section
      id="projects"
      className="py-32 px-6 bg-neutral-900"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-semibold text-white text-center">
          Projects
        </h2>

        <p className="mt-6 text-gray-400 text-center max-w-2xl mx-auto">
          A collection of projects demonstrating my experience in full stack
          development, machine learning and real world software engineering.
        </p>

        {/* FEATURED PROJECTS */}

        <h3 className="text-2xl text-white mt-20 mb-10">
          ⭐ Featured Projects
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
              }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-400 transition-all duration-500"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* FIXED OVERLAY FOR MOBILE */}

              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-black rounded-lg text-sm"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white text-white rounded-lg text-sm flex items-center gap-2"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm">
                  {project.description}
                </p>

                <ul className="mt-4 text-gray-400 text-sm list-disc list-inside space-y-1">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-3">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-200"
                    >
                      {techIcons[tech]}
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* OTHER PROJECTS */}

        <h3 className="text-2xl text-white mt-24 mb-10">
          Other Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8">

          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group relative rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 hover:border-purple-400 transition-all duration-500"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded-lg text-sm"
                  >
                    Live Demo
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white text-white rounded-lg text-sm flex items-center gap-2"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

              <div className="p-6">

                <h3 className="text-xl text-white font-medium">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-200"
                    >
                      {techIcons[tech]}
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}