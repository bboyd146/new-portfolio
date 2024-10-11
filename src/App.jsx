import { React, useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import { projects } from "./projects";
import resume from "./assets/resume.pdf"
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function App() {
  const [showResume, setShowResume] = useState(false); // State to toggle resume visibility

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether the animation should happen only once - while scrolling down
    });
  }, []);

  const handleResumeToggle = () => {
    setShowResume(!showResume); // Toggle the resume visibility
  };

  return (
    <div className="bg-dark animate-gradient-x bg-gradient-to-r from-blue-950 via-purple-900 to-indigo-950 bg-[length:200%_200%] min-h-screen flex flex-col justify-center items-center p-4 md:p-8 stars-container">
      <header
        className="text-4xl md:text-5xl mb-8 text-center text-white pb-44 relative z-10"
        data-aos="fade-down"
      >
        <Typewriter
          options={{
            strings: ["Welcome to My Portfolio"],
            autoStart: true,
            loop: true,
          }}
        />
      </header>

      {/* About Me Section */}
      <section
        className="w-full max-w-xl mb-12 z-10 relative"
        data-aos="fade-up"
      >
        <AboutMe />
        {/* Button to toggle the resume */}
        <div className="text-center mt-20 animate-bounce">
          <button
            onClick={handleResumeToggle}
            className="bg-transparent border-2 border-purple-500 text-purple-300 py-2 px-6 rounded-lg hover:bg-gradient-to-r from-purple-800 via-blue-700 to-indigo-800 hover:border-transparent transition-all duration-300 transform hover:scale-110 shadow-neon"
            >
            {showResume ? "Hide Resume" : "View Resume"}
          </button>
        </div>

        {/* Resume PDF reveal */}
        {showResume && (
          <div className="mt-6 bg-white rounded-lg p-4 shadow-glow transition-all duration-700 ease-in-out overflow-x-auto">
            <iframe
              src={resume}
              width="100%"
              height="700px"
              className="rounded-lg"
              title="Resume PDF"
            ></iframe>
          </div>
        )}
      </section>

      {/* Skills Section */}
      <section
        className="w-full max-w-md mb-12 z-10 relative"
        data-aos="fade-right"
      >
        <h2 className="text-2xl md:text-3xl mb-4 text-center text-white">
          Skills
        </h2>
        <div className="glow-card p-6 rounded-lg transition-transform transform hover:scale-105">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12 z-10 relative" data-aos="fade-left">
        <h2 className="text-2xl md:text-3xl mb-4 text-center text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glow-card p-6 rounded-lg transition-transform transform hover:scale-105"
            >
              <Projects
                title={project.name}
                description={project.desc}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                gHref={project.gHref}
                dHref={project.dHref}
                tech={project.tech}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-md z-10 relative" data-aos="fade-in">
        <h2 className="text-2xl md:text-3xl mb-4 text-center text-white">
          Contact
        </h2>
        <div className="glow-card p-6 rounded-lg transition-transform transform hover:scale-105">
          <Contact />
        </div>
      </section>

      <section className="w-full max-w-md z-10 relative" data-aos="fade-in">
      {/* Footer Component */}
      <Footer /> {/* This will display the footer with LinkedIn and GitHub links */}
    </section>
    </div>
  );
}

export default App;
