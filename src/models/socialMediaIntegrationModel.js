const mongoose = require('mongoose');

const socialMediaIntegrationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  socialMediaPlatform: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

const SocialMediaIntegration = mongoose.model('SocialMediaIntegration', socialMediaIntegrationSchema);

module.exports = SocialMediaIntegration;
