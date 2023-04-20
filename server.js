const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send({message: 'Hello, World!'});
});

app.get('/google', (req, res) => {
  fetch('http://www.google.com/')
  .then(response => response.text())
  .then(html => res.send(html));
});

app.listen(8080, () => {
  console.log('Server listening on http://localhost:8080');
});