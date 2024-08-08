import React from "react";
import { useNavigate } from "react-router-dom";

function Lab() {
  // move to about page
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/about");
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-80 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560918501-028de6a74aa2')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-md text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Our Lab</h1>
          <p className="text-xl mt-4">Exploring Innovation and Research</p>
        </div>
      </div>

      <div className="mx-auto bg-black text-[#de1414] w-2/12">
        <button className="rounded-md p-5" onClick={clickHandler}>
          Move to About Page
        </button>
      </div>

      {/* Lab Information Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">About Our Lab</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed">
            Welcome to our research lab, where innovation meets practical
            solutions. Our lab focuses on cutting-edge research and development
            in various fields, including technology, science, and engineering.
            We aim to push the boundaries of knowledge and contribute to solving
            real-world problems through our experiments and studies.
          </p>
          <p className="text-lg leading-relaxed">
            Our team consists of highly skilled professionals and researchers
            dedicated to advancing knowledge and technology. We collaborate with
            academic institutions, industry partners, and other research
            entities to drive progress and foster a culture of curiosity and
            discovery.
          </p>
        </div>
      </div>

      {/* Ongoing Experiments Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Ongoing Experiments
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Experiment 1: AI and Machine Learning
            </h3>
            <p className="text-gray-700">
              We are investigating the latest advancements in artificial
              intelligence and machine learning algorithms. Our goal is to
              develop new models and techniques that improve accuracy and
              efficiency in various applications.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Experiment 2: Renewable Energy Solutions
            </h3>
            <p className="text-gray-700">
              Our team is working on innovative solutions for harnessing
              renewable energy sources. We are exploring new technologies and
              methodologies to enhance energy conversion and storage
              capabilities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Experiment 3: Biotechnology Advances
            </h3>
            <p className="text-gray-700">
              We are exploring the latest developments in biotechnology to
              address challenges in healthcare and agriculture. Our research
              focuses on genetic engineering, bioinformatics, and other key
              areas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Experiment 4: Robotics and Automation
            </h3>
            <p className="text-gray-700">
              Our lab is developing cutting-edge robotics and automation
              technologies to revolutionize various industries. We aim to create
              more efficient and intelligent systems that can perform complex
              tasks with precision.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Lab;
