import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/about/About";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Chat from "../pages/chat/Chat";
import Catalog from "../pages/catalog/Catalog";

function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/how-to-use" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/catalog" element={<Catalog />} />
        </Routes>
    );
}

export default PageRoutes;
