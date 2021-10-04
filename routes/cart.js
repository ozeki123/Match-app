const { Router } = require('express');
const cartController = require('../controllers/cartController');
const router = Router();

router.get('/cart/:id', cartController.get_cart_item);
router.post('/cart/:id', cartController.post_cart_item);
router.delete('/cart/:od', cartController.delte_cart_item);

module.exports = router;