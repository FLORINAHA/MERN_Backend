const mongoose = require('mongoose');

const statisticsSchema = new mongoose.Schema({
  eventType: {
    type: String,
    required: true,
  },
  eventCount: {
    type: Number,
    required: true,
    default: 0,
  },
  participantsCount: {
    type: Number,
    required: true,
    default: 0,
  },
  interactionsCount: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Statistics = mongoose.model('Statistics', statisticsSchema);

module.exports = Statistics;
