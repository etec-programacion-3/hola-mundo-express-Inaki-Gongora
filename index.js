import express from 'express';
const app = express();
/**
 * Maneja la solicitud GET '/:nombre/hola'
 * @param req - Solicitud (URL)
 * @param res - Respuesta
 */
app.get('/:nombre/hola', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});
/**
 * Maneja la solicitud GET '/:nombre/chau'
 * @param req - Solicitud (URL)
 * @param res - Respuesta
 */

app.get('/:nombre/chau', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Chau ' + nombre);
});
/**
 * Inicia el servicio en el puerto {port}
 * @param port - Puerto en el que se iniciara el servicio
 */

let port = 3000
app.listen(port, () => {
  console.log('Example app listening on port ', port);
});