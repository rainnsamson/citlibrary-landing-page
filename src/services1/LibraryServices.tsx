import { FC } from 'react';
import { FaBook, FaClock, FaUsers, FaClipboardList } from 'react-icons/fa';
import ChatBox from '../components/ChatBox'; // Import the ChatBox component

interface StaffMember {
  name: string;
  position: string;
  image: string;
}

interface ServiceHours {
  day: string;
  hours: string;
}

const LibraryServices: FC = () => {
  const staffMembers: StaffMember[] = [
    {
      name: "Mrs. Margelie M. Sevilla",
      position: "Head Librarian",
      image: "/images/margelie.jpg"
    },
    {
      name: "Ms. Maria Santos",
      position: "Assistant Librarian",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Mr. Jose Garcia",
      position: "Library Assistant",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  const serviceHours: ServiceHours[] = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 12:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12 relative">
        <div className="rounded-3xl shadow-2xl p-8 md:p-16 text-white relative overflow-hidden bg-gradient-to-r from-red-500 via-red-600 to-red-700 opacity-90">
          <div className="text-center relative z-10">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-4 text-white">Library Services</h1>
            <p className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto">
              Discover the various services we offer to enhance your learning and research experience.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
            <FaBook className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Extensive Collection</h3>
            <p className="text-gray-600">Over 50,000 books, journals, and digital resources</p>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
            <FaClock className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
            <p className="text-gray-600">Extended hours to accommodate your schedule</p>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
            <FaUsers className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Staff</h3>
            <p className="text-gray-600">Dedicated team of professional librarians</p>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
            <FaClipboardList className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
            <p className="text-gray-600">State-of-the-art study spaces and technology</p>
          </div>
        </div>

        {/* Service Hours */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Service Hours</h2>
          <div className="grid gap-4">
            {serviceHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                <span className="text-lg font-medium text-gray-700">{schedule.day}</span>
                <span className="text-lg text-gray-600">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Staff Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-red-100"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rules Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Library Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">General Rules</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Maintain silence in study areas
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  No food or drinks allowed
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Handle books with care
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Borrowing Policy</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Maximum of 5 books per person
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  14-day loan period
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Valid ID required for borrowing
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* ChatBox */}
      <ChatBox />
    </div>
  );
};

export default LibraryServices;
