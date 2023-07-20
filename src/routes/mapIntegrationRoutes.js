const express = require('express');
const router = express.Router();
const mapIntegrationController = require('../controllers/mapIntegrationController');

router.get('/:eventId', mapIntegrationController.getMapLocationByEvent);
router.post('/', mapIntegrationController.addMapLocation);

module.exports = router;
