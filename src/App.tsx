import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FeatureCard from './components/FeatureCard';
import { FaEnvelope, FaFacebook, FaGlobe, FaPhone } from 'react-icons/fa';
import ChatBox from './components/ChatBox'; // Import the ChatBox component

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'images/1.jpg',
    'images/4.jpg',
    'images/3.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const features = [
    {
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>,
      title: "Digital Library",
      description: "Access thousands of e-books, journals, and academic papers from anywhere, anytime.",
    },
    {
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>,
      title: "Research Support",
      description: "Expert assistance with research methodologies and academic writing guidance.",
    },
    {
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>,
      title: "Collaborative Space",
      description: "Modern study areas designed for both individual focus and group collaboration.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20 pb-16">

        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-12 relative">
          <div
            className="rounded-3xl shadow-2xl p-8 md:p-16 text-white relative overflow-hidden"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              animation: 'fadeIn 10s infinite', // Background animation
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
            <div className="relative z-10 text-center">
              <img src="/CIT.png" alt="CIT Logo" className="w-32 h-auto mx-auto mb-4" />
              <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-4 text-shadow-lg">Caraga Institute of Technology</h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-shadow-lg">Library System</h3>
              <p className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto">
                Empowering your academic journey with easy access to resources and expert guidance.
              </p>
              <button className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                Explore Resources
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

       {/* Latest News Section */}
          {/* Latest News Section */}
          <section className="container mx-auto px-4 mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Latest News</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img src="images/news.jpg" alt="News Image" className="w-full h-64 object-cover object-[center_30%] rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">New Research Materials Added</h3>
              <p className="text-gray-600 mt-2">We have added a new collection of research papers to our digital library.</p>
            </div>
          </section>

          {/* Events Section */}
          <section className="container mx-auto px-4 mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Upcoming Events</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img src="images/events.jpg" alt="Event Image" className="w-full h-64 object-cover object-[center_15%] rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Book Reading Event</h3>
              <p className="text-gray-600 mt-2">Join us for an exciting book reading session by our featured author.</p>
            </div>
          </section>

        {/* How To Section */}
        <section className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">How Do I?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800">Request a Book</h3>
              <p className="text-gray-600 mt-2">Learn how to request books from the library's digital collection.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800">Reserve a Study Room</h3>
              <p className="text-gray-600 mt-2">Find out how to reserve a study room for your group study sessions.</p>
            </div>
          </div>
        </section>

{/* Contact Section */}
<section className="bg-red-600 text-white py-8">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
    <p className="text-lg mb-6">Feel free to reach out for any inquiries or support requests.</p>
    <div className="flex flex-wrap justify-center gap-12">
      {/* Email Icon with Contact Info (Non-clickable) */}
      <div className="text-center mb-8 sm:mb-0 w-full sm:w-auto">
        <FaEnvelope className="w-8 h-8 text-white mx-auto" />
        <div className="text-white mt-2">info@cit.edu.ph</div>
      </div>

      {/* Facebook Icon with Contact Info (Non-clickable) */}
      <div className="text-center mb-8 sm:mb-0 w-full sm:w-auto">
        <FaFacebook className="w-8 h-8 text-white mx-auto" />
        <div className="text-white mt-2">https://facebook.com/cit.edu.ph</div>
      </div>

      {/* Website Icon with Contact Info (Non-clickable) */}
      <div className="text-center mb-8 sm:mb-0 w-full sm:w-auto">
        <FaGlobe className="w-8 h-8 text-white mx-auto" />
        <div className="text-white mt-2">https://www.cit.edu.ph</div>
      </div>

      {/* Phone Icon with Contact Info (Non-clickable) */}
      <div className="text-center mb-8 sm:mb-0 w-full sm:w-auto">
        <FaPhone className="w-8 h-8 text-white mx-auto" />
        <div className="text-white mt-2">+63 912 345 6789</div>
      </div>
    </div>
  </div>
</section>


      </main>
      {/* Add ChatBox */}
      <ChatBox />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Caraga Institute of Technology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
