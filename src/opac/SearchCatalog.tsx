import React, { useState, useEffect } from "react";

interface CatalogItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const SearchCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [showModal, setShowModal] = useState(false); // Show modal for login/register
  const [idNumber, setIdNumber] = useState(""); // ID Number field
  const [password, setPassword] = useState(""); // Password field
  const [items] = useState<CatalogItem[]>([
    {
      id: 1,
      title: "Item One",
      description: "A short description of item one.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Item Two",
      description: "A short description of item two.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Item Three",
      description: "A short description of item three.",
      image: "https://via.placeholder.com/150",
    },
  ]);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogin = () => {
    if (idNumber && password) {
      // Simulate login logic
      setIsLoggedIn(true);
      setShowModal(false); // Close the modal after login
    } else {
      alert("Please fill in both ID Number and Password.");
    }
  };

  const handleRegister = () => {
    // Simulate registration logic
    alert("Redirecting to registration page...");
    setShowModal(false); // Close the modal
  };

  // Automatically show modal on page load if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      setShowModal(true);
    }
  }, [isLoggedIn]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Login/Register Modal */}
      {showModal && !isLoggedIn && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold text-center mb-4">
              Log In to Access the Catalog
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="ID Number"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
              <button
                onClick={handleLogin}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Log In
              </button>
              <div className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={handleRegister}
                  className="text-blue-500 hover:underline"
                >
                  Register or Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Search Catalog</h1>

        {/* Search Bar */}
        <div className="flex items-center space-x-3 mb-6">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            disabled={!isLoggedIn} // Disable search if not logged in
          />
        </div>

        {/* Catalog Grid */}
        {isLoggedIn ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <button className="mt-3 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow">
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-600">
                No items found.
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            Please log in to view the catalog.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCatalog;
