const { Router } = require('express');
const orderController = require('../controllers/orderControllers');
const router = Router();

router.get('/order/:id', orderController.get_orders);
router.get('/order/:id', orderController.post_checkout);

module.exports = router;