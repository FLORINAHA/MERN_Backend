const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

router.get('/:eventId', reviewsController.getReviewsByEvent);
router.post('/', reviewsController.addReview);

module.exports = router;
