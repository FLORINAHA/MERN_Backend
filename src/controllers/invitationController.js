const Event = require('../models/eventModel');

const sendInvitation = async (req, res) => {
  const { eventId, userId } = req.body;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    event.participants.push(userId);
    await event.save();

    res.json({ message: 'Invitation sent successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  sendInvitation,
};
