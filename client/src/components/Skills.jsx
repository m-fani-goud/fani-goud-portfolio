import { motion } from "framer-motion";

import {
FaReact,
FaNodeJs,
FaPython,
FaJava,
FaGitAlt
} from "react-icons/fa";

import {
SiTailwindcss,
SiMongodb,
SiMysql,
SiDocker,
SiJavascript,
SiPandas,
SiNumpy,
SiScikitlearn
} from "react-icons/si";

import { TbChartHistogram } from "react-icons/tb";

const fadeUp = {
hidden:{opacity:0,y:40},
visible:{opacity:1,y:0}
};

export default function Skills(){

return(

<motion.section
id="skills"
className="relative py-32 px-6 bg-zinc-900 overflow-hidden"
variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{once:true}}
transition={{duration:0.8}}
>

{/* BACKGROUND GLOW */}

<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-500/10 blur-[200px]" />
<div className="absolute bottom-[-15rem] right-[-10rem] w-[30rem] h-[30rem] bg-pink-500/10 blur-[200px]" />

<div className="relative max-w-6xl mx-auto">

<h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
Skills
</h2>

<p className="mt-6 text-gray-400 text-center max-w-2xl mx-auto">
Technologies and tools I use to build modern web applications,
full stack systems and data driven solutions.
</p>

<div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-12">

{/* CARD COMPONENT STYLE */}

{/* FRONTEND */}

<motion.div
whileHover={{y:-6}}
className="group relative p-10 rounded-3xl bg-zinc-950/60 backdrop-blur border border-white/10 hover:border-indigo-400 transition overflow-hidden"
>

<div className="absolute inset-0 rounded-3xl border border-indigo-400 opacity-0 group-hover:opacity-100 blur-md transition"></div>

<h3 className="text-xl font-semibold text-white mb-6">
Frontend Development
</h3>

<div className="flex flex-wrap gap-3">

<span className="skill group-hover:text-sky-400">
<FaReact/> React
</span>

<span className="skill group-hover:text-yellow-400">
<SiJavascript/> JavaScript
</span>

<span className="skill group-hover:text-cyan-400">
<SiTailwindcss/> Tailwind
</span>

<span className="skill">🌐 HTML</span>
<span className="skill">🎨 CSS</span>

</div>
</motion.div>

{/* BACKEND */}

<motion.div
whileHover={{y:-6}}
className="group relative p-10 rounded-3xl bg-zinc-950/60 backdrop-blur border border-white/10 hover:border-green-400 transition overflow-hidden"
>

<div className="absolute inset-0 rounded-3xl border border-green-400 opacity-0 group-hover:opacity-100 blur-md transition"></div>

<h3 className="text-xl font-semibold text-white mb-6">
Backend Development
</h3>

<div className="flex flex-wrap gap-3">

<span className="skill group-hover:text-green-400">
<FaNodeJs/> Node.js
</span>

<span className="skill">🚀 Express</span>
<span className="skill">⚡ REST APIs</span>
<span className="skill">🔐 Authentication</span>

</div>
</motion.div>

{/* DATABASE */}

<motion.div
whileHover={{y:-6}}
className="group relative p-10 rounded-3xl bg-zinc-950/60 backdrop-blur border border-white/10 hover:border-emerald-400 transition overflow-hidden"
>

<div className="absolute inset-0 rounded-3xl border border-emerald-400 opacity-0 group-hover:opacity-100 blur-md transition"></div>

<h3 className="text-xl font-semibold text-white mb-6">
Databases
</h3>

<div className="flex flex-wrap gap-3">

<span className="skill group-hover:text-green-400">
<SiMongodb/> MongoDB
</span>

<span className="skill group-hover:text-blue-400">
<SiMysql/> MySQL
</span>

<span className="skill">🗄 SQLite</span>

</div>
</motion.div>

{/* PROGRAMMING */}

<motion.div
whileHover={{y:-6}}
className="group relative p-10 rounded-3xl bg-zinc-950/60 backdrop-blur border border-white/10 hover:border-yellow-400 transition overflow-hidden"
>

<div className="absolute inset-0 rounded-3xl border border-yellow-400 opacity-0 group-hover:opacity-100 blur-md transition"></div>

<h3 className="text-xl font-semibold text-white mb-6">
Programming
</h3>

<div className="flex flex-wrap gap-3">

<span className="skill group-hover:text-yellow-400">
<SiJavascript/> JavaScript
</span>

<span className="skill group-hover:text-yellow-300">
<FaPython/> Python
</span>

<span className="skill group-hover:text-red-400">
<FaJava/> Java
</span>

<span className="skill">💻 C</span>

</div>
</motion.div>

{/* MACHINE LEARNING */}

<motion.div
whileHover={{y:-6}}
className="group relative p-10 rounded-3xl bg-zinc-950/60 backdrop-blur border border-white/10 hover:border-orange-400 transition overflow-hidden"
>

<div className="absolute inset-0 rounded-3xl border border-orange-400 opacity-0 group-hover:opacity-100 blur-md transition"></div>

<h3 className="text-xl font-semibold text-white mb-6">
Machine Learning & Data Analysis
</h3>

<div className="flex flex-wrap gap-3">

<span className="skill group-hover:text-yellow-300">
<SiPandas/> Pandas
</span>

<span className="skill group-hover:text-blue-400">
<SiNumpy/> NumPy
</span>

<span className="skill group-hover:text-orange-400">
<TbChartHistogram/> Matplotlib
</span>

<span className="skill">📊 Seaborn</span>

<span className="skill group-hover:text-orange-500">
<SiScikitlearn/> Scikit Learn
</span>

</div>
</motion.div>

{/* TOOLS */}

<motion.div
whileHover={{y:-6}}
className="group relative p-10 rounded-3xl bg-zinc-950/60 backdrop-blur border border-white/10 hover:border-blue-400 transition overflow-hidden"
>

<div className="absolute inset-0 rounded-3xl border border-blue-400 opacity-0 group-hover:opacity-100 blur-md transition"></div>

<h3 className="text-xl font-semibold text-white mb-6">
Tools & Platforms
</h3>

<div className="flex flex-wrap gap-3">

<span className="skill group-hover:text-orange-500">
<FaGitAlt/> Git
</span>

<span className="skill">🐙 GitHub</span>

<span className="skill group-hover:text-blue-400">
<SiDocker/> Docker
</span>

<span className="skill">▲ Vercel</span>

</div>
</motion.div>

</div>

</div>

</motion.section>

);
}