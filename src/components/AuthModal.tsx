import React from 'react';

interface AuthModalProps {
  onLogin: () => void;
  onRegister: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onLogin, onRegister }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl transform transition-all">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Please log in or create an account to continue
          </p>
          
          <div className="space-y-4">
            <button
              onClick={onLogin}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition duration-200 transform hover:scale-[1.02]"
            >
              Log In
            </button>
            
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-4 text-sm text-gray-500">or</span>
            </div>
            
            <button
              onClick={onRegister}
              className="w-full py-3 px-4 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium rounded-xl transition duration-200 transform hover:scale-[1.02]"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};