import React from 'react';

const Header2: React.FC = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="logo.png" // Replace with your logo URL
            alt="Fashion Flair Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-white text-lg font-bold">Fashion Flair</span>
        </div>
        <div className="flex items-center">
          <div className="dropdown relative">
            <button className="text-white font-medium focus:outline-none">
              Logout
            </button>
            <div className="dropdown-content absolute hidden bg-white rounded mt-2">
              <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                Login
              </a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                Register
              </a>
            </div>
          </div>
          <a href="#" className="text-white ml-4 hover:underline">
            About Us
          </a>
          <a href="#" className="text-white ml-4 hover:underline">
            How to Use?
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header2;
