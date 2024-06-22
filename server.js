require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


const dbUri = process.env.DB_URI;
const openAiApiKey = process.env.OPENAPI_KEY;
const googleApiKey = process.env.GOOGLEAPI_KEY;
const googleCx = process.env.GOOGLE_CX;

mongoose.connect(dbUri) // Connect to MongoDB, insert your URI here
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const pageInteractionSchema = new mongoose.Schema({
  page: String,
  timeSpent: Number,
  tabbedOutCount: Number, 
  queryCount: Number, // Number of queries sent
  textBoxInputs: {
    type: Map,
    of: String
  },
  llmQueryResponses: {
    type: Object,
    of: String // Keys are LLM queries and values are LLM responses
  },
  searchQueries: {
    type: Object,
    of: String // Keys are search queries and values are clicked links
  },
  inactiveUser: Boolean
}, { timestamps: true });

const surveyResponseSchema = new mongoose.Schema({
  age: Number,
  gender: String,
  occupation: String,
  location: String,
  education: String,
  taskTimeSufficient: Number,
  instructionsClear: Number,
  taskDifficulty: Number,
  toolsEffective: Number,
  productivityImproved: Number,
  attentionCheck: Number,
  aiToolUsage: Number,
  cookie: String, 
  AIsentiment: String
}, { timestamps: true });

const userSchema = new mongoose.Schema({
  userId: { type: String, unique: true },
  pageInteractions: [pageInteractionSchema],
  surveyResponse: [surveyResponseSchema]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/config', (req, res) => {
  res.json({
    openAiApiKey,
    googleApiKey,
    googleCx
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/entryPage.html'));
});

// Endpoint to receive survey responses
app.post('/save-survey-response', async (req, res) => {
  const { userId, interactionData, surveyData } = req.body;

  try {
    let user = await User.findOne({ userId });
    if (!user) {
      user = new User({ userId, surveyResponse: surveyData });
    } else {
      user.surveyResponse.push(...surveyData);
    }
    
    if (interactionData) {
      if (!user.pageInteractions) {
        user.pageInteractions = [];
      }
      user.pageInteractions.push(...interactionData.pageInteractions);
    }
    
    await user.save();
    res.status(200).send('Survey response and interaction data saved successfully');
  } catch (error) {
    console.error('Error saving survey response:', error);
    res.status(500).send('Error saving survey response: ' + error.message);
  }
});


// Generate unique link
app.get('/generate-link', (req, res) => {
  const uniqueId = new mongoose.Types.ObjectId();
  res.send(`http://localhost:${PORT}/experiment?userId=${uniqueId}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
