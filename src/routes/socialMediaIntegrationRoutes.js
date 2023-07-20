const express = require('express');
const router = express.Router();
const socialMediaIntegrationController = require('../controllers/socialMediaIntegrationController');

router.post('/connect', socialMediaIntegrationController.connectSocialMediaAccount);
router.post('/disconnect', socialMediaIntegrationController.disconnectSocialMediaAccount);

module.exports = router;
