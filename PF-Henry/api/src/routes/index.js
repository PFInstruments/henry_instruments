const { Router } = require('express');
// Importar todos los routers;

const storeMiddleware = require('./Store');
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/store', storeMiddleware);


module.exports = router;
