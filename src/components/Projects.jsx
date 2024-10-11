import React from 'react';

function Projects({ title, description, imageSrc, imageAlt, gHref, dHref, tech }) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-glow hover:shadow-xl transition-shadow duration-300 p-6">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <a
          href={gHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105"
        >
          Code
        </a>
        <a
          href={dHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 animate-pulse text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default Projects;
