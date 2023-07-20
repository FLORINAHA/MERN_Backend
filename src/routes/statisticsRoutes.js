const express = require('express');
const router = express.Router();
const statisticsController = require('../controllers/statisticsController');

router.get('/events', statisticsController.getEventStatistics);
router.get('/users', statisticsController.getUserStatistics);
router.get('/groups', statisticsController.getGroupStatistics);

module.exports = router;
