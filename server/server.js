const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Ensure you have dotenv installed and your API key is in a .env file

const { Configuration, OpenAIApi } = require('openai');

// Initialize OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to handle user queries
app.post('/process_query', async (req, res) => {
  const query = req.body.query;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: query,
      max_tokens: 150,
    });

    res.json({ response: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Serve the main HTML file for the root path
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../public/index.html');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
