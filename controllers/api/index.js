const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes')
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const imageRoutes = require('./imageRoutes');

router.use('/categories', categoryRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/images', imageRoutes);

module.exports = router;