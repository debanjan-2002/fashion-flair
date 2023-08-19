import { toast } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import { LoginData, RegisterData } from "../interfaces/user";

/**
 * RegisterUser calls the register api in the backend to add a new user
 *
 * @param {RegisterData} userData user data consisting of email, password and username
 * @return {*} api response
 */
const RegisterUser = async (userData: RegisterData): Promise<any> => {
    console.log(userData);
    const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok){
        toast.error("User already exists!");
        throw new Error("API Error: Register user");
    } 
    const data = await response.json();
    return data;
};

/**
 * LoginUser calls the register api in the backend to add a new user
 *
 * @param {LoginData} userData user data consisting of email, password
 * @return {*} api response
 */
const LoginUser = async (userData: LoginData): Promise<any> => {
    const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        toast.error("Please provide correct credentials!")
        throw new Error("API Error: Login user");
    }
    const data = await response.json();
    return data;
};

export { RegisterUser, LoginUser };
