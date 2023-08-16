import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Header1() {
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

    return (
        <header className="bg-blue-500 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="logo.png" // Replace with your logo URL
                        alt="Fashion Flair Logo"
                        className="h-8 w-8 mr-2"
                    />
                    <span className="text-white text-lg font-bold">
                        Fashion Flair
                    </span>
                </div>
                <div className="flex items-center">
                    <ul className="flex items-center">
                        <li className="mr-4">
                            <div
                                className="dropdown relative"
                                ref={dropdownRef}
                            >
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
                        <li className="mr-4">
                            <NavLink
                                to="/how-to-use"
                                className="text-white hover:underline"
                            >
                                How to Use?
                            </NavLink>
                        </li>
                        <li className="mr-4">
                            <NavLink
                                to="/chat"
                                className="text-white hover:underline"
                            >
                                Start Chatting
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header1;
