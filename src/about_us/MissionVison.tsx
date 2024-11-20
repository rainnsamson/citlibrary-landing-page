import { FC } from "react";
import { FaLightbulb, FaEye, FaBullseye, FaChartLine, FaBook, FaUsers, FaGraduationCap, FaCog } from "react-icons/fa";

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

  const strategicGoals = [
    {
      icon: <FaBook />,
      title: "Support Teaching-Learning Process",
      description: "Providing comprehensive resources and services to enhance academic growth",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaUsers />,
      title: "Aid Students with Information",
      description: "Delivering relevant and timely information to support student success",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <FaGraduationCap />,
      title: "Information-Literate Graduates",
      description: "Developing skilled researchers and critical thinkers",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FaCog />,
      title: "Excellence in Service",
      description: "Providing outstanding library services to all users",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const objectives = [
    "Deliver accurate and timely information to all users",
    "Maintain a comprehensive and up-to-date collection",
    "Implement an efficient classification system",
    "Foster a culture of reading and research",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Vision Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-6 animate-pulse">
            <FaEye className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            To become a globally recognized competitive library that produces
            information literate and critical thinker students through quality relevant
            intellectual collections.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-20 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              To provide free and equitable services to meet the information needs of every CITenian; to preserve
              and promote a wide range of quality information sources to facilitate lifelong learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-block p-4 bg-red-100 rounded-full mb-6">
                  <span className="text-red-600 text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Goals Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Strategic Goals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {strategicGoals.map((goal, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-lg bg-gradient-to-r ${goal.color} transform hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex items-center space-x-6">
                  <div className="bg-white p-4 rounded-full">
                    <span className="text-2xl">{goal.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{goal.title}</h3>
                    <p className="text-white/90">{goal.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Objectives Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-xl p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Key Objectives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/10 p-6 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-800 font-bold">{index + 1}</span>
                </div>
                <p className="text-lg">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;