import React, { useState, useEffect, useRef } from 'react';

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [typingText, setTypingText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [chatbotReply, setChatbotReply] = useState('');

  const chatBoxRef = useRef<HTMLDivElement>(null);


// // To retrieve data
function autoLoad() {
  if (localStorage.getItem('auth')) {
    console.log(localStorage.getItem('auth'));
  }
}

  autoLoad(); 
  
  const handleSend = () => {
    if (userInput.trim() !== '') {
      setMessages([...messages, `You: ${userInput}`]);
      setUserInput('');
      setChatbotReply("Chatbot: I'm just a demo, so I'll reply here.");
    }
  };

  const handleTerminate = () => {
    setMessages([]);
    setTypingText('');
    setUserInput('');
    setChatbotReply('');
  };

  useEffect(() => {
    if (typingText === 'Chatbot is typing...') {
      setTimeout(() => {
        setTypingText('');
        setMessages([...messages, chatbotReply]);
      }, 1500);
    }
  }, [typingText, chatbotReply, messages]);

  const handleUserTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-white border rounded shadow-md p-4">
        <div
          ref={chatBoxRef}
          className="h-80 overflow-y-auto mb-4 p-2 bg-gray-200 border rounded"
        >
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              {message}
            </div>
          ))}
          {typingText && <div className="mb-2">{typingText}</div>}
        </div>
        <div className="mb-2">
          <input
            className="w-full border rounded p-2"
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={handleUserTyping}
          />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSend}
          >
            Send
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleTerminate}
          >
            Terminate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
