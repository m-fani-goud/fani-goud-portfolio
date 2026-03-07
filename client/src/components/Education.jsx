import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {

  const education = [

    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Data Science",
      school: "TKR College of Engineering and Technology, Hyderabad",
      year: "2021 – 2025",
      score: "CGPA: 7.4 / 10",
    },

    {
      degree: "Intermediate (MPC)",
      field: "Synapse Junior College",
      school: "Miryalaguda",
      year: "2021",
      score: "Marks: 918 / 1000",
    },

    {
      degree: "Secondary School Certificate (SSC)",
      field: "Word and Deed High School",
      school: "Miryalaguda",
      year: "2019",
      score: "GPA: 10 / 10",
    },

  ];

  return (

    <motion.section
      id="education"
      className="relative py-32 px-6 bg-stone-900 overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      {/* Background glow */}

      <div className="absolute -top-40 left-[-12rem] w-[30rem] h-[30rem] bg-indigo-500/10 blur-[180px]" />

      <div className="absolute bottom-[-12rem] right-[-12rem] w-[30rem] h-[30rem] bg-pink-500/10 blur-[180px]" />

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}

        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Education
        </h2>

        <p className="mt-6 text-gray-400 text-center max-w-2xl mx-auto">
          My academic journey that built my foundation in computer science,
          problem solving, and software development.
        </p>

        {/* Timeline */}

        <div className="mt-20 relative border-l border-white/10 pl-10 space-y-14">

          {education.map((edu, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="relative group"
            >

              {/* Neon Timeline Dot */}

              <div className="absolute -left-[46px] top-2 w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />

              {/* Card Wrapper for Neon Border */}

              <div className="relative p-[2px] rounded-3xl overflow-hidden">

                {/* Neon Border Glow */}

                <div className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-indigo-500
                  via-pink-500
                  to-yellow-400
                  opacity-0
                  group-hover:opacity-100
                  blur-md
                  transition
                "></div>

                {/* Card */}

                <div className="
                  relative
                  p-8
                  rounded-3xl
                  bg-stone-950/70
                  border border-white/10
                  backdrop-blur
                  group-hover:border-white/20
                  transition
                ">

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                    <div>

                      <h3 className="text-xl font-medium text-white">
                        {edu.degree}
                      </h3>

                      <p className="mt-1 text-gray-300">
                        {edu.field}
                      </p>

                      <p className="mt-1 text-gray-400 text-sm">
                        {edu.school}
                      </p>

                    </div>

                    <div className="text-left md:text-right">

                      <p className="text-gray-300 font-medium">
                        {edu.year}
                      </p>

                      <p className="mt-1 text-gray-400">
                        {edu.score}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>

  );

}