import { FC, useState } from "react";
import { FaSearch, FaBookOpen, FaStar, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  category: string;
  available: boolean;
  description: string;
}

const Books: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const books: Book[] = [
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      rating: 4.8,
      category: "Classic",
      available: true,
      description: "A masterpiece of American fiction depicting the roaring twenties."
    },
    {
      id: "2",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
      rating: 4.9,
      category: "Fiction",
      available: true,
      description: "A gripping tale of racial injustice and the loss of innocence."
    },
    {
      id: "3",
      title: "1984",
      author: "George Orwell",
      cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=400",
      rating: 4.7,
      category: "Science Fiction",
      available: false,
      description: "A dystopian social science fiction that remains relevant today."
    },
    {
      id: "4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
      rating: 4.6,
      category: "Classic",
      available: true,
      description: "A timeless romance exploring social class and marriage."
    },
    {
      id: "5",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?auto=format&fit=crop&q=80&w=400",
      rating: 4.9,
      category: "Fantasy",
      available: true,
      description: "An enchanting fantasy adventure that captivates readers of all ages."
    },
    {
      id: "6",
      title: "Dune",
      author: "Frank Herbert",
      cover: "https://images.unsplash.com/photo-1525538182201-02cd1909effb?auto=format&fit=crop&q=80&w=400",
      rating: 4.8,
      category: "Science Fiction",
      available: true,
      description: "An epic science fiction masterpiece set in a distant future."
    }
  ];

  const categories = ["all", ...new Set(books.map(book => book.category))];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-12 px-4">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 pt-10"
        >
          <div className="inline-block p-4 bg-blue-50 rounded-full mb-6">
            <FaBookOpen className="w-10 h-10 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Library Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collection of literary treasures, from timeless classics to contemporary masterpieces.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-600 hover:bg-blue-50"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredBooks.map((book) => (
            <motion.div
              key={book.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                    <FaHeart className="w-5 h-5 text-red-400 hover:text-red-500" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold mb-1">{book.title}</h3>
                  <p className="text-white/90">{book.author}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                    {book.category}
                  </span>
                  <div className="flex items-center">
                    <FaStar className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="text-gray-600 font-medium">{book.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    book.available
                      ? "bg-green-50 text-green-600"
                      : "bg-red-50 text-red-600"
                  }`}>
                    {book.available ? "Available" : "Checked Out"}
                  </span>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Books;