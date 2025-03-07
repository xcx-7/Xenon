

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
  origin: 'https://xenon-oa8f.vercel.app/', 
  methods: ['GET', 'POST'],
}));

const genAI = new GoogleGenerativeAI(process.env.API_KEY);


const buildPrompt = (message) => {
  return `


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


// ----------------------------------------------------------- Deployment ---------------------------------------------------



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
