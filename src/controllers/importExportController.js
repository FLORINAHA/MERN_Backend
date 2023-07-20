const EventExportImport = require('../models/eventExportImportModel');

const exportEvents = async (req, res) => {
  try {
    const { userId } = req.body;

    // Fetch the events of the specified user from the database
    const events = await Event.find({ userId });

    // Create an export record
    const exportData = new EventExportImport({
      userId,
      events,
    });

    const savedExportData = await exportData.save();

    res.status(201).json({ message: 'Events exported successfully', exportData: savedExportData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const importEvents = async (req, res) => {
  try {
    const { userId, events } = req.body;

    // Create or update the events of the specified user in the database
    const importData = new EventExportImport({
      userId,
      events,
    });

    const savedImportData = await importData.save();

    res.status(201).json({ message: 'Events imported successfully', importData: savedImportData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  exportEvents,
  importEvents,
};
