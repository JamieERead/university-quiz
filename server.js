const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

app.use(express.static('.'));

const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/getQuiz', (req, res) => {
  axios.get('https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json')
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Error getting data');
    });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));