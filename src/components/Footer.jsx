// Footer.js

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
return (
	<footer className="mt-auto py-20 w-full text-center">
	<div className="flex justify-center space-x-6">
		{/* LinkedIn Icon */}
		<a
		href="https://www.linkedin.com/in/bradleydboyd/"
		target="_blank"
		rel="noopener noreferrer"
		className="text-purple-400 hover:text-purple-600 transition duration-300"
		>
		<FaLinkedin size="70px" />
		</a>

		{/* GitHub Icon */}
		<a
		href="https://github.com/bboyd146"
		target="_blank"
		rel="noopener noreferrer"
		className="text-purple-400 hover:text-purple-600 transition duration-300"
		>
		<FaGithub size="70px" />
		</a>
	</div>

	<div className="container mx-auto px-6 items-center pt-6">
		<p className="text-sm text-white font-bold mb-2">
		© 2024 by Bradley Boyd
		</p>
	</div>
	</footer>
);
};

export default Footer;
