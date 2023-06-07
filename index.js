const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/verificar-palindromo', (req, res) => {
  const palabra = req.body.palabra;

  if (!palabra || typeof palabra !== 'string') {
    res.status(404).json({ message: 'No se pudo comprobar la palabra' });
  } else { 
    const palabraSinEspacios = palabra.replace(/\s/g, '');
    const palabraReversa = palabraSinEspacios.split('').reverse().join('');

    if (palabraSinEspacios.toLowerCase() === palabraReversa.toLowerCase()) {
      res.status(200).json({ message: `${palabra} es una palabra Palíndroma` });
    } else {
      res.status(302).json({ message: `${palabra} no es una palabra Palíndroma` });
    }
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`); //
});
