const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;