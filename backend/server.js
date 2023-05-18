const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

// Define the schema
const dataSchema = new mongoose.Schema({
  end_year: Number,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: Number,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number
});

const Data = mongoose.model('Data', dataSchema);

const app = express();

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Import data from data.json
    const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    // Populate MongoDB with the data
    Data.insertMany(jsonData)
      .then(() => {
        console.log('Data imported successfully');
        // Start the server after importing data
        startServer();
      })
      .catch((error) => {
        console.error('Error importing data:', error);
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define routes
app.get('/data', (req, res) => {
  Data.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// Start the server
const startServer = () => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};
