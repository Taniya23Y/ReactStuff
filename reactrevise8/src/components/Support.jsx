import React from "react";

function Support() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-80 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://image.shutterstock.com/image-photo/support-contact-customer-service-260nw-1179421363.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-md text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Support</h1>
          <p className="text-xl mt-4">We are here to help you!</p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Information
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center">
            <img
              src="https://image.shutterstock.com/image-photo/contact-icon-260nw-1918034811.jpg"
              alt="Email"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-gray-600">support@yourwebsite.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://image.shutterstock.com/image-photo/phone-icon-260nw-1746125984.jpg"
              alt="Phone"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="text-gray-600">+1-800-123-4567</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-semibold">
              How can I reset my password?
            </h3>
            <p className="text-gray-600">
              To reset your password, go to the login page and click on "Forgot
              Password." Follow the instructions to reset your password via
              email.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Where can I find the status of my order?
            </h3>
            <p className="text-gray-600">
              You can track the status of your order by logging into your
              account and going to the "Orders" section.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              How do I update my account information?
            </h3>
            <p className="text-gray-600">
              To update your account information, log in to your account and
              navigate to the "Account Settings" page.
            </p>
          </div>
        </div>
      </div>

      {/* Support Form Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
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

export default Support;
