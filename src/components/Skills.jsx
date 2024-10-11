import React from "react";
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaCuttlefish,
  FaBootstrap,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";

const skillsData = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "React", icon: <FaReact /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C++", icon: <FaCuttlefish /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "MySQL", icon: <FaDatabase /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "Node.js", icon: <FaNodeJs /> },
];

function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className="bg-gray-800 shadow-glow glow-skill-card p-4 rounded-lg text-center border border-blue-400 transition-transform transform hover:scale-105"
        >
          <div className="text-4xl mb-2 text-blue-400">{skill.icon}</div>
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Skills;
