const Gallery = require('../models/galleryModel');

const getMediaByEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    // Fetch the media (photos and videos) for the specified event from the database
    const media = await Gallery.find({ eventId });

    res.json(media);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addMedia = async (req, res) => {
  try {
    const { eventId, title, description, mediaType, mediaURL } = req.body;

    // Create a new media entry for the specified event
    const media = new Gallery({
      eventId,
      title,
      description,
      mediaType,
      mediaURL,
    });

    const newMedia = await media.save();

    res.status(201).json({ message: 'Media added successfully', media: newMedia });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getMediaByEvent,
  addMedia,
};
