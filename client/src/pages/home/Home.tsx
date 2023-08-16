import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/layout/header/Header";
import SlideIn from "../../components/slideIn/SlideIn";
import { Fade } from "react-awesome-reveal";
import Footer from "../../components/layout/footer/Footer";

const Home: React.FC = () => {
    return (
        <>
            <Header />

            <section
                style={{ backgroundImage: "url('/bg/bg-wide.jpg')" }}
                className="bg-local bg-center bg-no-repeat bg-cover relative"
            >
                <Fade cascade damping={0.1} triggerOnce>
                    <img
                        src="/bg/bot-1.png"
                        alt=""
                        className="absolute motion-safe:animate-bounce leftBot"
                    />
                    <img
                        src="/bg/bot-2.png"
                        alt=""
                        className="absolute motion-safe:animate-bounce rightBot"
                    />
                    <img
                        src="/bg/dog.png"
                        alt=""
                        className="dog absolute dogIllustration"
                    />
                    <img
                        src="/bg/girl.png"
                        alt=""
                        className="girl absolute girlIllustration"
                    />
                    <img
                        src="/bg/guitar.png"
                        alt=""
                        className="guitar absolute guitarIllustration"
                    />
                    <img
                        src="/bg/skates.png"
                        alt=""
                        className="skates absolute skateIllustration"
                    />
                </Fade>
                <div className="container py-6 flex mx-auto items-center text-center justify-center min-h-screen">
                    <div className="flex flex-col items-center relative -top-20">
                        <h1 className="text-6xl font-bold my-6 flex">
                            <SlideIn delay={0}>
                                <span>Welcome&nbsp;</span>
                                <span>to&nbsp;</span>
                                <span>Fashion&nbsp;</span>
                                <span>Flair&nbsp;</span>
                            </SlideIn>
                        </h1>
                        <p className="max-w-4xl mb-12 text-xl">
                            <SlideIn delay={400}>
                                <span>
                                    At Fashion Flair, we believe that fashion is
                                    more than just clothing, it's an expression
                                    of your personality and a way to showcase
                                    your unique style. Our app is designed to
                                    empower you with the latest fashion trends,
                                    AI-driven outfit suggestions, and a curated
                                    collection of top-quality clothing,
                                    accessories, and footwear.
                                </span>
                            </SlideIn>
                        </p>

                        <SlideIn delay={800}>
                            <NavLink
                                to={"/chat"}
                                className="px-8 py-4 font-semibold border-2 border-amber-400 hover:border-pink-400 ease-in-out duration-300 hover:bg-pink-400 hover:text-white text-black rounded-full text-xl cursor-pointer drop-shadow-xl"
                            >
                                <span>Start Chatting</span>
                            </NavLink>
                        </SlideIn>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12">
                <div className="container py-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="md:order-1 mb-4">
                            <SlideIn delay={600} duration={1200}>
                                <div className="border-4 border-yellow-400 p-4 rounded-2xl max-w-xl mx-auto">
                                    <img
                                        src="/samples/img-1.png"
                                        alt="AI-Powered Style Assistant"
                                        className="rounded mx-auto"
                                    />
                                </div>
                            </SlideIn>
                        </div>
                        <div className="md:order-2 mb-4 flex items-center">
                            <div className="max-w-lg mx-auto">
                                <SlideIn
                                    delay={300}
                                    duration={800}
                                    damping={0.5}
                                >
                                    <h2 className="text-6xl  font-black mb-8 text-yellow-400">
                                        AI-Powered Style Assistant
                                    </h2>
                                    <p className="text-gray-700 mb-4 text-xl text-justify">
                                        Our AI-powered chatbot isn't just a
                                        virtual assistant; it's your personal
                                        stylist available 24/7. Whether you're
                                        seeking advice on the latest trends,
                                        planning an outfit for an event, or
                                        experimenting with new looks, our
                                        chatbot is here to guide you.
                                    </p>
                                </SlideIn>
                            </div>
                        </div>
                        <div className="md:order-4 mb-4">
                            <SlideIn delay={600} duration={1200}>
                                <div className="border-4 border-pink-400 p-4 rounded-2xl max-w-xl mx-auto">
                                    <img
                                        src="/samples/img-2.png"
                                        alt="Curated Fashion Catalog"
                                        className="rounded mx-auto"
                                    />
                                </div>
                            </SlideIn>
                        </div>
                        <div className="md:order-3 mb-4 flex items-center">
                            <div className="max-w-lg mx-auto">
                                <SlideIn
                                    delay={300}
                                    duration={800}
                                    damping={0.5}
                                >
                                    <h2 className="text-6xl  font-black mb-8 text-pink-400">
                                        Curated Fashion Catalog
                                    </h2>
                                    <p className="text-gray-700 mb-4 text-xl text-justify">
                                        Discover a world of style in our
                                        carefully curated fashion catalog. We've
                                        partnered with renowned designers and
                                        brands to bring you a diverse collection
                                        of clothing and accessories that cater
                                        to various tastes and occasions.
                                    </p>
                                </SlideIn>
                            </div>
                        </div>
                        <div className="md:order-5 mb-4">
                            <SlideIn delay={600} duration={1200}>
                                <div className="border-4 border-teal-400 p-4 rounded-2xl max-w-xl mx-auto">
                                    <img
                                        src="/samples/img-3.png"
                                        alt="Unleash Your Creativity"
                                        className="rounded mx-auto"
                                    />
                                </div>
                            </SlideIn>
                        </div>
                        <div className="md:order-6 mb-4 flex items-center">
                            <div className="max-w-lg mx-auto">
                                <SlideIn
                                    delay={300}
                                    duration={800}
                                    damping={0.5}
                                >
                                    <h2 className="text-6xl  font-black mb-8 text-teal-400">
                                        Unleash Your Creativity
                                    </h2>
                                    <p className="text-gray-700 mb-4 text-xl text-justify">
                                        Fashion is all about expressing your
                                        individuality, and we're here to help
                                        you unleash your creativity. Our
                                        AI-powered outfit generator takes the
                                        guesswork out of styling and empowers
                                        you to experiment with different
                                        combinations and looks.
                                    </p>
                                </SlideIn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 mb-12">
                <div className="container max-w-6xl rounded-xl border-4 border-pink-400 py-6 px-12 mx-auto flex items-center justify-between gap-4">
                    <div className="my-6">
                        <h1 className="font-bold text-4xl">
                            Ready to elevate your style?
                        </h1>
                        <NavLink
                            to="/chat"
                            className="px-8 py-4 font-semibold border-2 border-pink-400 ease-in-out duration-300 bg-pink-400 text-white rounded-full text-xl cursor-pointer drop-shadow-xl block w-fit mt-6"
                        >
                            <span>Start the Fashion Talk</span>
                        </NavLink>
                    </div>
                    <img src="/bg/chatbot.png" alt="" />
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
