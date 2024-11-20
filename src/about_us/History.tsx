import { FC } from "react";
import { FaHistory, FaBookOpen, FaMedal, FaLandmark, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
  quote?: string;
}

const History: FC = () => {
  const milestones: Milestone[] = [
    {
      year: "1964",
      title: "Foundation",
      description: "The library was established with a modest collection of 1,000 books, serving as a cornerstone for academic excellence.",
      image: "/images/5.jpg",
      quote: "Every great institution starts with a single step forward."
    },
    {
      year: "1980",
      title: "Major Expansion",
      description: "Underwent significant expansion with a new building, increasing capacity to serve more students and faculty.",
      image: "/images/3.jpg",
      quote: "Growth is not just about size, but about impact."
    },
    {
      year: "1995",
      title: "Digital Revolution",
      description: "Introduced computerized catalog system and digital resources, marking our entry into the digital age.",
      image: "/images/4.jpg",
      quote: "Embracing change is the key to staying relevant."
    },
    {
      year: "2010",
      title: "Modern Era",
      description: "Complete renovation and modernization of facilities, including state-of-the-art technology integration.",
      image: "/images/library.jpg",
      quote: "Innovation is our tradition."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-block p-4 bg-red-50 rounded-full mb-6 transform hover:rotate-12 transition-transform duration-300">
            <FaHistory className="w-10 h-10 text-red-500" />
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Journey Through Time</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the remarkable evolution of our institution, from humble beginnings to a beacon of knowledge and innovation.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-200 via-red-400 to-red-600"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-center mb-24 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:ml-12" : "md:mr-12"}`}>
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-red-400 to-red-600 rounded-xl shadow-lg">
                      <FaLandmark className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-3xl font-bold text-gray-800">{milestone.year}</h3>
                      <p className="text-red-500 font-semibold text-lg">{milestone.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{milestone.description}</p>
                  {milestone.quote && (
                    <div className="border-l-4 border-red-400 pl-4 italic text-gray-600">
                      <FaQuoteLeft className="w-4 h-4 text-red-400 mb-2" />
                      <p>{milestone.quote}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 mt-8 md:mt-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="my-8 md:my-0 w-12 h-12 flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 rounded-full border-4 border-white shadow-xl z-10 transform hover:scale-110 transition-transform duration-200"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-32"
        >
          <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-3xl shadow-2xl p-12 text-white transform hover:-translate-y-2 transition-transform duration-300">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: <FaBookOpen className="w-8 h-8" />, label: "Books Collection", value: "50K+" },
                { icon: <FaMedal className="w-8 h-8" />, label: "Years of Excellence", value: "60" },
                { icon: <FaHistory className="w-8 h-8" />, label: "Major Milestones", value: "4" },
              ].map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-105 transition-transform duration-200">
                  <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 inline-block mb-6">
                    {stat.icon}
                  </div>
                  <h4 className="text-6xl font-bold mb-3">{stat.value}</h4>
                  <p className="text-xl opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default History;