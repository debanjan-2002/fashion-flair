import React, { useEffect, useRef, useState } from "react";
import * as api from "../../api/conversation";
import "./ChatSection.css"
import { productsData } from "../../data/products.json";
import ProductCatalog from "../productcatalog/ProductCatalog";

const ChatSection = () => {
    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState(false);
    const [chatbotReply, setChatbotReply] = useState<string>("");
    const [showProductCatalog, setShowProductCatalog] = useState(false);

    const chatBoxRef = useRef<HTMLDivElement>(null);

    // Auto scroll to the latest message in the chat window
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    // Fetch conversations at page render
    useEffect(() => {
        const fetchConversation = async () => {
            try {
                // Fetch conversation data from the API
                const response: any[] = await api.FetchConversation();
                const arr = response.map((data) => data.text);
                // Set fetched conversation as initial messages
                setMessages(arr);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchConversation();
    }, []);

    // Handle changes when the user types in the input field
    const handleUserTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
        setShowProductCatalog(false);
    };

    // Add a new user message to the chat messages
    const addNewMessage = (message: string) =>
        setMessages((prevMessages) => [...prevMessages, message]);

    // Remove the last message from the chat messages
    const removeLastMessage = () =>
        setMessages((prevMessages) => prevMessages.slice(0, -1));

    // Handle sending user input and receiving chatbot response
    const sendMessage = async () => {
        if (userInput.trim() !== "") {
            setErrorMessage(false);
            // Add the user's message to the chat
            addNewMessage(userInput);
            // Simulate chatbot's reply
            await simulateChatbotReply();
        } else {
            setErrorMessage(true);
        }
    };

    // Simulate the chatbot's typing and initiate sending user input
    const simulateChatbotReply = async () => {
        // Display "Chatbot is typing..." message
        addNewMessage("Chatbot is typing...");
        const query = userInput;
        setUserInput(""); // Clear user input field
        await sendQueryToChatbot(query);
    };

    // Send user's query to the chatbot and process the response
    const sendQueryToChatbot = async (query: string) => {
        try {
            // Send user query to the chatbot API
            const data = await api.AddConversation(query, "user");
            // Update chatbot's reply message
            setChatbotReply(data.message);
            // Remove the "Chatbot is typing..." message and add the chatbot's actual reply
            removeLastMessage();
            addNewMessage(data.message);
            // Show the product catalog if needed
            setShowProductCatalog(true);
        } catch (error) {
            console.error(error);
        }
    };

    // Handle terminating the chat session
    const terminateChat = async () => {
        // Clear chat-related states
        setMessages([]);
        setUserInput("");
        setChatbotReply("");
        setShowProductCatalog(false);
        setErrorMessage(false);

        try {
            // Delete conversation history from the server
            await api.DeleteConversation();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className="rounded rounded-3xl bg-white grow p-6 flex">
                <div className="container mx-auto relative grow">
                    <div className="flex flex-col w-full h-full items-center">
                        <div className="flex flex-row w-full pb-3 border-b-2 items-center justify-between">
                            <div className="flex flex-row gap-2 items-center">
                                <div className="rounded-full border-2 border-amber-400 h-10 p-1 bg-amber-50">
                                    <img src="logo.png" alt="" className="h-full"/>
                                </div>
                                <p className="text-xl font-medium">
                                    Chat bot
                                </p>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <button className="text-sm bg-indigo-50 text-indigo-600 font-medium border-2 border-indigo-400 py-2 px-4 rounded-lg" onClick={() => setShowProductCatalog(!showProductCatalog)}>
                                    {showProductCatalog ? ( "Hide Suggested Products" ) : ( "Show Suggested Products" )}
                                </button>
                                <button className="text-sm bg-pink-50 text-pink-600 font-medium border-2 border-pink-400 py-2 px-4 rounded-lg" onClick={terminateChat}>
                                    Terminate Chat
                                </button>
                            </div>
                        </div>
                        <div
                            ref={chatBoxRef}
                            className="messages w-full overflow-y-auto overflow-x-clip mb-4 p-4 bg-pink-50 rounded-2xl mt-4"
                        >
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                                >
                                    <div
                                        className={`inline-block py-2 px-4 rounded-lg ${index % 2 === 0
                                                ? "bg-white shadow-lg text-black"
                                                : "bg-white shadow-lg text-black"
                                            }`}
                                    >
                                        {index % 2 === 0 && <div>{message}</div>}
                                        {index % 2 !== 0 && (
                                            <div
                                                className="my-2"
                                                dangerouslySetInnerHTML={{
                                                    __html: message,
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                            {showProductCatalog ? (
                                <ProductCatalog products={productsData} />
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className="chatbox flex flex-row justify-between items-center gap-2 absolute bottom-10 w-full px-6 py-2 border-2 border-amber-400 rounded-2xl">
                        <button className="text-zinc-500 font-medium p-2 rounded-lg cursor-pointer hover:text-zinc-800 border-2 border-transparent transition-all ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
                                <path d="M5 10a7 7 0 0 0 14 0"></path>
                                <path d="M8 21l8 0"></path>
                                <path d="M12 17l0 4"></path>
                            </svg>
                        </button>
                        <input type="text" name="message" id="message" className="bg-transparent py-2 px-6 placeholder-zinc-500 font-medium focus:outline-none rounded-md hover:placeholder-zinc-800 grow rounded-lg" placeholder="Start typing..." onChange={(evt) => handleUserTyping(evt)} value={userInput}/>
                        <button className="text-white bg-pink-400 font-medium p-2 rounded-lg cursor-pointer" onClick={sendMessage}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 14l11 -11"></path>
                                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="text-center text-zinc-500 font-medium absolute bottom-0 w-full">
                        Fashion Flair v0.1 | A proof of concept project | <a href="https://github.com/adrishyantee/fashion-flair-test" className="text-blue-400">View source code</a>
                    </p>
                </div>
            </div>
        </>
    );
};
export default ChatSection;