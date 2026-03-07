import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const featuredProjects = [
{
id:1,
title:"CareerForge – Job Portal",
description:
"A full stack MERN job portal connecting recruiters and job seekers with secure authentication and role based access.",
features:[
"OTP Email Authentication",
"Role Based Access (Admin / Recruiter / Job Seeker)",
"Recruiter Approval System",
"Resume Upload & Profile Builder",
"Job Application Tracking",
"Analytics Dashboard"
],
tech:["React","Node.js","Express","MongoDB","Tailwind"],
github:"https://github.com/m-fani-goud",
live:"https://careerforge-job-portal-3ep9w3810-mandala-fanis-projects.vercel.app",
image:"/projects/careerforge.png"
},

{
id:2,
title:"AI Worker Productivity Dashboard",
description:
"A productivity analytics dashboard that processes worker activity events and visualizes insights through charts.",
features:[
"Activity Event Processing",
"Productivity Analytics",
"Interactive Charts",
"Dashboard Visualization"
],
tech:["React","Node.js","Docker"],
github:"https://github.com/m-fani-goud",
live:"https://ai-worker-productivity-dashboard-ymdo-r5vhsf86w.vercel.app",
image:"/projects/ai-dashboard.png"
},

{
id:3,
title:"CRM Lead Manager",
description:
"A full stack CRM system for managing business leads and tracking customer follow ups.",
features:[
"Lead Tracking",
"Follow-up Management",
"Customer Interaction Logs",
"Full Stack CRUD System"
],
tech:["React","Node.js","MongoDB"],
github:"https://github.com/m-fani-goud/FUTURE_FS_01",
live:"https://future-fs-01-cyan.vercel.app",
image:"/projects/crm.png"
}
];

const otherProjects=[
{
id:4,
title:"Dawath Biryani Restaurant Website",
description:"A modern responsive restaurant website built for a local business.",
tech:["React","Tailwind","Node.js","MongoDB"],
github:"https://github.com/m-fani-goud/FUTURE_FS_02",
live:"https://future-fs-02-topaz.vercel.app",
image:"/projects/restaurant.png"
},

{
id:5,
title:"Enquero Blinkit Website",
description:"A web application inspired by Blinkit with authentication system.",
tech:["React","Authentication"],
github:"https://github.com/m-fani-goud",
live:"https://enquero-blink-d4owb06lj-mandala-fanis-projects.vercel.app",
image:"/projects/blinkit.png"
},

{
id:6,
title:"College Website",
description:"A responsive college website with backend integration.",
tech:["React","Node.js","MySQL"],
github:"https://github.com/m-fani-goud",
live:"https://college-website-sqkb-7y778ig0h-mandala-fanis-projects.vercel.app/",
image:"/projects/college.png"
},

{
id:7,
title:"Employee Leave Management System",
description:"A system for employees to request leave and admins to manage approvals.",
tech:["React","Backend Logic"],
github:"https://github.com/m-fani-goud",
live:"https://employee-leave-management-14k34p1ej-mandala-fanis-projects.vercel.app/",
image:"/projects/leave.png"
},

{
id:8,
title:"Weather Application",
description:"A weather app that fetches real-time weather data using APIs.",
tech:["JavaScript","REST API"],
github:"https://github.com/m-fani-goud",
live:"https://weather-app-demo.vercel.app",
image:"/projects/weather.png"
},

{
id:9,
title:"Used Car Price Prediction",
description:"Machine learning model predicting used car prices.",
tech:["Python","Machine Learning"],
github:"https://github.com/m-fani-goud",
live:null,
image:"/projects/carprice.png"
},

{
id:10,
title:"Email Spam Detection",
description:"Machine learning model classifying emails as spam or not spam.",
tech:["Python","Machine Learning"],
github:"https://github.com/m-fani-goud",
live:null,
image:"/projects/spam.png"
}
];

export default function Projects(){

return(

<motion.section
id="projects"
className="py-32 px-6 bg-neutral-900"
variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{once:true}}
>

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-semibold text-white text-center">
Projects
</h2>

<p className="mt-6 text-gray-400 text-center max-w-2xl mx-auto">
A collection of projects demonstrating my experience in full stack
development, machine learning, and real world problem solving.
</p>

{/* Featured Projects */}

<h3 className="text-2xl text-white mt-20 mb-10">
⭐ Featured Projects
</h3>

<div className="grid md:grid-cols-3 gap-8">

{featuredProjects.map((project,index)=>(
<motion.div
key={project.id}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1,duration:0.6}}
className="group rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/30 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300"
>

{/* Image + Hover */}

<div className="relative overflow-hidden">

<img
src={project.image}
alt={project.title}
className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
/>

<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-300">

{project.live&&(
<a
href={project.live}
target="_blank"
rel="noopener noreferrer"
className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium"
>
Live Demo
</a>
)}

<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="px-4 py-2 border border-white text-white rounded-lg text-sm"
>
GitHub
</a>

</div>

</div>

{/* Content */}

<div className="p-6">

<h3 className="text-xl font-semibold text-white">
{project.title}
</h3>

<p className="mt-3 text-gray-400 text-sm">
{project.description}
</p>

{/* Key Features */}

<ul className="mt-4 text-gray-400 text-sm list-disc list-inside space-y-1">
{project.features.map((f)=>(
<li key={f}>{f}</li>
))}
</ul>

{/* Tech Stack */}

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

</div>

</motion.div>
))}

</div>

{/* Other Projects */}

<h3 className="text-2xl text-white mt-24 mb-10">
Other Projects
</h3>

<div className="grid md:grid-cols-2 gap-8">

{otherProjects.map((project,index)=>(
<motion.div
key={project.id}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1,duration:0.6}}
className="group rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 hover:border-white/30 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300"
>

<div className="relative overflow-hidden">

<img
src={project.image}
alt={project.title}
className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
/>

<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-300">

{project.live&&(
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
className="px-4 py-2 border border-white text-white rounded-lg text-sm"
>
GitHub
</a>

</div>

</div>

<div className="p-6">

<h3 className="text-xl text-white font-medium">
{project.title}
</h3>

<p className="mt-3 text-gray-400 text-sm">
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

</div>

</motion.div>
))}

</div>

</div>

</motion.section>

);
}