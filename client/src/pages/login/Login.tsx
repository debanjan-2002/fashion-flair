import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { LoginData } from "../../interfaces/user";
import * as api from "../../api/auth";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setLoggedIn } = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // login data
        const userData: LoginData = {
            email: email,
            password: password,
        };
        // to send req for login
        try {
            const data = await api.LoginUser(userData);
            // Add auth token to local storage
            localStorage.setItem("auth", data.auth);
            // Update auth context state to true
            setLoggedIn(true);
            window.location.href = "/chat";
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <Header />
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleLogin}
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Login;
