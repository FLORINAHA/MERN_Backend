const mongoose = require('mongoose');

const eventExportImportSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  events: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
    },
  ],
});

const EventExportImport = mongoose.model('EventExportImport', eventExportImportSchema);

module.exports = EventExportImport;
