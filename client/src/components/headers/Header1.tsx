import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

const Header1: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

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
          <ul className="flex items-center">
            <li className="mr-4">
              <div className="dropdown relative">
                <button
                  className="text-white font-medium focus:outline-none"
                  onClick={handleDropdownToggle}
                >
                  Login/Register
                </button>
                {showDropdown && (
                  <div className="dropdown-content absolute bg-white rounded mt-2">
                    <NavLink
                      to="/login"
                      className="block py-2 px-4 hover:bg-gray-100"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="block py-2 px-4 hover:bg-gray-100"
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </div>
            </li>
            <li className="mr-4">
              <NavLink
                to="/about-us"
                className="text-white hover:underline"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/how-to-use"
                className="text-white hover:underline"
              >
                How to Use?
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header1;




// const Header1: React.FC = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleDropdownToggle = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <header className="bg-blue-500 py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <img
//             src="logo.png" // Replace with your logo URL
//             alt="Fashion Flair Logo"
//             className="h-8 w-8 mr-2"
//           />
//           <span className="text-white text-lg font-bold">Fashion Flair</span>
//         </div>
//         <div className="flex items-center">
//           <div className="dropdown relative">
//             <div
//               className="text-white font-medium focus:outline-none"
              
//             >
//               Login/Register
//             </button>
//             {showDropdown && (
//               <div className="dropdown-content absolute bg-white rounded mt-2">
//                 <a
//                   href="#"
//                   className="block py-2 px-4 hover:bg-gray-100"
//                   onClick={handleLogin}
//                 >
//                   Login
//                 </a>
//                 <a
//                   href="#"
//                   className="block py-2 px-4 hover:bg-gray-100"
//                   onClick={handleRegister}
//                 >
//                   Register
//                 </a>
//               </div>
//             )}
//           </div>
//           <a href="#" className="text-white ml-4 hover:underline">
//             About Us
//           </a>
//           <a href="#" className="text-white ml-4 hover:underline">
//             How to Use?
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header1;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header1: React.FC = () => {
//   return (
//     <header className="bg-blue-500 py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* ... */}
//         <div className="flex items-center">
//           <Link to="/about" className="text-white ml-4 hover:underline">
//             About Us
//           </Link>
//           <Link to="/how-to-use" className="text-white ml-4 hover:underline">
//             How to Use?
//           </Link>
//           <Link to="/login-register" className="text-white ml-4 hover:underline">
//             Login/Register
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header1;
