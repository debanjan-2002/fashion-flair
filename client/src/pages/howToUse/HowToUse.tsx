import React from "react";
import Header from "../../components/layout/header/Header";
import SlideIn from "../../components/slideIn/SlideIn";
import { Fade } from "react-awesome-reveal";
import Footer from "../../components/layout/footer/Footer";

const HowToUse: React.FC = () => {
    return (
        <>
            <Header />
            <section className="mt-16 bg-white py-24 px-6">
                <div className="container flex items-center gap-4 justify-between mx-auto">
                    <div className="my-4 basis-1/2">
                        <SlideIn delay={400}>
                            <h1 className="font-extrabold text-5xl max-w-xl mb-6">
                                Getting Started with the Chat Bot UI
                            </h1>
                            <p className="text-xl max-w-2xl">
                                Welcome to our Chat Bot UI! This guide will walk
                                you through the essential steps to effectively
                                use our chat bot interface and make the most out
                                of its features. Whether you're new to chat bots
                                or have prior experience, this guide will ensure
                                a smooth and productive user experience.
                            </p>
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
                                src="/bg/bot-2.png"
                                alt=""
                                className="max-h-80 w-auto"
                            />
                            <img
                                src="/bg/chatbot.png"
                                alt=""
                                className="max-h-80 w-auto"
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
                                src="/bg/skates.png"
                                alt=""
                                className="max-w-lg w-full h-auto mx-auto"
                            />
                        </SlideIn>
                    </div>
                    <div className="my-4 basis-1/2 p-4">
                        <SlideIn delay={400}>
                            <h2 className="font-extrabold text-4xl max-w-xl mb-6 text-pink-400">
                                Guide for our users
                            </h2>
                            <p>
                                To begin, make sure you're logged into your
                                account. If you're a new user, you'll need to
                                sign up to access the chat bot UI. Once logged
                                in, you'll land on the main dashboard where you
                                can manage your chat bot interactions, settings,
                                and more. The chat bot UI is designed to be
                                intuitive and user-friendly. The primary
                                interface consists of a conversation window
                                where you can interact with the chat bot in real
                                time. On the side, you'll find options to
                                customize the bot's behavior, view conversation
                                history, and access advanced settings. Engaging
                                with the chat bot is a straightforward process.
                                To start a conversation, simply type your
                                message in the input box at the bottom of the
                                conversation window and press "Send" or hit
                                Enter. The chat bot will promptly respond based
                                on the context of your message. If the chat bot
                                provides options or prompts, you can make
                                selections by clicking on the provided buttons
                                or typing the corresponding option number. This
                                is particularly useful when the bot offers a
                                list of choices or actions for you to choose
                                from.
                                <br />
                                <br />
                                Remember that the chat bot is designed to
                                understand natural language, so you don't need
                                to use specific commands. Feel free to
                                communicate as you would in a regular
                                conversation. If the chat bot ever
                                misunderstands your input, you can use clear and
                                concise language to rephrase your question or
                                statement. During the conversation, you can
                                expect the chat bot to provide relevant
                                information, answer questions, and assist you
                                with various tasks. If at any point you need to
                                end the conversation or pause interactions, you
                                can do so by clicking the appropriate option
                                within the UI.
                            </p>
                        </SlideIn>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default HowToUse;
