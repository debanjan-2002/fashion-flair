import React from "react";
import AboutUsPage from "../about/About";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";

const Home: React.FC = () => {
    return (
        <>
            <Header/>
            <AboutUsPage/>
            <Footer/>
        </>
    )
};

export default Home;
