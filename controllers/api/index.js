const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const imageRoutes = require('./imageRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/images', imageRoutes);

module.exports = router;