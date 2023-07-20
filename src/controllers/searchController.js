const Event = require('../models/eventModel');

const searchEvents = async (req, res) => {
  const { keyword } = req.query;
  try {
    const events = await Event.find({
      $or: [
        { name: { $regex: keyword, $options: 'i' } },
        { description: { $regex: keyword, $options: 'i' } },
      ],
    });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  searchEvents,
};
