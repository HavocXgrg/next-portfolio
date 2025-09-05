import React from "react";
import { projects } from "@/Data/data";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const Project = () => {
  return (
    <section id="projects" className="min-h-screen py-2">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-slate-200">
          My Projects
        </h2>
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Renders all  projects from the data file */}
            {projects.map((project) => (
              <ScrollReveal key={project.id}>
                <div className=" p-4 rounded-lg shadow-gray-300 dark:shadow-gray-800 shadow-md  flex flex-col">
                  <div className="relative w-full h-48 sm:h-64 mb-4">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      className="rounded-2xl object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-700 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-700 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-500 flex gap-2 text-white py-2 px-4 rounded hover:bg-purple-700 transition-all "
                    >
                      Live View <ExternalLink />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" flex justify-center items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition-all"
                    >
                      GitHub <FiGithub />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* A Placeholder that renders if the no. of projects is odd and for bigger screen than sm:*/}
            {projects.length % 2 !== 0 && (
              <ScrollReveal>
                <div className="hidden p-4 rounded-lg shadow-md sm:flex flex-col items-center justify-center h-full min-h-[450px] border-2 border-dashed border-gray-300 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                    More Projects
                  </h3>
                  <p className="text-gray-400 dark:text-gray-500">
                    Coming Soon...
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Project;
