import express from 'express';

const app = express();

app.get('/hola', (req, res) => {
  res.send('Hola Mundo!');
});

app.get('/chau', (req, res) => {
  res.send('Chau Mundo!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});