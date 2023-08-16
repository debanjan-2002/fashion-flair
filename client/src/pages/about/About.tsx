import React from "react";
import "./About.css";
import Header from "../../components/layout/header/Header";
import SlideIn from "../../components/slideIn/SlideIn";
import { Fade } from "react-awesome-reveal";
import Footer from "../../components/layout/footer/Footer";
import { testimonials } from "../../data/testimonials.json";
import Testimonial from "../../components/testimonial/Testimonial";
import Carousel from "nuka-carousel";

const About: React.FC = () => {
    const carouselConfig = {
        nextDisabled: true,
        prevDisabled: true,
    };
    return (
        <>
            <Header />
            <section className="mt-16 bg-rose-100 py-24 px-6">
                <div className="container flex items-center gap-4 justify-between mx-auto">
                    <div className="my-4 basis-1/2">
                        <SlideIn delay={400}>
                            <h1 className="font-extrabold text-5xl max-w-xl mb-6">
                                Elevating Fashion Discovery: Where AI Meets Your
                                Style
                            </h1>
                            <p className="text-xl max-w-2xl">
                                Gone are the days of endless scrolling; with
                                Fashion Flair, style is at your fingertips. It's
                                time to step into a realm where innovation and
                                style converge, where AI becomes your personal
                                stylist!
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
                                src="/bg/girl.png"
                                alt=""
                                className="max-h-80 w-auto"
                            />
                            <img
                                src="/bg/bot-1.png"
                                alt=""
                                className="max-h-80 w-auto"
                            />
                        </Fade>
                    </div>
                </div>
            </section>
            <section className="py-24">
                <div className="container flex items-center gap-4 justify-between mx-auto">
                    <div className="basis-1/2 my-4 p-4">
                        <SlideIn delay={400}>
                            <img
                                src="/discover.png"
                                alt=""
                                className="max-w-lg w-full h-auto mx-auto"
                            />
                        </SlideIn>
                    </div>
                    <div className="my-4 basis-1/2 p-4">
                        <SlideIn delay={400}>
                            <h2 className="font-extrabold text-4xl max-w-xl mb-6 text-pink-400">
                                What is Fashion Flair?
                            </h2>
                            <p>
                                We are not a mission solely bound to code and
                                algorithms, we are a journey of style
                                exploration. Welcome to Fashion Flair, a
                                platform where fashion converges with AI to
                                create a unique realm of personalized
                                recommendations. Our virtual artificial
                                assistant is more than just lines of code - it's
                                your trusted guide through the vast landscape of
                                fashion possibilities. Just like a fashion-savvy
                                friend, Fashion Flair delves into your
                                preferences, past interactions, and style
                                aspirations to curate suggestions that align
                                with your taste. Embark on a journey that
                                transcends the ordinary, as we redefine the way
                                you discover, experiment, and embrace fashion.
                                <br />
                                <br />
                                Envision a world where dressing up becomes an
                                art, and every outfit is a canvas waiting to be
                                painted with your distinct style. Fashion
                                Flair's capabilities are boundless - from
                                suggesting outfits for special occasions to
                                helping you stay ahead of the latest trends,
                                it's a tool that elevates your relationship with
                                fashion. Beyond trends, beyond fashion seasons,
                                Fashion Flair becomes your steadfast companion,
                                helping you curate a wardrobe that reflects your
                                individuality. Welcome to a realm where fashion
                                isn't just about what you wear; it's about how
                                you express yourself to the world.
                            </p>
                        </SlideIn>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12">
                <h1 className="font-extrabold text-5xl text-center mb-12">
                    What experts say about this technology
                </h1>
                <div className="container mx-auto">
                    <Carousel
                        autoplay
                        withoutControls
                        wrapAround
                        className="border-4 border-pink-400 max-w-6xl px-6 py-12 rounded-xl mx-auto mb-12"
                    >
                        {testimonials.map((testimonial) => (
                            <Testimonial
                                image={testimonial.image}
                                testimony={testimonial.testimony}
                                author={testimonial.author}
                                authorInfo={testimonial.authorInfo}
                            />
                        ))}
                    </Carousel>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;
