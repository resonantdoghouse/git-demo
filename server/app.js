const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to my AP1</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>Not much here ye!</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1>');
});

app.listen(8080, console.log('http://localhost:8080'));
