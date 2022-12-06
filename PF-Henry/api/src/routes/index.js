const { Router } = require('express');
// Importar todos los routers;

const storeMiddleware = require('./Store');

const categoryMiddleware = require('./Categories');
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/store', storeMiddleware);

router.use('/users', userMiddleware);

router.use('/category', categoryMiddleware);
router.use('/checkout', checkoutMiddleware);


module.exports = router;
