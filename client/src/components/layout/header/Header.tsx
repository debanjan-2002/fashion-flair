import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="py-4 flex absolute w-screen bg-white z-10 top-0">
            <div className="container mx-auto flex items-center justify-between">
                <NavLink
                    to="/"
                    className="flex items-center mx-4 transition duration-1000 basis-1/5"
                >
                    <img
                        src="/logo-big.png" // Replace with your logo URL
                        alt="Fashion Flair Logo"
                        className="w-56 mr-2"
                    />
                </NavLink>

                <ul
                    className="flex items-center font-medium text-lg grow gap-8 justify-center"
                    id="navbar"
                >
                    <li>
                        <NavLink
                            to="/discover"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-4 border-pink-400 py-2 transition duration-1000"
                                    : "py-2 transition duration-1000 border-b-4 border-transparent"
                            }
                        >
                            Discover
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/how-to-use"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-4 border-pink-400 py-2 transition duration-1000"
                                    : "py-2 transition duration-1000 border-b-4 border-transparent"
                            }
                        >
                            How to use
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/team"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-4 border-pink-400 py-2 transition duration-1000"
                                    : "py-2 transition duration-1000 border-b-4 border-transparent"
                            }
                        >
                            Meet the team
                        </NavLink>
                    </li>
                </ul>
                <div className="flex items-center justify-end basis-1/5">
                    <NavLink
                        to="/chat"
                        className="py-3 px-6 text-lg text-white font-semibold rounded-full bg-pink-400 hover:scale-105 transition duration-500 shadow-lg"
                    >
                        Find your Fashion
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
