const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
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
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  photos: [
    {
      type: String, // sau Buffer pentru a stoca direct imaginea
    },
  ],
  videos: [
    {
      type: String,
    },
  ],
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
