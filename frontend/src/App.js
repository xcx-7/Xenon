// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [message, setMessage] = useState('');
//   const [responses, setResponses] = useState([]);

//   const sendMessage = async () => {
//     if (!message) return;

//     try {
//       const response = await axios.post('http://localhost:3001/chat', { message });
//       setResponses([...responses, { user: message, bot: response.data.response }]);
//       setMessage('');
//     } catch (err) {
//       console.error('Error fetching bot response', err);
//     }
//   };

//   return (
//     <div>
//       <h1>MatriX</h1>
//       <div>
//         {responses.map((res, idx) => (
//           <div key={idx}>
//             <p><strong></strong> {res.user}</p>
//             <p><strong></strong> {res.bot}</p>
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Ask the cat bot..."
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default App;



























// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css'; // Import the CSS file for styling

// function App() {
//   const [message, setMessage] = useState('');
//   const [responses, setResponses] = useState([]);

//   const sendMessage = async () => {
//     if (!message) return;

//     try {
//       const response = await axios.post('http://localhost:3001/chat', { message });
//       setResponses([...responses, { user: message, bot: response.data.response }]);
//       setMessage('');
//     } catch (err) {
//       console.error('Error fetching bot response', err);
//     }
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         <div className="chat-messages">
//           {responses.map((res, idx) => (
//             <div key={idx}>
//               <div className="user-message">
//                 <p><strong></strong> {res.user}</p>
//               </div>
//               <div className="bot-message">
//                 <p><strong></strong> {res.bot}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="chat-input">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type a message..."
//           />
//           <button onClick={sendMessage}>Send</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


























import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null); // Create a ref for the input field

  // Simulate loading effect (e.g., 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Set focus on the input field when loading is complete
  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  const sendMessage = async () => {
    if (!message) return;

    try {
      const response = await axios.post('https://xenon-tkqt.onrender.com/chat', { message });

      setResponses([...responses, { user: message, bot: response.data.response }]);
      setMessage('');
    } catch (err) {
      console.error('Error fetching bot response', err);
    }
  };

  // New function to handle key press events
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <img src="/loading.gif" alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="chat-container">
      <div className="chat-box">
        {/* Xenon Profile Section */}
        <div className="profile-header">
          <img className="profile-pic" src="/loading.gif" alt="Xenon Profile" />
          <div className='wrap'>
            <div className="glitch" data-text="Xenon">Xenon</div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          {responses.map((res, idx) => (
            <div key={idx}>
              <div className="user-message">
                <p><strong></strong> {res.user}</p>
              </div>
              <div className="bot-message">
                <p><strong></strong> {res.bot}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <input
            type="text"
            ref={inputRef} // Attach ref to input field
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress} // Add key press event handler
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;

