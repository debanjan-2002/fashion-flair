import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import "./Sidebar.css";
import { toast } from "react-hot-toast";

function Sidebar() {
    const { loggedIn, setLoggedIn } = useAuth();
    const navigate = useNavigate();

    if (!loggedIn) window.location.href = "/login";
    // to logout and redirect to the url
    const handleLogout = () => {
        localStorage.removeItem("auth");
        setLoggedIn(false);
        navigate('/login');
        toast.success("Successfully logged out!")
    };
    return (
        <div className="sidebar flex flex-col items-center justify-between h-full w-72 py-3 pr-6 text-white">
            <div className="flex flex-col w-full">
                <NavLink to="/" className="flex items-center mx-4">
                    <img
                        src="/logo-big.png" // Replace with your logo URL
                        alt="Fashion Flair Logo"
                        className="w-56 mr-2 logo-img mb-6"
                    />
                </NavLink>
                <div className="flex flex-col w-full">
                    <NavLink
                        to="/"
                        className="py-3 px-6 hover:bg-zinc-800 rounded rounded-lg flex flex-row gap-x-3 mb-3 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-zinc-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                        </svg>
                        <p>Home</p>
                    </NavLink>

                    <NavLink
                        to="/discover"
                        className="py-3 px-6 hover:bg-zinc-800 rounded rounded-lg flex flex-row gap-x-3 mb-3 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-zinc-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                            />
                        </svg>
                        <p>Discover Fashion Flair</p>
                    </NavLink>
                    <NavLink
                        to="/how-to-use"
                        className="py-3 px-6 hover:bg-zinc-800 rounded rounded-lg flex flex-row gap-x-3 mb-3 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-zinc-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                        <p>How to use</p>
                    </NavLink>

                    <NavLink
                        to="/chat"
                        className={({ isActive }) =>
                        isActive
                            ? "py-3 px-6 bg-zinc-800 rounded rounded-lg flex flex-row gap-x-3 mb-3 cursor-pointer text-amber-400"
                            : "py-3 px-6 hover:bg-zinc-800 rounded rounded-lg flex flex-row gap-x-3 mb-3 cursor-pointer"
                      }

                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-zinc-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                            />
                        </svg>
                        <p>ChatBot</p>
                    </NavLink>

                    <NavLink
                        to="/my-wishlist"
                        className={({ isActive }) =>
                        isActive
                            ? "py-3 px-6 bg-zinc-800 rounded rounded-lg flex flex-row gap-x-3 mb-3 cursor-pointer text-amber-400"
                            : "py-3 px-6 hover:bg-zinc-800 rounded rounded-lg flex flex-row gap-x-3 mb-3 cursor-pointer"
                      }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-zinc-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>

                        <p>My Wishlist</p>
                    </NavLink>

                    <NavLink
                        to="/faq"
                        className="py-3 px-6 hover:bg-zinc-800 rounded rounded-lg flex flex-row gap-x-3 mb-3 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-zinc-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                            />
                        </svg>
                        <p>Updates & FAQs</p>
                    </NavLink>
                </div>
            </div>

            <button
                className="py-3 px-6 rounded rounded-lg w-full flex flex-row justify-between hover:bg-zinc-800 border-t-2 border-zinc-800"
                onClick={handleLogout}
            >
                <p>Logout</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-amber-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                </svg>
            </button>
        </div>
    );
}

export default Sidebar;
