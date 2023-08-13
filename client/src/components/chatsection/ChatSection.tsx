import React, { useEffect, useRef, useState } from "react";
import * as api from "../../api/conversation";
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
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-3/5 bg-white border rounded shadow-md p-4">
                <div
                    ref={chatBoxRef}
                    className="h-96 overflow-y-auto overflow-x-clip mb-4 p-2 bg-gray-200 border rounded"
                >
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`mb-2 ${
                                index % 2 === 0 ? "text-right" : "text-left"
                            }`}
                        >
                            <div
                                className={`inline-block p-2 rounded-lg ${
                                    index % 2 === 0
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-300 text-black"
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

                <div className="mb-2">
                    <input
                        className="w-full border rounded p-2"
                        type="text"
                        placeholder="Type your message..."
                        value={userInput}
                        onChange={(evt) => handleUserTyping(evt)}
                    />
                </div>
                <div>
                    {errorMessage && (
                        <p className="mb-2 text-left text-black">
                            {" "}
                            Please type your input!{" "}
                        </p>
                    )}
                </div>
                <div className="flex justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={sendMessage}
                    >
                        Send
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={terminateChat}
                    >
                        Terminate
                    </button>

                    {showProductCatalog ? (
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setShowProductCatalog(false)}
                        >
                            Hide Suggested Products
                        </button>
                    ) : (
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setShowProductCatalog(true)}
                        >
                            Show Suggested Products
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ChatSection;
