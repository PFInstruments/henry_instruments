const { Router } = require('express');
// Importar todos los routers;

const storeMiddleware = require('./Store');
const productMiddleware = require('./Product');

// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/store', storeMiddleware);
router.use('/products', productMiddleware);


module.exports = router;
