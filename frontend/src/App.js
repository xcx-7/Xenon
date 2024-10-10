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



























import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file for styling

function App() {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    try {
      const response = await axios.post('http://localhost:3001/chat', { message });
      setResponses([...responses, { user: message, bot: response.data.response }]);
      setMessage('');
    } catch (err) {
      console.error('Error fetching bot response', err);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
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
        <div className="chat-input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
