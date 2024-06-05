import express from 'express';

const app = express();
app.get('/:nombre/hola', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

app.get('/:nombre/chau', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Chau ' + nombre);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});