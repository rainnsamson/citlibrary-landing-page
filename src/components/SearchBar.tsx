import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  isLoggedIn: boolean;
  onShowModal: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  isLoggedIn,
  onShowModal,
}) => {
  return (
    <div className="relative">
      <div className="flex items-center bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-gray-300 transition-colors">
        <input
          type="text"
          className="w-full px-6 py-4 rounded-2xl text-gray-700 focus:outline-none disabled:bg-gray-50"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          disabled={!isLoggedIn}
        />
        <button
          className="mr-2 p-3 text-gray-400 hover:text-gray-600"
          onClick={onShowModal}
          disabled={isLoggedIn}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};