"use client";

import React, { useRef, useState } from "react";
import { PROJECTS_DATA } from "../data";
import { useInView, motion } from "framer-motion";

function Projects() {
  const [tag, setTag] = useState("All");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const filteredProjects = PROJECTS_DATA.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section
      id="projects"
      className="container mx-auto mt-10 px-6 lg:px-12 py-6"
    >
      <h2 className="text-center text-4xl font-bold text-white mb-10">
        My Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center items-center gap-4 mb-10 flex-wrap">
        {["All", "Structural", "Architectural"].map((tagName) => (
          <button
            key={tagName}
            onClick={() => setTag(tagName)}
            className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
              tag === tagName
                ? "border-[#00ADB5] bg-[#00ADB5] text-white"
                : "border-gray-600 text-gray-300 hover:border-white hover:text-white"
            }`}
          >
            {tagName}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <ul
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            className="bg-[#181818] rounded-xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <div
              className="h-56 md:h-64  transition-transform duration-500 hover:scale-110"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {project.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;