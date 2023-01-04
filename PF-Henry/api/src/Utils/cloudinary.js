const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const { CLOUD_NAME, CLOUD_KEY, CLOUD_KEY_SECRET } = process.env;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_KEY,
    api_secret: CLOUD_KEY_SECRET,
});

module.exports = cloudinary;
