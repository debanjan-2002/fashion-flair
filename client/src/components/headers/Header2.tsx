import { NavLink } from 'react-router-dom';

function Header2() {

  //to logout and redirect to the url
  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.href = '/';
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
          <div className="dropdown relative">
            <button
              className="text-white font-medium focus:outline-none"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <NavLink
            to="/about-us"
            className="text-white ml-4 hover:underline"
          >
            About Us
          </NavLink>
          <NavLink
            to="/how-to-use"
            className="text-white ml-4 hover:underline"
          >
            How to Use?
          </NavLink>
          <NavLink
              to="/chat"
              className="text-white ml-4 hover:underline"
            >
                Start Chatting
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header2;
