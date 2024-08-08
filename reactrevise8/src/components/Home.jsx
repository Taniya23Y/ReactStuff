import React from "react";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://www.educative.io/v2api/collection/10370001/6183662013323264/image/6170341238056960')",
        }}
      >
        <div className="bg-white bg-opacity-90 p-10 rounded-md shadow-lg text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">
            Learn & Master Technology
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Explore our wide range of tech courses and take the first step
            towards becoming a tech expert. Learn at your own pace with
            industry-leading instructors.
          </p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
            <img
              src="https://image.shutterstock.com/image-photo/programming-code-abstract-technology-background-260nw-1651058103.jpg"
              alt="Web Development"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-700 leading-relaxed">
              Learn how to build websites and web applications from scratch
              using HTML, CSS, JavaScript, and modern frameworks like React and
              Angular.
            </p>
          </div>
          {/* Course Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
            <img
              src="https://image.shutterstock.com/image-photo/coding-software-developer-workflow-dashboard-260nw-1455332749.jpg"
              alt="Data Science"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Data Science</h3>
            <p className="text-gray-700 leading-relaxed">
              Master data analysis, visualization, and machine learning with our
              comprehensive data science courses. Learn Python, R, SQL, and
              more.
            </p>
          </div>
          {/* Course Card 3 */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
            <img
              src="https://image.shutterstock.com/image-photo/modern-computer-technologies-abstract-260nw-1682337089.jpg"
              alt="Cybersecurity"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Cybersecurity</h3>
            <p className="text-gray-700 leading-relaxed">
              Learn how to protect networks, systems, and data from cyber
              threats. Get hands-on experience with ethical hacking, encryption,
              and more.
            </p>
          </div>
          {/* Course Card 4 */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
            <img
              src="https://image.shutterstock.com/image-photo/artificial-intelligence-concept-big-data-260nw-1658127168.jpg"
              alt="Artificial Intelligence"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Artificial Intelligence
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dive into AI and machine learning. Learn how to create intelligent
              systems and develop AI-driven applications.
            </p>
          </div>
          {/* Course Card 5 */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
            <img
              src="https://image.shutterstock.com/image-photo/cloud-computing-concept-modern-digital-260nw-1040786118.jpg"
              alt="Cloud Computing"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Cloud Computing</h3>
            <p className="text-gray-700 leading-relaxed">
              Learn the fundamentals of cloud computing and get hands-on with
              AWS, Azure, and Google Cloud to deploy scalable applications.
            </p>
          </div>
          {/* Course Card 6 */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
            <img
              src="https://image.shutterstock.com/image-photo/ux-graphic-designer-brainstorming-about-260nw-1613282356.jpg"
              alt="UI/UX Design"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-700 leading-relaxed">
              Learn the principles of user interface and user experience design.
              Create beautiful and functional digital products with our UI/UX
              courses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
