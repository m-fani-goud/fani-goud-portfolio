import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const featuredProjects = [
{
title: "CareerForge – Job Portal",
description:
"A full stack MERN job portal with role based dashboards for job seekers and recruiters.",
tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
github: "https://github.com/m-fani-goud",
live: "https://careerforge-job-portal-3ep9w3810-mandala-fanis-projects.vercel.app",
image: "/projects/careerforge.png"
},

{
title: "AI Worker Productivity Dashboard",
description:
"A dashboard that processes worker activity events and generates productivity insights.",
tech: ["React", "Node.js", "Docker"],
github: "https://github.com/m-fani-goud",
live: "https://ai-worker-productivity-dashboard-ymdo-r5vhsf86w.vercel.app",
image: "/projects/ai-dashboard.png"
},

{
title: "CRM Lead Manager",
description:
"A full stack CRM system for managing leads and follow ups.",
tech: ["React", "Node.js", "MongoDB"],
github: "https://github.com/m-fani-goud/FUTURE_FS_01",
live: "https://future-fs-01-cyan.vercel.app",
image: "/projects/crm.png"
}
];

const projects = [

{
title: "Dawath Biryani Restaurant Website",
description:
"A modern restaurant website built for a real local business in Miryalaguda.",
tech: ["React", "Tailwind", "Node.js", "MongoDB"],
github: "https://github.com/m-fani-goud/FUTURE_FS_02",
live: "https://future-fs-02-topaz.vercel.app",
image: "/projects/restaurant.png"
},

{
title: "Enquero Blinkit Website",
description:
"A web application with login and registration system inspired by Blinkit.",
tech: ["React", "Authentication"],
github: "https://github.com/m-fani-goud",
live: "https://enquero-blink-d4owb06lj-mandala-fanis-projects.vercel.app",
image: "/projects/blinkit.png"
},

{
title: "College Website",
description:
"A responsive full stack college website with React frontend and Node backend.",
tech: ["React", "Node.js", "MySQL"],
github: "https://github.com/m-fani-goud",
live: "https://college-website-sqkb-7y778ig0h-mandala-fanis-projects.vercel.app/",
image: "/projects/college.png"
},

{
title: "Employee Leave Management System",
description:
"A system for managing employee leave requests and approvals.",
tech: ["React", "Backend Logic"],
github: "https://github.com/m-fani-goud",
live: "https://employee-leave-management-14k34p1ej-mandala-fanis-projects.vercel.app/",
image: "/projects/leave.png"
},

{
title: "Weather Application",
description:
"A weather app that fetches real time weather data using APIs.",
tech: ["JavaScript", "REST API"],
github: "https://github.com/m-fani-goud",
live: "https://weather-app-demo.vercel.app",
image: "/projects/weather.png"
},

{
title: "Used Car Price Prediction",
description:
"A machine learning project predicting used car prices based on vehicle features.",
tech: ["Python", "Machine Learning"],
github: "https://github.com/m-fani-goud",
live: null,
image: "/projects/carprice.png"
},

{
title: "Email Spam Detection",
description:
"A machine learning system that classifies emails as spam or not spam.",
tech: ["Python", "Machine Learning"],
github: "https://github.com/m-fani-goud",
live: null,
image: "/projects/spam.png"
}

];

export default function Projects() {

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

{/* TITLE */}

<h2 className="text-4xl font-semibold text-white text-center">
Projects
</h2>

<p className="mt-6 text-gray-400 text-center max-w-2xl mx-auto">
A collection of projects demonstrating my experience in full stack
development, machine learning, and real world problem solving.
</p>


{/* FEATURED */}

<h3 className="text-2xl text-white mt-20 mb-10">
⭐ Featured Projects
</h3>

<div className="grid md:grid-cols-3 gap-8">

{featuredProjects.map((project,index)=>(

<motion.div
key={project.title}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1,duration:0.6}}
className="
group relative
rounded-3xl
overflow-hidden
bg-white/5
backdrop-blur-lg
border border-white/10
hover:border-transparent
transition-all duration-500
hover:-translate-y-3
"
>

{/* gradient hover border */}
<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-xl"></div>

<img
src={project.image}
alt={project.title}
className="relative z-10 w-full h-52 object-cover group-hover:scale-110 transition duration-500"
/>

<div className="relative z-10 p-6">

<h3 className="text-xl font-semibold text-white">
{project.title}
</h3>

<p className="mt-3 text-gray-400 text-sm leading-relaxed">
{project.description}
</p>

<div className="mt-4 flex flex-wrap gap-2">

{project.tech.map((tech)=>(
<span
key={tech}
className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-300"
>
{tech}
</span>
))}

</div>

<div className="mt-6 flex gap-3">

<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="px-4 py-2 border border-white/20 rounded-lg text-gray-300 hover:border-white"
>
GitHub
</a>

{project.live && (

<a
href={project.live}
target="_blank"
rel="noopener noreferrer"
className="px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200"
>
Live Demo
</a>

)}

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

{projects.map((project,index)=>(

<motion.div
key={project.title}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1,duration:0.6}}
className="
group rounded-3xl overflow-hidden
bg-neutral-950
border border-white/10
hover:border-white/30
hover:-translate-y-3
hover:shadow-2xl
transition-all duration-500
"
>

<img
src={project.image}
alt={project.title}
className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
/>

<div className="p-6">

<h3 className="text-xl text-white font-medium">
{project.title}
</h3>

<p className="mt-3 text-gray-400 text-sm leading-relaxed">
{project.description}
</p>

<div className="mt-4 flex flex-wrap gap-2">

{project.tech.map((tech)=>(
<span
key={tech}
className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-300"
>
{tech}
</span>
))}

</div>

<div className="mt-6 flex gap-3">

<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="px-4 py-2 border border-white/20 rounded-lg text-gray-300 hover:border-white"
>
GitHub
</a>

{project.live && (

<a
href={project.live}
target="_blank"
rel="noopener noreferrer"
className="px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200"
>
Live Demo
</a>

)}

</div>

</div>

</motion.div>

))}

</div>

</div>

</motion.section>

);
}