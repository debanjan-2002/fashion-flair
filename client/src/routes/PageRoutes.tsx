import { Route, Routes } from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage";
import Home from "../pages/Home";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ChatSection from "../components/chatsection/ChatSection";
import CatalogPage from "../pages/CatalogPage"

function PageRoutes() {
    return (
        <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/about-us" element={<AboutUsPage/>}/>
            <Route path = "/how-to-use" element={<AboutUsPage/>}/>
            <Route path = "/login" element={<LoginPage/>}/>
            <Route path = "/register" element={<RegisterPage/>}/>
            <Route path = "/chat" element={<ChatSection/>}/>
            <Route path = "/catalog" element={<CatalogPage />}/>
        </Routes>
    );
}

export default PageRoutes;