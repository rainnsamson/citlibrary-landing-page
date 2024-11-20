import { FC, useState } from "react";
import { FaDatabase, FaSearch, FaGlobe, FaVideo, FaHeadphones, FaBook, FaNewspaper, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface Resource {
  id: string;
  title: string;
  type: string;
  description: string;
  thumbnail: string;
  accessLink: string;
  format: string;
  fileSize?: string;
  lastUpdated: string;
  popularity: number;
}

const DigitalResources: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveType] = useState("all");

  const resources: Resource[] = [
    {
      id: "1",
      title: "Academic Research Database",
      type: "Database",
      description: "Access millions of peer-reviewed articles and academic papers across multiple disciplines.",
      thumbnail: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=400",
      accessLink: "#",
      format: "Online Database",
      lastUpdated: "2023-10-15",
      popularity: 95
    },
    {
      id: "2",
      title: "Digital Learning Videos",
      type: "Video",
      description: "High-quality educational videos covering various subjects and topics.",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=400",
      accessLink: "#",
      format: "MP4",
      fileSize: "2.5 GB",
      lastUpdated: "2023-10-10",
      popularity: 88
    },
    {
      id: "3",
      title: "E-Book Collection",
      type: "E-Book",
      description: "Extensive collection of digital books spanning multiple genres and subjects.",
      thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=400",
      accessLink: "#",
      format: "PDF/EPUB",
      lastUpdated: "2023-10-12",
      popularity: 92
    },
    {
      id: "4",
      title: "Digital Newspapers Archive",
      type: "Archive",
      description: "Historical newspaper archives dating back to the early 1900s.",
      thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=400",
      accessLink: "#",
      format: "PDF",
      lastUpdated: "2023-10-08",
      popularity: 85
    },
    {
      id: "5",
      title: "Language Learning Audio",
      type: "Audio",
      description: "Audio lessons for multiple languages with native speaker pronunciations.",
      thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400",
      accessLink: "#",
      format: "MP3",
      fileSize: "1.2 GB",
      lastUpdated: "2023-10-14",
      popularity: 90
    },
    {
      id: "6",
      title: "Research Journals",
      type: "Journal",
      description: "Latest research publications from leading academic journals.",
      thumbnail: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
      accessLink: "#",
      format: "PDF",
      lastUpdated: "2023-10-13",
      popularity: 87
    }
  ];

  const resourceTypes = ["all", ...new Set(resources.map(resource => resource.type))];

  const getIcon = (type: string) => {
    switch (type) {
      case "Database": return <FaDatabase />;
      case "Video": return <FaVideo />;
      case "E-Book": return <FaBook />;
      case "Archive": return <FaNewspaper />;
      case "Audio": return <FaHeadphones />;
      case "Journal": return <FaGlobe />;
      default: return <FaBook />;
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = activeType === "all" || resource.type === activeType;
    return matchesSearch && matchesType;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50 py-16 px-4">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 bg-indigo-50 rounded-full mb-6">
            <FaDatabase className="w-10 h-10 text-indigo-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Digital Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access our comprehensive collection of digital resources, from academic databases to multimedia content.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {resourceTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    activeType === type
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-600 hover:bg-indigo-50"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredResources.map((resource) => (
            <motion.div
              key={resource.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white/90 mb-2">
                      <span className="mr-2">{getIcon(resource.type)}</span>
                      <span className="text-sm">{resource.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{resource.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                    {resource.format}
                  </span>
                  {resource.fileSize && (
                    <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm">
                      {resource.fileSize}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Updated: {resource.lastUpdated}
                  </div>
                  <a
                    href={resource.accessLink}
                    className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                  >
                    <span className="mr-2">Access</span>
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No resources found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalResources;