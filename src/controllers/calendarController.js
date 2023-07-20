const Event = require('../models/eventModel');

const getCalendarEvents = async (req, res) => {
  const { userId } = req.query;
  try {
    const events = await Event.find({ participants: userId });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCalendarEvents,
};
