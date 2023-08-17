import React from "react";
import SlideIn from "../../components/slideIn/SlideIn";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import Testimonial from "../../components/testimonial/Testimonial";
import TeamCard from "../../components/teamcard/TeamCard";

const Team: React.FC = () => {
    return (
        <>
            <Header />
            <section className="mt-24 bg-rose-100">
                <div className="container mx-auto py-12 px-6 flex items-center justify-center flex-wrap">
                    <h1 className="text-6xl font-bold my-6 flex justify-center text-center w-full basis-full">
                        <SlideIn delay={0}>
                            <span>Meet</span>
                            <span>&nbsp;our&nbsp;</span>
                            <span>Team&nbsp;</span>
                        </SlideIn>
                    </h1>
                    <SlideIn delay={200}>
                        <p className="mt-6 text-lg text-center max-w-4xl">
                            Discover the dynamic duo behind our fashion AI
                            revolution. With a shared passion for fashion and
                            technology, our team is dedicated to pushing
                            boundaries and shaping the future!
                        </p>
                    </SlideIn>
                </div>
            </section>
            <section className="bg-rose-100">
                <div className="container mx-auto pb-24 px-6 flex items-center justify-around flex-wrap gap-12 max-w-6xl">
                    <TeamCard
                        firstName="Adrishyantee"
                        lastName="Maiti"
                        email="mailto:adrishyantee@gmail.com"
                        image="/team/adrishyantee.avif"
                        description="SDE Intern @Amazon || ex-DIA Intern @ServiceNow || Google DSC Lead'22 || LinkedIn CoachIn'22 || Founder @InspireXHub"
                        linkedin="https://linkedin.com/in/adrishyantee"
                        github="https://github.com/adrishyantee"
                    />
                    <TeamCard
                        firstName="Debanjan"
                        lastName="Poddar"
                        email="mailto:debanjan2002@gmail.com"
                        image="/team/debanjan.jpeg"
                        description="Former SWE Intern @ Microsoft || Btech CSE 2024 @KGEC || SpeedCuber || Backend developer @FashionFlair"
                        linkedin="https://linkedin.com/in/debanjan-poddar"
                        github="https://github.com/debanjan-2002"
                    />
                </div>
            </section>
            <section>
                <div className="container mx-auto py-24 px-6">
                    <SlideIn delay={1000}>
                        <Testimonial
                            image="/team/adrishyantee.avif"
                            author="Adrishyantee Maiti"
                            authorInfo="Fashion Flair"
                            testimony="I believe in the transformative power of teamwork. It's the catalyst that ignites the sparks of innovation, the art of diverse minds collaborating to craft a symphony of ideas into a masterpiece of achievement. Together, we transcend limitations, unlocking doors to new realms of possibility. With each shared effort, we rewrite the rules and inspire the extraordinary. I believe that teamwork isn't just a choice; it's our unwavering commitment to shaping the future, hand in hand."
                        />
                    </SlideIn>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Team;
