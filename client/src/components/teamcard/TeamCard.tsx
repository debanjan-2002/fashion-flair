import SlideIn from "../../components/slideIn/SlideIn";

type TeamCardProps = {
    firstName: string;
    lastName: string;
    image: string;
    description: string;
    github: string;
    email: string;
    linkedin: string;
};

const TeamCard = (user: TeamCardProps) => {
    return (
        <div className="border-4 border-pink-400 px-6 py-12 rounded-2xl flex flex-col items-center flex-1 shadow-2xl bg-white">
            <div className="">
                <SlideIn delay={200}>
                    <img
                        src={user.image}
                        alt=""
                        className="rounded-full h-60 w-auto"
                    />
                </SlideIn>
            </div>
            <div>
                <h1 className="text-3xl font-bold my-6 flex justify-center text-pink-600">
                    <SlideIn delay={400}>
                        <span>{user.firstName}&nbsp;</span>
                        <span>{user.lastName}</span>
                    </SlideIn>
                </h1>
                <SlideIn delay={600}>
                    <div className="flex items-center justify-center gap-4">
                        <a
                            href={user.email}
                            className="p-2 rounded-full border-2 hover:border-pink-400 border-zinc-800 text-zinc-800 hover:text-pink-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                        </a>
                        <a
                            href={user.github}
                            className="p-2 rounded-full border-2 hover:border-pink-400 border-zinc-800 text-zinc-800 hover:text-pink-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                            </svg>
                        </a>
                        <a
                            href={user.linkedin}
                            className="p-2 rounded-full border-2 hover:border-pink-400 border-zinc-800 text-zinc-800 hover:text-pink-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-linkedin"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </SlideIn>
                <SlideIn delay={800}>
                    <p className="text-lg text-center max-w-lg mt-6">
                        {user.description}
                    </p>
                </SlideIn>
            </div>
        </div>
    );
};

export default TeamCard;
