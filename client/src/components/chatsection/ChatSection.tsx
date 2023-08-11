import React, { useState, useEffect, useRef } from 'react';

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [typingText, setTypingText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [chatbotReply, setChatbotReply] = useState('');

  const chatBoxRef = useRef<HTMLDivElement>(null);


// // To retrieve data
// function autoLoad() {
//   if (localStorage.getItem('auth')) {
//     console.log(localStorage.getItem('auth'));
//   }
// }

//   autoLoad(); 
  
  const handleSend = async () => {

    const auth = localStorage.getItem('auth');
    if(!auth)  window.location.href = '/login';
    // let token = null;

    // token = auth

    if (userInput.trim() !== '') {
      setMessages([...messages, `You: ${userInput}`]);
      setUserInput('');
      setChatbotReply("Chatbot: I'm just a demo, so I'll reply here.");

      try {
        const response = await fetch('http://localhost:3000/api/conversations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token' : auth!
          },
          body: JSON.stringify({
            text : userInput,
            role: 'User'
          })
        });
        if (response.ok) {
          console.log('Send conversation successful');
        } else {
            console.error('Send failed');
          }
        } catch (error) {
          console.error('Error:', error);
        } 
      }
    };

  const handleTerminate = async () => {

    const auth = localStorage.getItem('auth');

    setMessages([]);
    setTypingText('');
    setUserInput('');
    setChatbotReply('');
    try {
      const response = await fetch('http://localhost:3000/api/conversations', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token' : auth!
        },
      });
      if (response.ok) {
        console.log('Send conversation successful');
      } else {
          console.error('Send failed');
        }
      } catch (error) {
        console.error('Error:', error);
      } 
    }

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

  useEffect(()=>{

    const auth = localStorage.getItem('auth');

    async function fetchConversation()  {

      if(!auth)  window.location.href = '/login';
      try {
        const response = await fetch('http://localhost:3000/api/conversations', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token' : auth!
          }
        })
        if (response.ok) {

          const data = await response.json();

          const arr = []

          //extracting texts
          for(let i = 0; i<data.length; i++){
            console.log(data[i].text);
            arr.push(data[i].text);
          }

          setMessages(arr);

          console.log(arr);
          console.log(data);
          console.log('get conversation successful');
        } else {
            console.error('get convo failed');
          }
        } catch (error) {
          console.error('Error:', error);

        }
      }
      fetchConversation();
    }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-white border rounded shadow-md p-4">
        <div
          ref={chatBoxRef}
          className="h-80 overflow-y-auto mb-4 p-2 bg-gray-200 border rounded"
        >
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              {index%2==0?'You : ':'Bot : '}
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
