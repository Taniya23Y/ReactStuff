import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://image.shutterstock.com/image-photo/abstract-blurred-education-classroom-concept-260nw-1681446410.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-md text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Who We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-xl leading-relaxed">
              We are a passionate team of educators and industry professionals
              dedicated to empowering individuals with the skills and knowledge
              they need to excel in the ever-evolving field of technology. Our
              mission is to make high-quality education accessible to everyone,
              regardless of their background or experience level.
            </p>
            <p className="text-xl leading-relaxed">
              With a focus on practical, hands-on learning, we offer a wide
              range of courses in areas such as web development, data science,
              cybersecurity, and more. Our instructors are experts in their
              fields, bringing real-world experience into the classroom to
              ensure you gain the skills employers are looking for.
            </p>
          </div>

          {/* Image Content */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://image.shutterstock.com/image-photo/group-students-having-talk-smiling-260nw-1041101094.jpg"
              alt="Our Team"
              className="w-full h-64 object-cover transform transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-60 hover:opacity-40 transition duration-500"></div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
        <div className="text-xl leading-relaxed max-w-3xl mx-auto text-center">
          <p>
            Our mission is to provide high-quality, accessible tech education
            that equips learners with the skills they need to succeed in their
            careers. We believe in the power of education to change lives, and
            we are committed to helping our students achieve their full
            potential.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              src="https://image.shutterstock.com/image-photo/portrait-happy-successful-businesswoman-crossing-260nw-1125703185.jpg"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold">Jane Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <img
              src="https://image.shutterstock.com/image-photo/portrait-confident-young-businessman-standing-260nw-786013160.jpg"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold">John Smith</h3>
            <p className="text-gray-600">Head of Education</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <img
              src="https://image.shutterstock.com/image-photo/successful-handsome-businessman-crossing-arms-260nw-789175648.jpg"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold">Emily Johnson</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
