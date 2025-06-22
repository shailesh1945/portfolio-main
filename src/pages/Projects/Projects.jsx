import { motion } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Personal Path - Personalized Learning Pathway Website",
    description:
      "Personal Path is a personalized learning pathway generator built for engineering students. Whether you're unsure about your interests or already know the technology you want to learn, this tool helps you find the best way forward with structured and smartly curated learning paths.",
    image: "/images/pr.png",
    color: "#5196fd",
    githubLink: "https://github.com/shailesh1945/Personal-Path",
    liveLink: "",
  },
  {
    title: "Vidyotan - College Tech Fest App",
    description:
      "Vidyotan is an Android app which serves as a platform for students and participants to stay updated with the events, workshops, competitions, and other activities happening during the college's tech fest.",
    image: "/images/Vidyotanm.png",
    color: "#8f89ff",
    githubLink: "https://github.com/shailesh1945/Vidyotan2k24",
    liveLink: "",
  },
  {
    title: "NekoNote - Notes App",
    description:
      "NekoNote is an Android app for taking personal notes this is built using Kotlin with MVVM architecture and a sleek UI.",
    image: "/images/notes.png",
    color: "#fff",
    githubLink: "https://github.com/shailesh1945",
    liveLink: "",
  },
  // {
  //   title: "CodeKori 🔥",
  //   description:
  //     "CodeKori is a powerful online code editor built with React and Tailwind CSS. Featuring real-time code execution, syntax highlighting, multi-language support, and a sleek UI. Start coding instantly! 💻✨",
  //   link: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
  //   color: "#ed649e",
  //   githubLink: "https://github.com/seraprogrammer/CodeKori",
  //   liveLink: "",
  // },
];

export default function Projects() {
  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore some of the projects I've built, showcasing creativity,
            logic, and passion for coding.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <Card key={i} i={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ i, title, description, image, color, githubLink, liveLink }) {
  const container = useRef(null);

  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      whileHover={{
        y: -12,
        scale: 1.02,
        boxShadow: "0 12px 30px rgba(0, 255, 255, 0.15)",
      }}
      className="flex items-center justify-center transition-transform duration-300"
    >
      <motion.div className="relative w-full md:w-full lg:w-full xl:w-full bg-zinc-900/60 backdrop-blur-md rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-cyan-400 hover:ring-2 transition-all duration-300 shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Image Side */}
          <div className="w-full md:w-[60%] h-[350px] md:h-[500px] lg:h-[600px] relative overflow-hidden bg-black flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden bg-gray-800 flex items-center justify-center">
              {/* Blurred Background (behind image) */}
              <img
                src={image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-110"
              />

              {/* Actual image (on top) */}
              <motion.img
                src={image}
                alt={title}
                className="relative z-10 max-w-full max-h-full object-contain"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(120deg, ${color} 0%, transparent 80%)`,
                mixBlendMode: "overlay",
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-20 bg-gray-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {title}
              </h2>
              <p className="text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-6" />
              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="text-sm font-medium" style={{ color }}>
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                {liveLink && (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span className="text-sm font-medium" style={{ color }}>
                      Live
                    </span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
};
