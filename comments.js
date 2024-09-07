// Create web server
// Create a post request endpoint to receive comments
// Validate the request body
// Save the comments to a file
// Return a response to the client

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/comments', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).send('Name and message are required');
  }
  fs.appendFile('comments.txt', `${name}: ${message}\n`, (err) => {
    if (err) {
      return res.status(500).send('An error occurred');
    }
    res.send('Comment saved');
  });
});

app.listen(3000, () => {
  console.log('Server is running');
});