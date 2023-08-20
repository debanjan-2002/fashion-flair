import React, { useEffect, useRef, useState } from "react";
import * as api from "../../api/conversation";
import "./ChatSection.css";
import ProductCatalog from "../productcatalog/ProductCatalog";
import isJson from "../../utils/isJson";
import { Product } from "../productcatalog/ProductCatalog";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import { Slide } from "react-awesome-reveal";
import TimedSuggestionBox from "../suggestion/TimedSuggestionBox";
import toast from "react-hot-toast/headless"

const ChatSection = () => {
    const [userInput, setUserInput] = useState("");
    const [enabled, setEnabled] = useState<boolean>(true);
    const [messages, setMessages] = useState<string[]>([]);
    const [showSuggestedProducts, setShowSuggestedProducts] = useState<boolean>(false);
    const [_errorMessage, setErrorMessage] = useState(false);
    const [_chatbotReply, setChatbotReply] = useState<string>("");
    const [showProductCatalog, setShowProductCatalog] = useState(false);
    const [productsData, setProductsData] = useState<Product[]>([]);
    const [isMicOn, setMicOn] = useState(false);
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
        useSpeechRecognition();
    const [isFirstLoad, setFirstLoad] = useState(false);

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

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
                const response: any = await api.FetchConversation();
                const arr = response.conversations.map((data: { text: any; }) => data.text);
                // Set fetched conversation as initial messages
                setMessages(arr);

                const products = response.products.map((product: any) => {
                    return {
                        id: product._id,
                        imageSrc: product.images[0].url,
                        productName: product.name,
                        price: product.price,
                        liked: product.liked,
                    };
                });
                if (products.length !== 0) setFirstLoad(true);
                setProductsData(products);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchConversation();
    }, [showSuggestedProducts]);

    // Record Voice and change to Text
    const voiceToText = () => {
        if (!isMicOn) {
            setMicOn(true);
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
        } else {
            setMicOn(false);
            SpeechRecognition.stopListening();
        }
    };

    const toggleShowSuggestedProducts = () => setShowSuggestedProducts(!showSuggestedProducts)

    useEffect(() => {
        setUserInput(transcript);
    }, [transcript]);

    // Handle changes when the user types in the input field
    const handleUserTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    };

    // Handle Key press
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (enabled) sendMessage();
            else sendAlert();
            //   e.preventDefault();
        }
    };

    // Add a new user message to the chat messages
    const addNewMessage = (message: string) =>
        setMessages((prevMessages) => [...prevMessages, message]);

    // Remove the last message from the chat messages
    const removeLastMessage = () =>
        setMessages((prevMessages) => prevMessages.slice(0, -1));

    const sendAlert = () => {
        alert("Try again later!")
    }

    // Handle sending user input and receiving chatbot response
    const sendMessage = async () => {
        // e.preventDefault();
        if (userInput.trim() !== "") {
            setErrorMessage(false);
            setEnabled(false);
            setShowProductCatalog(false); //stop showing product catalog
            // Add the user's message to the chat
            addNewMessage(userInput);
            // Simulate chatbot's reply
            await simulateChatbotReply();
            setEnabled(true);
            setShowProductCatalog(true); //show again
            resetTranscript();
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
            //add a toast message
            toast(data.message.slice(0, 30) + "...");
            const productsArray: any[] = [];
            data.products.map((product: any) => {
                productsArray.push(
                    {
                        id: product._id,
                        imageSrc: product.images.length ? product.images[0].url : null,
                        productName: product.name,
                        price: product.price,
                        liked: product.liked,
                    }
                );
            });
            // Update the products data
            setProductsData(productsArray);

            // Remove the "Chatbot is typing..." message and add the chatbot's actual reply
            removeLastMessage();
            addNewMessage(data.message);
            // Show the product catalog if needed
            setShowProductCatalog(true);

            //clear the transcript
            // resetTranscript();
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
        setProductsData([]);

        try {
            // Delete conversation history from the server
            await api.DeleteConversation();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className="rounded-3xl bg-white grow p-6 flex">
                <div className="container mx-auto relative grow">
                    <div className="flex flex-col w-full h-full items-center">
                        <div className="flex flex-row w-full pb-3 border-b-2 items-center justify-between">
                            <div className="flex flex-row gap-2 items-center">
                                <div className="rounded-full border-2 border-amber-400 h-10 p-1 bg-amber-50">
                                    <img
                                        src="logo.png"
                                        alt=""
                                        className="h-full"
                                    />
                                </div>
                                <p className="text-xl font-medium">Chat bot</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <button
                                    id="targetButton"
                                    className="text-sm bg-indigo-50 text-indigo-600 font-medium border-2 border-indigo-400 py-2 px-4 rounded-lg"
                                    onClick={toggleShowSuggestedProducts}
                                >
                                    {showSuggestedProducts
                                        ? "Hide Suggested Products"
                                        : "Show Suggested Products"}
                                    {
                                        (isFirstLoad) && <TimedSuggestionBox suggestion="To see past products, click here" targetButtonId="targetButton" />
                                    }
                                </button>
                                <button
                                    className="text-sm bg-pink-50 text-pink-600 font-medium border-2 border-pink-400 py-2 px-4 rounded-lg"
                                    onClick={terminateChat}
                                >
                                    Terminate Chat
                                </button>
                            </div>
                        </div>
                        <div
                            ref={chatBoxRef}
                            className="messages w-full overflow-y-auto overflow-x-clip mb-4 p-4 bg-pink-50 rounded-2xl mt-4"
                        >
                            {showSuggestedProducts ? (
                                <ProductCatalog products={productsData} />
                            ) : (
                                messages.map((message, index) => (
                                    index % 2 === 0
                                        ? <Slide direction="right" delay={400} duration={1500} triggerOnce cascade>
                                            <div
                                                key={index}
                                                className={`mb-2 ${index % 2 === 0
                                                        ? "text-right"
                                                        : "text-left"
                                                    }`}
                                            >
                                                <div
                                                    className={`inline-block py-2 px-4 rounded-lg ${index % 2 === 0
                                                            ? "bg-white shadow-lg text-black"
                                                            : "bg-white shadow-lg text-black"
                                                        }`}
                                                >
                                                    {index % 2 === 0 && (
                                                        <div>{message}</div>
                                                    )}
                                                    {index % 2 !== 0 && (
                                                        <div
                                                            className="my-2 whitespace-pre-line"
                                                            dangerouslySetInnerHTML={{
                                                                __html: isJson(message)
                                                                    ? JSON.parse(message)
                                                                        .response
                                                                    : message ==
                                                                        "Chatbot is typing..."
                                                                        ? ` <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-rose-600 float-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg> ${message}`
                                                                        : message,
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </Slide>
                                        : <Slide direction="left" delay={400} duration={1000} triggerOnce cascade>
                                            <div
                                                key={index}
                                                className={`mb-2 ${index % 2 === 0
                                                        ? "text-right"
                                                        : "text-left"
                                                    }`}
                                            >
                                                <div
                                                    className={`inline-block py-2 px-4 rounded-lg ${index % 2 === 0
                                                            ? "bg-white shadow-lg text-black"
                                                            : "bg-white shadow-lg text-black"
                                                        }`}
                                                >
                                                    {index % 2 === 0 && (
                                                        <div>{message}</div>
                                                    )}
                                                    {index % 2 !== 0 && (
                                                        <div
                                                            className="my-2 whitespace-pre-line"
                                                            dangerouslySetInnerHTML={{
                                                                __html: isJson(message)
                                                                    ? JSON.parse(message)
                                                                        .response
                                                                    : message ==
                                                                        "Chatbot is typing..."
                                                                        ? ` <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-rose-600 float-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg> ${message}`
                                                                        : message
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </Slide>

                                ))
                            )}
                            {showProductCatalog && !showSuggestedProducts ? (
                                <ProductCatalog products={productsData} />
                            ) : <></>}
                        </div>
                    </div>
                    <div className="chatbox flex flex-row justify-between items-center gap-2 absolute bottom-10 w-full px-6 py-2 border-2 border-amber-400 rounded-2xl">
                        <button
                            className={
                                isMicOn
                                    ? "font-medium p-2 rounded-lg cursor-pointer border-2 border-transparent transition ease-in-out animate-pulse text-rose-700"
                                    : "text-zinc-500 font-medium p-2 rounded-lg cursor-pointer hover:text-zinc-800 border-2 border-transparent transition-all ease-in-out"
                            }
                            onClick={voiceToText}
                        >
                            {!isMicOn ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <line x1="1" y1="1" x2="23" y2="23"></line>
                                    <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                                    <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
                                    <line
                                        x1="12"
                                        y1="19"
                                        x2="12"
                                        y2="23"
                                    ></line>
                                    <line x1="8" y1="23" x2="16" y2="23"></line>
                                </svg>
                            ) : (
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
                                    <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
                                    <path d="M5 10a7 7 0 0 0 14 0"></path>
                                    <path d="M8 21l8 0"></path>
                                    <path d="M12 17l0 4"></path>
                                </svg>
                            )}
                        </button>
                        <input
                            type="text"
                            name="message"
                            id="message"
                            className="bg-transparent py-2 px-6 placeholder-zinc-500 font-medium focus:outline-none rounded-md hover:placeholder-zinc-800 grow rounded-lg"
                            placeholder="Start typing..."
                            onChange={(evt) => handleUserTyping(evt)}
                            onKeyDown={handleKeyPress}
                            value={userInput}
                        />
                        <button
                            className="text-white bg-pink-400 font-medium p-2 rounded-lg cursor-pointer"
                            onClick={enabled ? sendMessage : sendAlert}
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
                                <path d="M10 14l11 -11"></path>
                                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="text-center text-zinc-500 font-medium absolute bottom-0 w-full">
                        Fashion Flair v0.1 | A proof of concept project |{" "}
                        <a
                            href="https://github.com/debanjan-2002/fashion-flair"
                            className="text-blue-400"
                        >
                            View source code
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};
export default ChatSection;