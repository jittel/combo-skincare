const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const frontEnd = require('./frontEndRoutes');
router.use('/', frontEnd)

module.exports = router;
