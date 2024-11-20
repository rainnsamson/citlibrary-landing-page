import { FC } from 'react';
import { FaBook, FaClock, FaUsers, FaClipboardList, FaGlobe, FaBookReader } from 'react-icons/fa';
import ChatBox from '../components/ChatBox';

const LibraryGuide: FC = () => {
  const libraryCollections = [
    {
      icon: <FaBook className="w-8 h-8 text-white" />,
      title: "General Reference",
      description: "Comprehensive collection of manuals, encyclopedias, almanacs, maps, atlases, yearbooks, and dictionaries.",
      bgColor: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaBookReader className="w-8 h-8 text-white" />,
      title: "Reserved Section",
      description: "Specially curated books reserved for classroom lessons and academic requirements.",
      bgColor: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaUsers className="w-8 h-8 text-white" />,
      title: "Filipiniana Section",
      description: "Rich collection of books written by Filipinos or about the Philippines, celebrating our cultural heritage.",
      bgColor: "from-red-500 to-red-600"
    },
    {
      icon: <FaClipboardList className="w-8 h-8 text-white" />,
      title: "Periodical Section",
      description: "Latest newspapers, academic journals, magazines, and regular publications.",
      bgColor: "from-green-500 to-green-600"
    },
    {
      icon: <FaClock className="w-8 h-8 text-white" />,
      title: "Circulation Section",
      description: "Borrowable reference books available for daily checkout with flexible renewal options.",
      bgColor: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <FaGlobe className="w-8 h-8 text-white" />,
      title: "Internet Services",
      description: "Modern computer facilities with high-speed internet access for research and academic purposes.",
      bgColor: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white py-16">
        <div className="text-center px-4 mb-6 pt-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Library Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the various services we offer to enhance your learning and research experience.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-4 py-6 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {libraryCollections.map((collection, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className={`p-6 bg-gradient-to-r ${collection.bgColor} text-white`}>
                <div className="flex items-center space-x-4">
                  {collection.icon}
                  <h3 className="text-xl font-semibold">{collection.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our Library?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <FaBook className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Extensive Collection</h3>
              <p className="text-gray-600">Access to thousands of books, journals, and digital resources</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <FaUsers className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Expert Guidance</h3>
              <p className="text-gray-600">Professional librarians to assist with your research needs</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <FaGlobe className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art technology and comfortable study spaces</p>
            </div>
          </div>
        </div>
      </div>

      {/* ChatBox */}
      <ChatBox />
    </div>
  );
};

export default LibraryGuide;
