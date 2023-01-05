require('dotenv').config();
const express = require("express");
const axios = require('axios');
const router = express.Router();

const { TOKEN, AUTH0_DOMAIN } = process.env;

router.get('/users', async (req, res) => {
    try {
        const response = await axios.get(`https://${AUTH0_DOMAIN}/api/v2/users/google-oauth2|116216233978414144733`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

module.exports = router;
