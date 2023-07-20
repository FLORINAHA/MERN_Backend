const Event = require('../models/eventModel');
const User = require('../models/userModel');
const Group = require('../models/groupModel');

const getEventStatistics = async (req, res) => {
  try {
    // Numărul total de evenimente
    const totalEvents = await Event.countDocuments();

    // Numărul total de evenimente în ultimele 30 de zile
    const last30DaysEvents = await Event.countDocuments({ date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } });

    // Numărul total de evenimente pentru fiecare lună din ultimele 12 luni
    const monthlyEvents = await Event.aggregate([
      {
        $group: {
          _id: { $month: '$date' },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json({ totalEvents, last30DaysEvents, monthlyEvents });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserStatistics = async (req, res) => {
  try {
    // Numărul total de utilizatori înregistrati
    const totalUsers = await User.countDocuments();

    // Numărul total de utilizatori care au creat cel puțin un eveniment
    const usersWithEvents = await User.countDocuments({ groups: { $exists: true, $ne: [] } });

    // Top 5 utilizatori cu cele mai multe evenimente create
    const topEventCreators = await User.aggregate([
      { $match: { groups: { $exists: true, $ne: [] } } },
      { $project: { name: 1, eventCount: { $size: '$groups' } } },
      { $sort: { eventCount: -1 } },
      { $limit: 5 },
    ]);

    res.json({ totalUsers, usersWithEvents, topEventCreators });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getGroupStatistics = async (req, res) => {
  try {
    // Numărul total de grupuri
    const totalGroups = await Group.countDocuments();

    // Numărul total de evenimente create pentru fiecare grup
    const groupEventCounts = await Group.aggregate([
      { $lookup: { from: 'events', localField: 'members', foreignField: 'members', as: 'events' } },
      { $project: { name: 1, eventCount: { $size: '$events' } } },
      { $sort: { eventCount: -1 } },
    ]);

    res.json({ totalGroups, groupEventCounts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getEventStatistics,
  getUserStatistics,
  getGroupStatistics,
};
