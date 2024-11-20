import React from 'react';

interface GuideItem {
  title: string;
  description: string;
  icon: string;
}

const guides: GuideItem[] = [
  {
    title: "Literature Review",
    description: "Learn how to effectively analyze and synthesize existing research in your field.",
    icon: "📚"
  },
  {
    title: "Methodology",
    description: "Step-by-step guidance on research methods and data collection techniques.",
    icon: "🔍"
  },
  {
    title: "Data Analysis",
    description: "Understanding statistical methods and data interpretation approaches.",
    icon: "📊"
  },
  {
    title: "Academic Writing",
    description: "Tips and techniques for clear, concise academic writing and proper citations.",
    icon: "✍️"
  }
];

const ResearchGuides: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Research Guides
          </h1>
          <p className="text-xl text-gray-600">
            Your comprehensive guide to academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{guide.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {guide.title}
              </h3>
              <p className="text-gray-600 flex-grow">
                {guide.description}
              </p>
              <button className="w-full mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Getting Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Schedule a consultation with our research experts to get personalized guidance.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300">
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchGuides;