import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import workExperiences from "@/data/workExperiences";
import { SectionProps } from "./types";
import Tag from "../Tag";
import { IWorkExperience } from "@/types/workExperience";

interface WorkExperienceProps extends SectionProps {}

const WorkExperience: React.FC<WorkExperienceProps> = ({ sectionRef }) => {
  return (
    <section id="work-experience-section" ref={sectionRef} className="relative">
      <div className="max-w-7xl w-full mx-auto">
        <h1 className="text-yellow-700 text-4xl sm:text-5xl font-semibold text-center py-16">
          Work Experience
        </h1>

        <div className="px-4 sm:px-16 pb-16">
          {/* Desktop/Tablet Timeline View */}
          <div className="hidden md:block">
            <VerticalTimeline lineColor="transparent">
              {workExperiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.id}
                  className="vertical-timeline-element--work custom-timeline-element group hover:scale-105 transition-all duration-300"
                  contentStyle={{
                    background: "inherit",
                    color: "inherit",
                    boxShadow: "none",
                    borderRadius: "16px",
                    border: "none",
                    position: "relative",
                    zIndex: 2,
                  }}
                  contentArrowStyle={{ borderRight: "7px solid #eab308" }}
                  iconStyle={{
                    background: "#eab308",
                    color: "#fff",
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  icon={<span>{experience.icon}</span>}
                  date={`${experience.startDate} - ${experience.endDate}`}
                  dateClassName="text-yellow-700 font-semibold"
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative group flat-shadow-card"
                  >
                    {/* Shadow layer */}
                    <div className="absolute inset-0 rounded-2xl border border-yellow-500 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content layer */}
                    <div className="relative border border-yellow-500 rounded-2xl bg-white p-6 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                        {experience.title}
                      </h3>
                      <h4 className="text-md font-semibold text-yellow-700 mb-1 group-hover:text-yellow-800 transition-colors duration-300">
                        {experience.company}
                      </h4>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                          📍 {experience.location}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="bg-orange-100 text-orange-800 text-xs px-2.5 py-0.5 rounded border border-orange-200 leading-none group-hover:bg-orange-200 group-hover:border-orange-300 transition-colors duration-300">
                          {experience.workMode}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">Key Responsibilities:</h5>
                        <ul className="space-y-1 text-gray-700">
                          {experience.description.map((item: string, idx: number) => (
                            <li key={idx} className="text-sm flex items-start group-hover:text-gray-800 transition-colors duration-300">
                              <span className="mr-2">✨</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">Technologies:</h5>
                        <div className="flex flex-wrap gap-y-2">
                          {experience.technologies.map((tech: string, idx: number) => (
                            <Tag key={idx} text={tech} variant="technology" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {workExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group flat-shadow-card"
              >
                {/* Shadow layer */}
                <div className="absolute inset-0 rounded-2xl border border-yellow-500 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content layer */}
                <div className="relative border border-yellow-500 rounded-2xl bg-white p-6 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-lg">
                  {/* Date with left margin for mobile */}
                  <div className="text-yellow-700 font-semibold text-sm mb-4">
                    {experience.startDate} - {experience.endDate}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                    {experience.title}
                  </h3>
                  <h4 className="text-md font-semibold text-yellow-700 mb-1 group-hover:text-yellow-800 transition-colors duration-300">
                    {experience.company}
                  </h4>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                      📍 {experience.location}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="bg-orange-100 text-orange-800 text-xs px-2.5 py-0.5 rounded border border-orange-200 leading-none group-hover:bg-orange-200 group-hover:border-orange-300 transition-colors duration-300">
                      {experience.workMode}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">Key Responsibilities:</h5>
                    <ul className="space-y-1 text-gray-700">
                      {experience.description.map((item: string, idx: number) => (
                        <li key={idx} className="text-sm flex items-start group-hover:text-gray-800 transition-colors duration-300">
                          <span className="mr-2">✨</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">Technologies:</h5>
                    <div className="flex flex-wrap gap-y-2">
                      {experience.technologies.map((tech: string, idx: number) => (
                        <Tag key={idx} text={tech} variant="technology" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 