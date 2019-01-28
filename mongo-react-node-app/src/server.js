
// Server running framework
const express = require('express');

// Used for serving a local path
const path = require('path');

// Access form body on the server
const bodyParser = require('body-parser');

// Used for configuring database
require('dotenv').config();
// Mongod DB Client initialization
const { MongoClient } = require('mongodb');
// Mongo DB access from config
const databaseUrl = process.env.DATABASE;

// Initialize app
const app = express();

// Ability to access form (from .html) body on the server
app.use(bodyParser.json());

//  Allow static files to be loaded in the html
app.use(express.static(path.join(__dirname, 'public')))

// Mongo DB connection
MongoClient.connect(databaseUrl, { useNewUrlParser: true })
  .then(client => {
    app.locals.db = client.db('shortener');
  })
  .catch(() => console.error('Failed to connect to the database'));

// Run server on port 4100
app.set('port', process.env.PORT || 4100);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});


// Load up .html files from public/index.html
app.get('/', (req, res) => {
  const htmlPath = path.join(__dirname, 'public', 'index.html');
  res.sendFile(htmlPath);
});

app.post('/new', (req, res) => {
  console.log(req.body);
});
