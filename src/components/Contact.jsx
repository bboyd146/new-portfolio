import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null); // To store the status of the email
  const [loading, setLoading] = useState(false); // To track submission loading

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation

    emailjs.sendForm('service_acywv7e', 'template_qojlol4', form.current, 'RzRiwov_7c0eSZqry')
      .then((result) => {
          console.log(result.text);
          setStatus('success'); // Set status to success
      }, (error) => {
          console.log(error.text);
          setStatus('error'); // Set status to error
      })
      .finally(() => {
        setLoading(false); // Stop loading after submission
        e.target.reset();  // Reset the form
      });
  };

  return (
    <div className="max-w-sm mx-auto">
      <form ref={form} onSubmit={sendEmail} className="bg-gray-800 p-6 rounded-lg glow-card shadow-glow">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-white">Name</label>
          <input type="text" id="name" name="user_name" className="w-full border border-gray-300 rounded px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-white">Email</label>
          <input type="email" id="email" name="user_email" className="w-full border border-gray-300 rounded px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-white">Message</label>
          <textarea id="message" name="message" className="w-full border border-gray-300 rounded px-3 py-2" required></textarea>
        </div>
        <button
          type="submit"
          className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>

      {/* Success or Error Message */}
      {status === 'success' && (
        <div className="mt-4 flex items-center justify-center text-green-500 animate-bounce">
          <FaCheckCircle className="text-3xl mr-2" />
          <span>Email sent successfully!</span>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-4 flex items-center justify-center text-red-500 animate-shake">
          <FaExclamationCircle className="text-3xl mr-2" />
          <span>Failed to send email. Please try again.</span>
        </div>
      )}
    </div>
  );
}

export default Contact;
