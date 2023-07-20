const Review = require('../models/reviewModel');

const getReviewsByEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    // Fetch the reviews for the specified event from the database
    const reviews = await Review.find({ eventId });

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addReview = async (req, res) => {
  try {
    const { eventId, userId, rating, comment } = req.body;

    // Create a new review entry for the specified event and user
    const review = new Review({
      eventId,
      userId,
      rating,
      comment,
    });

    const newReview = await review.save();

    res.status(201).json({ message: 'Review added successfully', review: newReview });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getReviewsByEvent,
  addReview,
};
