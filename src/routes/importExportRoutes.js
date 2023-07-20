const express = require('express');
const router = express.Router();
const importExportController = require('../controllers/importExportController');

router.post('/export', importExportController.exportEvents);
router.post('/import', importExportController.importEvents);

module.exports = router;
