const { Router } = require('express');

// Aquí se le nombra constante router, en el archivo de routes.js se importa y se le llama como helloworld
const router = Router();

router.get('/', (req, res) => {
  res.send('Hola mundo');
});

module.exports = router;
