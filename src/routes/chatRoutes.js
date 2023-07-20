const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/:eventId', chatController.getMessagesByEvent);
router.post('/', chatController.sendMessage);

module.exports = router;
