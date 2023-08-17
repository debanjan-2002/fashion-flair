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
        <div className="flex flex-col min-h-screen">
            <Header />
            <div
                className="flex flex-col items-center justify-center flex-1 bg-cover bg-center"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/login-bg.png)" }}
            >
                <div className="flex flex-col bg-white bg-opacity-40 backdrop-blur-lg rounded-xl p-12 w-96 space-y-6 relative shadow-md border border-pink-600">
                    <a
                        href="/register"
                        className="text-right text-pink-600  p-8 hover:underline text-xs"
                        style={{ position: "absolute", top: "0", right: "0" }}
                    >
                        Not registered? Register here
                    </a>
                    <h2 className="text-2xl font-semibold mb-4 text-black">
                        Log In
                    </h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm border-pink-600 text-zinc-800 block">
                                Email
                            </label>
                            <input
                                className="rounded shadow-lg border-2 border-transparent bg-white bg-opacity-10 text-black w-full py-2 px-3 focus:outline-0 focus:ring-0 focus:border-pink-500"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-700 block">
                                Password
                            </label>
                            <input
                                className="rounded shadow-lg border-2 border-transparent bg-white bg-opacity-10 text-black w-full py-2 px-3 focus:outline-0 focus:ring-0 focus:border-pink-500"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`py-3 px-6 text-lg text-white font-semibold rounded-full bg-pink-400 hover:scale-105 transition duration-500 shadow-lg`}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;