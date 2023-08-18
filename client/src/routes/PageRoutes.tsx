import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import HowToUse from "../pages/howToUse/HowToUse";
import Home from "../pages/home/Home";
import Team from "../pages/team/Team";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Chat from "../pages/chat/Chat";
import Catalog from "../pages/catalog/Catalog";
import FAQ from "../pages/faq/FAQ";
import Wishlist from "../pages/wishlist/Wishlist";

function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<About />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/team" element={<Team />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/my-wishlist" element={<Wishlist />} />
        </Routes>
    );
}

export default PageRoutes;
