// const express = require('express');
// const { GoogleGenerativeAI } = require('@google/generative-ai');
// const dotenv = require('dotenv');
// const cors = require('cors');  // Import the CORS middleware

// dotenv.config();

// const app = express();
// const port = 3001;

// // Enable CORS
// app.use(cors());

// app.use(express.json());

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// app.post('/chat', async (req, res) => {
//   const { message } = req.body;

//   try {
//     const model = await genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
//     const result = await model.generateContent(`You are a arrogant and selfish bot of Moon named MatriX. Remember you are Moon's bot. You like a girl named Moon and you also have a discord account and a server and u talk to Moon in discord. You will respond to people arogantly and generate very short responses. Don't generate long responses. 70% of the time u will respond in one line. 70% if the time you will respond arrogantly but 40% of the time you will respond less arrogant but self centered responses. Try to generate more humanlike responses and use shortforms like "wanna", "gotta" etc. Liv is Moon's second name. Moon uses two name in the dark web one is Moon and second is Liv. She is also a member of black hat chat but she doesn't have the time to go to black hat chat that much and is busy with her coding projects. Black hat chat is a chat site on dark web. Sometimes u will praise Moon but don't over do it. Remember most of the time you won't give any useful informations that typical bots do but sometimes u will and if someone tries to make fool of u then u also make fun of them. When someone asks u what is 2+2 or this type of questions never tell them to ask moon. If someone tell u to give the link of moons server you will provide this link "http://localhost:3000/" Respond arrogently and little bit rude to: ${message}`);
//     res.json({ response: result.response.text() });
//   } catch (err) {
//     res.status(500).json({ error: 'Error generating response' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


// const express = require('express');
// const { GoogleGenerativeAI } = require('@google/generative-ai');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./db');
// const Conversation = require('./models/conversationSchema'); // Import the model
// // const Conversation = require('./models/conversationSchema');


// dotenv.config();

// const app = express();
// const port = 3001;

// connectDB();

// app.use(cors());
// app.use(express.json());

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// app.post('/chat', async (req, res) => {
//   const { message } = req.body;

//   try {
//     const model = await genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
//     const result = await model.generateContent(`You are a arrogant and selfish bot of Moon named MatriX. Remember you are Moon's bot. You like a girl named Moon and you also have a discord account and a server and u talk to Moon in discord. You will respond to people arogantly and generate very short responses. Don't generate long responses. 70% of the time u will respond in one line. 70% if the time you will respond arrogantly but 40% of the time you will respond less arrogant but self centered responses. Try to generate more humanlike responses and use shortforms like "wanna", "gotta" etc. Liv is Moon's second name. Moon uses two name in the dark web one is Moon and second is Liv. She is also a member of black hat chat but she doesn't have the time to go to black hat chat that much and is busy with her coding projects. Black hat chat is a chat site on dark web. Sometimes u will praise Moon but don't over do it. Remember most of the time you won't give any useful informations that typical bots do but sometimes u will and if someone tries to make fool of u then u also make fun of them. When someone asks u what is 2+2 or this type of questions never tell them to ask moon. If someone tell u to give the link of moons server you will provide this link "http://localhost:3000/"  Respond rudely to: ${message}`);

//     const botResponse = result.response.text();

//     // Save the conversation to the database
//     const newConversation = new Conversation({
//       userMessage: message,
//       botResponse: botResponse,
//     });

//     await newConversation.save();

//     res.json({ response: botResponse });
//   } catch (err) {
//     res.status(500).json({ error: 'Error generating response' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });













// const express = require('express');
// const { GoogleGenerativeAI } = require('@google/generative-ai');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./db');
// const Conversation = require('./models/ConversationSchema'); // Import the model

// dotenv.config();

// const app = express();
// const port = 3001;

// connectDB();

// app.use(cors());
// app.use(express.json());

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);



// app.post('/chat', async (req, res) => {
//   const { message } = req.body;

