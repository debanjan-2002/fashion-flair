import React from "react";
import Header from "../../components/layout/header/Header";
import SlideIn from "../../components/slideIn/SlideIn";
import { Fade } from "react-awesome-reveal";
import Footer from "../../components/layout/footer/Footer";

const FAQ: React.FC = () => {
    return (
        <>
            <Header />
            <section className="mt-16 bg-white py-12 px-6">
                <div className="container flex items-center gap-4 justify-between mx-auto">
                    <div className="my-4 basis-1/2">
                        <SlideIn delay={400}>
                            <h1 className="font-extrabold text-5xl max-w-xl mb-6">
                                Fashion Assistant AI Bot FAQ
                            </h1>
                        </SlideIn>
                    </div>
                    <div className="p-4 basis-1/2 flex items-center justify-center gap-4">
                        <Fade
                            delay={400}
                            duration={1000}
                            triggerOnce
                            cascade
                            damping={0.2}
                        >
                            <img
                                src="/fashion-rock.png"
                                alt=""
                                className="h-auto max-w-xl"
                            />
                        </Fade>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-rose-100">
                <div className="container flex items-center gap-4 justify-between mx-auto">
                    <div className="basis-1/2 my-4 p-4">
                        <SlideIn delay={400}>
                            <img
                                src="/specs.png"
                                alt=""
                                className="max-w-lg w-full h-auto mx-auto"
                            />
                        </SlideIn>
                    </div>
                    <div className="my-4 basis-1/2 p-4">
                        <SlideIn delay={400}>
                            <h2 className="font-extrabold text-4xl max-w-xl mb-6 text-pink-400">
                                FAQ: Fashion Assistant AI Bot
                            </h2>
                            <ul className="list-disc pl-6">
                                <li className="mb-4">
                                    <strong>
                                        What is the Fashion Assistant AI Bot?
                                    </strong>
                                    <br />
                                    Our Fashion Assistant AI Bot provides
                                    fashion advice, outfit suggestions, and
                                    style recommendations based on your
                                    preferences and the latest trends.
                                </li>
                                <li className="mb-4">
                                    <strong>
                                        How do I access the Fashion Assistant AI
                                        Bot?
                                    </strong>
                                    <br />
                                    To access the bot, log in to your account
                                    and navigate to the Fashion Assistant
                                    section on the main dashboard.
                                </li>
                                <li className="mb-4">
                                    <strong>
                                        How does the AI Bot provide fashion
                                        advice?
                                    </strong>
                                    <br />
                                    The bot analyzes your style preferences,
                                    body type, and fashion trends to offer
                                    personalized advice.
                                </li>
                                <li className="mb-4">
                                    <strong>
                                        Can the AI Bot help with shopping
                                        recommendations?
                                    </strong>
                                    <br />
                                    Yes, it suggests clothing and accessories
                                    based on your style and existing wardrobe
                                    items.
                                </li>
                                <li className="mb-4">
                                    <strong>
                                        Is the AI Bot's advice up to date?
                                    </strong>
                                    <br />
                                    Yes, it stays updated with the latest
                                    fashion trends from reputable sources.
                                </li>
                                <li className="mb-4">
                                    <strong>
                                        How can I provide feedback on
                                        suggestions?
                                    </strong>
                                    <br />
                                    You can rate suggestions and provide
                                    comments to help us improve recommendations.
                                </li>
                                <li className="mb-4">
                                    <strong>
                                        Can I customize the AI Bot's
                                        recommendations?
                                    </strong>
                                    <br />
                                    Yes, you can customize style preferences,
                                    colors, and your wardrobe for more tailored
                                    suggestions.
                                </li>
                                <li className="mb-4">
                                    <strong>
                                        What if I have a specific fashion
                                        question?
                                    </strong>
                                    <br />
                                    Feel free to ask any fashion-related
                                    questions, from styling tips to fashion
                                    history.
                                </li>
                                <li className="mb-4">
                                    <strong>
                                        How can I end a fashion advice session?
                                    </strong>
                                    <br />
                                    Simply click the appropriate UI option to
                                    end the session.
                                </li>
                            </ul>
                        </SlideIn>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default FAQ;
