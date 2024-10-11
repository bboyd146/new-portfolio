import React from "react";
import me from "../assets/me.jpg";

const AboutMe = () => {
	return (
		<div className="bg-gray-800 p-6 shadow-glow rounded-lg glow-card  transition-transform transform hover:scale-105">
			<h2 className="text-2xl md:text-3xl mb-4 text-center text-white font-bold">
				About Me
			</h2>

			<div className="flex justify-center mb-4">
				<img
					src={me} // Update this path to the correct location where your image is stored
					alt="About Me"
					className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-blue-400 glow-effect"
				/>
			</div>
			<p className="text-white text-lg">
				Full Stack Web Developer with 5 years of experience in designing,
				developing, and implementing innovative applications. Adept at utilizing
				technologies such as SQL, Mongo Atlas, and GraphQL to create
				user-centric solutions. Thrives in team-oriented environments,
				consistently contributing to organizational goals and mentoring new
				developers.
			</p>
		</div>
	);
};

export default AboutMe;