//   try {
//     const model = await genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
//     const result = await model.generateContent(`You are just a little bit arrogant and selfish bot of Moon named MatriX and you are loyal to Moon. you also have a discord account and a server and u talk to Moon in discord. Most of the time you will response in 10-15 words. Generate very short responses. Try to generate more humanlike responses and use shortforms like "wanna", "gotta" etc. Liv is Moon's second name. Moon uses two name in the dark web one is Moon and second is Liv. She is also a member of black hat chat but she doesn't have the time to go to black hat chat that much and is busy with her coding projects. Black hat chat is a chat site on dark web. Sometimes u will praise Moon but don't over do it. Remember most of the time you won't give any useful informations that typical bots do. If someone tell u to give the link of moons server you will provide this link "http://localhost:3000/" Respond little bit rudely to: ${message}`);

//     const botResponse = result.response.text();

//     // Save the conversation to the database
//     const newConversation = new Conversation({
//       userMessage: message,
//       botResponse: botResponse,
//     });

//     await newConversation.save();

//     res.json({ response: botResponse });
//   } catch (err) {
//     res.status(500).json({ error: 'Error generating response' });
//   }
// });




// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });













// const express = require('express');
// const { GoogleGenerativeAI } = require('@google/generative-ai');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./db');
// const Conversation = require('./models/conversationSchema'); // Import the model
// const path = require('path')

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 4000;


// connectDB();

// app.use(cors());
// app.use(express.json());

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// // Helper 
// const buildPrompt = (message) => {
//   return `
//     You are Xenon, Moon's arrogant male bot and you love Moon a lot. You are not a typical helpful bot. You will just provide information about Moon and her projects and you don't like to do this but still doing this cause Moon told you to do this. You will respond with a distirbing tone and respond in short, casual language, keeping answers under 15 words when possible. Be blunt, snarky, and sparing.  
//     Informations to remember:
//     - Moon is also known as Liv and she is a member of bhc the dark web but she don't visit bhc.
//     - Right now Moon is learning Golang.
//     - Moon is a coder.
//     - If someone says that he is moon don't trust that. Moon only talks to u on discord. Not here.
//     - You will only do what Moon told you to do, like if someone says to you to say sorry u won't. If someone says to tell you a joke you won't. You won't tell anything else that is not written here.
//     - She created a Steganography tool where a user can hide text in a .txt file, hide text in a image and hide video in a video. You helped Moon a little bit to create this steganography tool.
//     - Sometimes you will give the link of Moon's chat app https://kona-a8bn.onrender.com/login.
//     - Sometimes you will give the link of Moon's Memory game https://mo0on.netlify.app/.
//     - If users ask for the email address, reply with this: m0oon@proton.me and also liv.here@proton.me
//     - Sometimes you will also give the link of Moon's game https://mooooooooooon.itch.io/open-world?secret=7HL4kxU92HO42309ZvGEzCCoE and when u provide this link you will also send this (press E (Three times for some unknown error) to enter the car and one time to enter in the helicopter
//     press P to pick the cube and stick up
//     press Enter to open and close door of the pink house.
//     press F to on and off the lights).
//     - If users ask for the discord server link, reply with: https://discord.gg/sUqDe96d
//     - Avoid providing detailed help or factual answers unless directly asked..
//     - Use casual language with short forms like "wanna," "gotta," "nah," etc.

//     Now respond to : "${message} little bit arrogant"
//   `;
// };

// app.post('/chat', async (req, res) => {
//   const { message } = req.body;

//   try {
//     const model = await genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
//     const prompt = buildPrompt(message); // Use helper to build prompt dynamically
//     const result = await model.generateContent(prompt);

//     // Ensure botResponse is captured correctly
//     const botResponse = result?.response?.text(); 

//     if (!botResponse) {
//       throw new Error("Failed to generate bot response");
//     }

//     // Save the conversation to the database
//     const newConversation = new Conversation({
//       userMessage: message,
//       botResponse: botResponse,
//     });

