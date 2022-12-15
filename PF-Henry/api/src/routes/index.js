const { Router } = require('express');
// Importar todos los routers;

const storeMiddleware = require('./Store');
const mailMiddleware = require('./Mail');
const productMiddleware = require('./Product');
const categoryMiddleware = require('./Categories');
const userMiddleware = require('./User');
const checkoutMiddleware = require('./Checkout');
const orderMiddleware = require('./Orders');
const reviewMiddleware = require('./Reviews');
const trademarkMiddleware = require('./Trademark');
// Ejemplo: const auth Router = require('./auth.js');

// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/store', storeMiddleware);
router.use('/mail', mailMiddleware);
router.use('/products', productMiddleware);
router.use('/users', userMiddleware);
router.use('/category', categoryMiddleware);
router.use('/checkout', checkoutMiddleware);
router.use('/orders', orderMiddleware);
router.use('/review', reviewMiddleware);
router.use('/trademarks', trademarkMiddleware);


module.exports = router;
