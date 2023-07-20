const Map = require('../models/mapModel');

const getMapLocationByEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    // Fetch the map location for the specified event from the database
    const mapLocation = await Map.findOne({ eventId });

    if (!mapLocation) {
      return res.status(404).json({ message: 'Map location not found for the event' });
    }

    res.json(mapLocation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addMapLocation = async (req, res) => {
  try {
    const { eventId, locationName, latitude, longitude } = req.body;

    // Create a new map location entry for the specified event
    const mapLocation = new Map({
      eventId,
      locationName,
      latitude,
      longitude,
    });

    const newMapLocation = await mapLocation.save();

    res.status(201).json({ message: 'Map location added successfully', mapLocation: newMapLocation });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getMapLocationByEvent,
  addMapLocation,
};
