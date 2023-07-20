const SocialMediaIntegration = require('../models/socialMediaIntegrationModel');

const connectSocialMediaAccount = async (req, res) => {
  try {
    const { userId, socialMediaPlatform, accessToken, refreshToken } = req.body;

    // Check if the user already has an integration with the given social media platform
    const existingIntegration = await SocialMediaIntegration.findOne({ userId, socialMediaPlatform });

    if (existingIntegration) {
      return res.status(409).json({ message: 'Social media account already connected' });
    }

    // Create a new integration record
    const integration = new SocialMediaIntegration({
      userId,
      socialMediaPlatform,
      accessToken,
      refreshToken,
    });

    const savedIntegration = await integration.save();

    res.status(201).json({ message: 'Social media account connected successfully', integration: savedIntegration });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const disconnectSocialMediaAccount = async (req, res) => {
  try {
    const { userId, socialMediaPlatform } = req.body;

    // Find and remove the integration record
    const deletedIntegration = await SocialMediaIntegration.findOneAndDelete({ userId, socialMediaPlatform });

    if (!deletedIntegration) {
      return res.status(404).json({ message: 'Social media account not found' });
    }

    res.json({ message: 'Social media account disconnected successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  connectSocialMediaAccount,
  disconnectSocialMediaAccount,
};
