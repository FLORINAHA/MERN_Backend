const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  mediaType: {
    type: String,
    required: true,
    enum: ['photo', 'video'],
  },
  mediaURL: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
