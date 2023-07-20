const Message = require('../models/messageModel');

const getMessagesByEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    // Fetch all messages for the specified event from the database
    const messages = await Message.find({ eventId });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { eventId, senderId, content } = req.body;

    // Create a new message for the specified event and sender
    const message = new Message({
      eventId,
      senderId,
      content,
    });

    const newMessage = await message.save();

    res.status(201).json({ message: 'Message sent successfully', message: newMessage });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getMessagesByEvent,
  sendMessage,
};
