import React from "react";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import ChatSection from "../../components/chatsection/ChatSection";


const Home: React.FC = () => {



    return (
        <>
            <section className="bg-zinc-900 h-screen w-screen p-6 flex">
                <Sidebar />
                <ChatSection />
            </section>
        </>
    );
};

export default Home;
