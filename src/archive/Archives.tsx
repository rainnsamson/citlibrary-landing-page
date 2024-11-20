import { FC } from 'react';
import { FaImage, FaVideo, FaHistory, FaUsers } from 'react-icons/fa';

interface ArchiveItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}

const Archives: FC = () => {
  const archiveItems: ArchiveItem[] = [
    {
      id: 1,
      title: "Library Inauguration",
      date: "June 15, 1970",
      description: "The historic opening ceremony of our library's main building.",
      imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
      category: "Historic Events"
    },
    {
      id: 2,
      title: "First Book Fair",
      date: "March 1975",
      description: "Our first annual book fair that became a cherished tradition.",
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      category: "Events"
    },
    {
      id: 3,
      title: "Digital Archive Launch",
      date: "September 2000",
      description: "Launching our digital archiving system.",
      imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      category: "Milestones"
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: "1970",
      title: "Foundation",
      description: "Established with a vision to create a center for learning.",
      imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
    },
    {
      year: "1985",
      title: "Major Expansion",
      description: "Added the east wing to accommodate growing collection.",
      imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0"
    },
    {
      year: "2000",
      title: "Modernization",
      description: "Implemented digital systems and modern facilities.",
      imageUrl: "https://images.unsplash.com/photo-1568667256549-094345857637"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Our Legacy
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
            Preserving Knowledge Through Time
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="container mx-auto px-4 -mt-16 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <FaImage className="w-6 h-6" />, title: "Gallery" },
            { icon: <FaVideo className="w-6 h-6" />, title: "Videos" },
            { icon: <FaHistory className="w-6 h-6" />, title: "Timeline" },
            { icon: <FaUsers className="w-6 h-6" />, title: "People" }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-indigo-600 mb-4">{item.icon}</div>
              <h3 className="font-medium text-gray-900">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Archives */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Featured Collections
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {archiveItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 p-8">
                  <p className="text-indigo-300 text-sm mb-2">{item.date}</p>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200" />
            
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative mb-24 last:mb-0">
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold">{event.year}</span>
                  </div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-20' : 'pl-20'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
                        <img
                          src={event.imageUrl}
                          alt={event.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Founders
        </h2>
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="/images/sadiasa.jpg"
                alt="Founders"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-12 md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Sadiasa Family</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Since 1996, the Sadiasa family's vision has transformed our institution into
                a beacon of knowledge and cultural preservation. Their dedication continues
                to inspire our mission of making education accessible to all.
              </p>
              <div className="space-y-6">
                {[
                  "Pioneered digital archiving in the region",
                  "Established multiple scholarship programs",
                  "Created community learning initiatives"
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-700">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Archives;