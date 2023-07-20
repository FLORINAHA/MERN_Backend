const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

router.get('/:eventId', galleryController.getMediaByEvent);
router.post('/', galleryController.addMedia);

module.exports = router;
