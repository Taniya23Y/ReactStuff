import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  // move to labs page
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/labs");
  }
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-80 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542744093-e68e432634a4')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-md text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-xl mt-4">We'd love to hear from you!</p>
        </div>
      </div>

      <div className="mx-auto bg-black text-[#de1414] w-2/12">
        <button className="rounded-md p-5" onClick={clickHandler}>
          Move to Labs Page
        </button>
      </div>

      {/* Contact Information Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center">
            <img
              src="https://image.shutterstock.com/image-photo/email-icon-260nw-1063562272.jpg"
              alt="Email"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-600">contact@yourwebsite.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://image.shutterstock.com/image-photo/phone-icon-260nw-1548826226.jpg"
              alt="Phone"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-600">+1-800-123-4567</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://image.shutterstock.com/image-photo/location-pin-icon-260nw-1154687831.jpg"
              alt="Address"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-gray-600">1234 Main St, City, State, 12345</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Send Us a Message
        </h2>
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

      {/* Map Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.119549053393!2d-122.39820138468178!3d37.79170827975809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a5dc47a55%3A0x8e831cae8efc6bd2!2s1234%20Main%20St%2C%20San%20Francisco%2C%20CA%2094140!5e0!3m2!1sen!2sus!4v1615241960158!5m2!1sen!2sus"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