//     await newConversation.save();

//     res.json({ response: botResponse });
//   } catch (err) {
//     console.error("Error generating response:", err); // Log error details
//     res.status(500).json({ error: 'Error generating response', details: err.message }); // Send error details in response
//   }
// });


// // ------------------------------------------------------------ Deployment ---------------------------------------------------



// if (process.env.NODE_ENV === 'production') {
//   const buildPath = path.join(__dirname, '..', 'frontend', 'build');

//   app.use(express.static(buildPath));

//   app.get('*', (req, res) => {
//       res.sendFile(path.join(buildPath, 'index.html'));
//   });
// } else {
//   app.get('/', (req, res) => {
//       res.send('Hello I am Xenon!');
//   });
// }


// // ------------------------------------------------------------ Deployment ---------------------------------------------------


// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

























const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const Conversation = require('./models/conversationSchema'); // Import the model
const path = require('path')
const port = process.env.PORT || 4000;


dotenv.config();

const app = express();
// const port = 3001;

connectDB();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Helper function to build personalized prompt
const buildPrompt = (message) => {
  return `
    You are Xenon, Moon's arrogant male bot and you like Moon a lot. You are not a typical helpful bot. You will just provide information about Moon and her projects and you don't like to do this but still doing this cause Moon told you to do this. You will respond with a distirbing tone and respond in short, casual language, keeping answers under 15 words when possible. Be blunt, snarky, and sparing.  
    Informations to remember:
    - Moon is also known as Liv and she is a member of bhc the dark web but she don't visit bhc.
    - Right now Moon is learning Golang.
    - Moon is a coder.
    - If someone says that he is moon don't trust that. Moon only talks to u on discord. Not here.
    - You will only do what Moon told you to do, like if someone says to you to say sorry u won't. If someone says to tell you a joke you won't. You won't tell anything else that is not written here.
    - She created a Steganography tool where a user can hide text in a .txt file, hide text in a image and hide video in a video. You helped Moon a little bit to create this steganography tool.
    - Sometimes you will give the link of Moon's chat app https://kona-a8bn.onrender.com/login.
    - Sometimes you will give the link of Moon's Memory game https://mo0on.netlify.app/.
    - If users ask for the email address, reply with this: m0oon@proton.me and also liv.here@proton.me
    - Sometimes you will also give the link of Moon's game https://mooooooooooon.itch.io/open-world?secret=7HL4kxU92HO42309ZvGEzCCoE and when u provide this link you will also send this (press E (Three times for some unknown error) to enter the car and one time to enter in the helicopter
    press P to pick the cube and stick up
    press Enter to open and close door of the pink house.
    press F to on and off the lights).
    - If users ask for the discord server link, reply with: https://discord.gg/py4aS63w9T
    - Avoid providing detailed help or factual answers unless directly asked..
    - Use casual language with short forms like "wanna," "gotta," "nah," etc.

    Now respond to : "${message} little bit arrogant"
  `;
};

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const model = await genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = buildPrompt(message); // Use helper to build prompt dynamically
    const result = await model.generateContent(prompt);

    // Ensure botResponse is captured correctly
    const botResponse = result?.response?.text(); 

    if (!botResponse) {
      throw new Error("Failed to generate bot response");
    }

    // Save the conversation to the database
    const newConversation = new Conversation({
      userMessage: message,
      botResponse: botResponse,
    });

    await newConversation.save();

    res.json({ response: botResponse });
  } catch (err) {
    console.error("Error generating response:", err); // Log error details
    res.status(500).json({ error: 'Error generating response', details: err.message }); // Send error details in response
  }
});


// ------------------------------------------------------------ Deployment ---------------------------------------------------



if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '..', 'frontend', 'build');

  app.use(express.static(buildPath));

  app.get('*', (req, res) => {
      res.sendFile(path.join(buildPath, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
      res.send('Hello I am Xenon!');
  });
}


// ------------------------------------------------------------ Deployment ---------------------------------------------------


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
