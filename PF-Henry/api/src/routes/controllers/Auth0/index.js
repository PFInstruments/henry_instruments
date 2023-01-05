const { Auth0Client } = require('auth0');
const axios = require('axios');

// const { AUTH0_DOMAIN, CLIENT_ID, CLIENT_SECRET } = process.env;

const client = new Auth0Client({
    domain: "dev-w13mh41y6tcoh6qo.us.auth0.com",
    clientId: "FG1yh8K03AYA7cTh9mBtwqoifliLDg4B",
    clientSecret: "qOC-jiI4sIcMGiUcJwc8Kqc7_U2NNcyPahgtydx7Uhp6_erypTlPQjoMqkq039Ji",
});

async function getAccessToken() {
    try {
        const token = await client.getAccessToken();
        return token;
    } catch (error) {
        console.error(error);
    }
}

async function getUsers() {
    try {
        const token = await getAccessToken();
        console.log(token)
        const response = await axios.get("https://dev-w13mh41y6tcoh6qo.us.auth0.com/api/v2/users", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getUsers,
};

