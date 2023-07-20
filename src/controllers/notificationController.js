const Notification = require('../models/notificationModel');

const getNotifications = async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch the notifications for the specified user from the database
    const notifications = await Notification.find({ userId });

    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createNotification = async (req, res) => {
  try {
    const { userId, message } = req.body;

    // Create a new notification
    const notification = new Notification({
      userId,
      message,
    });

    const newNotification = await notification.save();

    res.status(201).json({ message: 'Notification created successfully', notification: newNotification });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getNotifications,
  createNotification,
};
