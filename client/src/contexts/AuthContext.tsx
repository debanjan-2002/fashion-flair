import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the authentication context
interface AuthContextType {
    loggedIn: boolean; // Indicates if the user is logged in
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; // Function to set the logged-in state
}

// Create an authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create an AuthProvider component to manage authentication state
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    // Initialize the logged-in state based on localStorage
    const [loggedIn, setLoggedIn] = useState(
        localStorage.getItem("auth") !== null
    );

    // Provide the authentication context to the app
    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a custom hook to easily access the authentication context
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    // Ensure the hook is used within an AuthProvider
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};
