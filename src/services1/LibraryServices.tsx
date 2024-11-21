import { FC, useState } from 'react';
import { FaClock, FaUsers, FaClipboardList, FaQuestionCircle, FaBookReader, FaLaptop, FaPrint, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Accordion Component
const Accordion: FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full px-6 py-4 flex justify-between items-center bg-gradient-to-r from-red-600 to-red-700 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={title.replace(/\s+/g, '-').toLowerCase()}
      >
        <span className="text-lg font-semibold">{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div id={title.replace(/\s+/g, '-').toLowerCase()} className="px-6 py-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

// LibraryServices Component
const LibraryServices: FC = () => {
  const staffMembers = [
    {
      name: "Mrs. Margelie M. Sevilla",
      position: "Head Librarian",
      image: "/images/margelie.jpg",
      email: "margelie.sevilla@cit.edu"
    },
    {
      name: "Ms. Maria Santos",
      position: "Assistant Librarian",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      email: "maria.santos@cit.edu"
    },
    {
      name: "Mr. Jose Garcia",
      position: "Library Assistant",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      email: "jose.garcia@cit.edu"
    }
  ];

  const serviceHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 12:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const services = [
    {
      icon: <FaBookReader className="text-4xl" />,
      title: "Reading & Study Areas",
      description: "Quiet spaces for individual and group study",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaLaptop className="text-4xl" />,
      title: "Digital Resources",
      description: "Access to online journals and databases",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaPrint className="text-4xl" />,
      title: "Printing Services",
      description: "Print, scan, and photocopy facilities",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaQuestionCircle className="text-4xl" />,
      title: "Research Assistance",
      description: "Expert help with research and citations",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/images/library-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering Learning Through Resources
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover our comprehensive library services designed to support your academic journey
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Service Hours Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="flex items-center mb-6">
            <FaClock className="text-3xl text-red-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Service Hours</h2>
          </div>
          <div className="grid gap-4">
            {serviceHours.map((schedule, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-700">{schedule.day}</span>
                <span className="text-lg text-gray-600 bg-red-50 px-4 py-1 rounded-full">
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="flex items-center mb-8">
            <FaUsers className="text-3xl text-red-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl p-6 hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-red-100 group-hover:border-red-200 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-2">{member.position}</p>
                  {member.email && (
                    <p className="text-sm text-gray-500">{member.email}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="flex items-center mb-8">
            <FaClipboardList className="text-3xl text-red-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Library Guidelines</h2>
          </div>
          <LibraryRules />
        </div>
      </div>
    </div>
  );
};

// LibraryRules Component (Modified with Accordion)
const LibraryRules: FC = () => {
  return (
    <div className="space-y-6">
      <Accordion title="General Rules and Reminders">
        <ul className="space-y-4">
          <li>All library materials are to be handled with care.</li>
          <li>Food and drinks are not allowed inside the library.</li>
          <li>All library users should maintain a quiet and respectful environment.</li>
        </ul>
      </Accordion>
      <Accordion title="Borrowing Rules">
        <ul className="space-y-4">
          <li>Borrowing period for books is 2 weeks.</li>
          <li>Late returns will incur fines.</li>
          <li>Library materials are not to be loaned out to others.</li>
        </ul>
      </Accordion>
    </div>
  );
};

export default LibraryServices;
