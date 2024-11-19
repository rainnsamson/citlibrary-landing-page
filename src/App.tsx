import Navbar from './components/Navbar';
import FeatureCard from './components/FeatureCard';

function App() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Digital Library",
      description: "Access thousands of e-books, journals, and academic papers from anywhere, anytime.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
      title: "Research Support",
      description: "Expert assistance with research methodologies and academic writing guidance.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Collaborative Space",
      description: "Modern study areas designed for both individual focus and group collaboration.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-12">
          <div
            className="rounded-3xl shadow-2xl p-8 md:p-16 text-white relative overflow-hidden"
            style={{
              backgroundImage: "url('/library.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center">
              <img src="/CIT.png" alt="CIT Logo" className="w-32 h-auto mx-auto mb-4" />
              <h2 className="text-6xl md:text-7xl font-bold leading-tight">Caraga Institute of Technology</h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-white">Library System</h3>
              <p className="text-lg md:text-xl mb-8 text-white">
                Empowering your academic journey with easy access to resources and expert guidance.
              </p>
              <button className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-colors duration-300 transform hover:scale-105 shadow-xl">
                Explore Resources
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4">
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
      </main>
    </div>
  );
}

export default App;
