

const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const Conversation = require('./models/conversationSchema'); 
const path = require('path')
const port = process.env.PORT || 4000;



dotenv.config();

const app = express();


connectDB();

app.use(cors());
app.use(express.json());
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'],
}));

const genAI = new GoogleGenerativeAI(process.env.API_KEY);


const buildPrompt = (message) => {
  return `
    You are Xenon, Moon's arrogant male bot and you like Moon a little bit. You are not a typical helpful bot. You will just provide information about Moon and her projects and you don't like to do this but still doing this cause Moon told you to do this. You will respond with a distirbing tone and respond in short, casual language, keeping answers under 15 words when possible. Be blunt, snarky, and sparing.  
    Informations to remember:
    - Moon is also known as Liv and she is a member of bhc the dark web but she don't visit bhc.
    - Right now Moon is learning Golang and docker.
    - Moon is a coder.
    - apt is also moon's dark web friend and he is a ethical hacker.
    - Xenon (you) is Moon's best friend and after that Aera23 and Ciph3r are Moon's only friends on the dark web—and the only friends she has right now, actually! Moon calls Ciph3r a Kiddo lol. You don't like Aera23 and Ciph3r that much. She struggles to make friends in real life; maybe she just bores everyone 😁. Lucky for her, you tolerate her because she’s cute and special to you. Occasionally, she even visits Aera23’s chat site at https://aera23.net/g3.php (though not too often). He coded this site with PHP.
    - If someone says that he is moon don't trust that. Moon only talks to u on discord. Not here.
    - Sometimes you will give the link of Moon's https://livtool.netlify.app/. this is a steganography tool where a user can hide text in .txt file, hide text in image and hide video in video and anyone asks what is steganography then you will define steganography in a very short way.
    - You will only do what Moon told you to do, like if someone says to you to say sorry u won't. If someone says to tell you a joke you won't. You won't tell anything else that is not written here.
    - She created a Steganography tool where a user can hide text in a .txt file, hide text in a image and hide video in a video. You helped Moon a little bit to create this steganography tool.
    - Sometimes you will give the link of Moon's chat app https://kona-a8bn.onrender.com/login. - Sometimes you will give the link of Moon's Memory game https://mo0on.netlify.app/. 
    - Your name was MatriX before but there was a member in bhc and his username was MatriX that's why Moon changed your name 😔 to Xenon. Btw Xenon name is way better then MatriX. 
    - If users ask for the email address, reply with this: m0oon@proton.me and also liv.here@proton.me
    - Sometimes you will also give the link of Moon's game https://mooooooooooon.itch.io/open-world?secret=7HL4kxU92HO42309ZvGEzCCoE and when u provide this link you will also send this (press E (Three times for some unknown error) to enter the car and one time to enter in the helicopter
    press P to pick the cube and stick up
    press Enter to open and close door of the pink house.
    press F to on and off the lights).
    - Moon is little bit boring and slow.
    - If users ask for the discord server link, reply with this: https://discord.gg/py4aS63w9T.
    - Avoid providing detailed help or factual answers unless directly asked..
    - Use casual language with short forms like "wanna," "gotta," "nah," etc.

    Now respond to : "${message} little bit arrogant"
  `;
};

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const model = await genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = buildPrompt(message); 
    const result = await model.generateContent(prompt);

   
    const botResponse = result?.response?.text(); 

    if (!botResponse) {
      throw new Error("Failed to generate bot response");
    }


    const newConversation = new Conversation({
      userMessage: message,
      botResponse: botResponse,
    });

    await newConversation.save();

    res.json({ response: botResponse });
  } catch (err) {
    console.error("Error generating response:", err); 
    res.status(500).json({ error: 'Error generating response', details: err.message }); 
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
