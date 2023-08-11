import React, { useState, useEffect, useRef } from 'react';


function ChatSection() {
  const [messages, setMessages] = useState<string[]>([]);
  const [typingText, setTypingText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [chatbotReply, setChatbotReply] = useState<string>('');

  const chatBoxRef = useRef<HTMLDivElement>(null);

  
  //logged in or not
  const auth = localStorage.getItem('auth');
  if(!auth)  window.location.href = '/login';

// To retrieve data
// function autoLoad() {
//   if (localStorage.getItem('auth')) {
//     console.log(localStorage.getItem('auth'));
//   }
// }
//   autoLoad(); 

//for scrolling up to see older messages
useEffect(() => {
  if (chatBoxRef.current) {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }
}, [messages]);


//add new messages
const addNewMessage = (input: string) => {
  setMessages(prevMessages => [
    ...prevMessages,
    input
  ]);
  // console.log(updatedMessages)
};

const removeLastMessage = () => {

  console.log(messages);
  setMessages(prevMessages => prevMessages.slice(0,-1));
  console.log(messages);
  // console.log(updatedMessages)
};



  //when button is pressed
const hitSendButton = async () => {





  (userInput.trim() !== '') ?  addNewMessage(userInput) : null;
    await simulateChatbotReply();
    
}

//handle chatbot reply
const simulateChatbotReply = async () => {
  addNewMessage("Chatbot is typing...");
  console.log(userInput)
  const query = userInput;
  setUserInput('');
  await handleSend(query)
  // setTimeout(handleSend, 1000)
};

  //when a message is sent
  const handleSend = async (query: string) => {
      try {
        const response = await fetch('http://localhost:3000/api/conversations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token' : auth!
          },
          body: JSON.stringify({
            text : query,
            role: 'user'
          })
        });
        if (response.ok) {
          const data = await response.json();
          setChatbotReply(() => data.message)
          // setTypingText(data.message)
          removeLastMessage();
          addNewMessage(data.message);
          setUserInput('');
          console.log('Send conversation successful');

        } else {
            console.error('Send failed');
          }
        } catch (error) {
          console.error('Error:', error);
        } 
      }

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
        console.log('delete conversation successful');
      } else {
          console.error('delete failed');
        }
      } catch (error) {
        console.error('Error:', error);
      } 
  }

  // useEffect(() => {
  //   if (typingText === 'Chatbot is typing...') {
  //     setTimeout(() => {
  //       setTypingText('');
  //       // setMessages([...messages, chatbotReply]);
  //     }, 1500);
  //   }
  // }, [typingText, chatbotReply, messages]);

  const handleUserTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

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
            arr.push(data[i].text);
          }
          setMessages(arr);

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
      <div className="w-3/5 bg-white border rounded shadow-md p-4">
        <div
          ref={chatBoxRef}
          className="h-96 overflow-y-auto mb-4 p-2 bg-gray-200 border rounded"
        >
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-2 ${
            index % 2 === 0 ? 'text-right' : 'text-left'
          }`}
        >
        <div
            className={`inline-block p-2 rounded-lg ${
              index % 2 === 0 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {message}
          </div>
        </div>
        
      ))}
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
      <div className="flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={hitSendButton}
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
)};

export default ChatSection;