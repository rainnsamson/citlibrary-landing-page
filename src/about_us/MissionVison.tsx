import { FC } from "react";
import { FaLightbulb, FaEye, FaBullseye, FaChartLine } from "react-icons/fa";

const MissionVision: FC = () => {
  const coreValues = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Embracing new technologies and methods to enhance learning",
    },
    {
      icon: <FaChartLine />,
      title: "Excellence",
      description: "Striving for the highest standards in academic services",
    },
    {
      icon: <FaBullseye />,
      title: "Integrity",
      description: "Maintaining ethical standards and professional conduct",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Vision Section */}
        <div className="text-center mb-24 pt-10">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
            <FaEye className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              To be the premier academic library, fostering a culture of innovation and excellence
              in learning, research, and information services that empowers our academic community
              to achieve greater heights in knowledge and discovery.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-10 md:p-14 mb-24">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to providing exceptional library and information services through
                innovative resources, technology, and facilities. We aim to support academic
                excellence, foster learning and research, and contribute to the intellectual growth
                of our community.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
                  <span className="text-red-600 text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Goals */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-10 md:p-14 text-white">
          <h2 className="text-3xl font-bold text-center mb-10">Strategic Goals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold">1</span>
              </div>
              <p className="text-lg">Enhance digital resources and technological infrastructure</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold">2</span>
              </div>
              <p className="text-lg">Develop innovative services and programs</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold">3</span>
              </div>
              <p className="text-lg">Foster collaboration and community engagement</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold">4</span>
              </div>
              <p className="text-lg">Promote information literacy and research excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
