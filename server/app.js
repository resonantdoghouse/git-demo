const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to my @PI!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>Not much here Yet</h1>');
});

app.listen(8080, console.log('http://localhost:8080'));
