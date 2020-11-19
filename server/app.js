const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to my API</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>Not much here yet</h1>');
});

app.listen(8080, console.log('http://localhost:8080'));
