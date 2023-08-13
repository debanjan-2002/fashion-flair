import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
    const { loggedIn, setLoggedIn } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    //to handle drop down toggle on selecting Login/Register
    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    //to stop showing the dropdown once clicked outside
    const handleDocumentClick = (e: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(e.target as Node)
        ) {
            setShowDropdown(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);
        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    // to logout and redirect to the url
    const handleLogout = () => {
        localStorage.removeItem("auth");
        setLoggedIn(false);
        window.location.href = "/";
    };

    return (
        <header className="py-4 flex absolute w-screen bg-white z-10">
            <div className="container mx-auto flex items-center justify-between">
                <a href="/" className="flex items-center mx-4 flex-1">
                    <img
                        src="/logo-big.png" // Replace with your logo URL
                        alt="Fashion Flair Logo"
                        className="w-56 mr-2"
                    />
                </a>

                <ul className="flex items-center font-medium text-xl flex-1">
                    <li className="mx-3">
                        <NavLink
                            className="border-b-4 py-3 border-pink-400"
                            to="/about-us"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className="mx-3">
                        <NavLink to="/how-to-use">How to Use</NavLink>
                    </li>
                    <li className="mx-3">
                        <NavLink to="/chat">Start Chatting</NavLink>
                    </li>
                </ul>
                <div className="flex items-center flex-1 justify-end">
                    {loggedIn ? (
                        <div
                            className="dropdown relative"
                            ref={dropdownRef}
                        >
                            <figure
                                className="rounded-full h-12 border-2 border-pink-800 drop-shadow-lg"
                                onClick={handleDropdownToggle}
                            >
                                <img
                                    src="/user.png"
                                    alt=""
                                    className="h-full"
                                />
                            </figure>
                            {showDropdown && (
                                <div className="dropdown-content absolute bg-white drop-shadow-lg rounded mt-2 -right-0 w-48 transition-all border-pink-400 border-2">
                                    <button
                                        className="focus:outline-none py-2 px-4 hover:bg-pink-50"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div
                            className="dropdown relative"
                            ref={dropdownRef}
                        >
                            <figure
                                className="rounded-full h-12 border-2 border-pink-800 drop-shadow-lg"
                                onClick={handleDropdownToggle}
                            >
                                <img
                                    src="/user.png"
                                    alt=""
                                    className="h-full"
                                />
                            </figure>
                            {showDropdown && (
                                <div className="dropdown-content absolute bg-white drop-shadow-lg rounded mt-2 -right-0 w-48 transition-all border-pink-400 border-2">
                                    <NavLink
                                        to="/login"
                                        className="block py-2 px-4 hover:bg-pink-50"
                                    >
                                        Login
                                    </NavLink>
                                    <NavLink
                                        to="/register"
                                        className="block py-2 px-4 hover:bg-pink-50"
                                    >
                                        Register
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
