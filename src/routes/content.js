const axios = require('axios');

async function content(fastify, options) {
    fastify.get('/content/api/pages/fortnite-game*', async (request, reply) => {
        const url = "https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game";
        /*const options = {
            headers: request.headers,
            params: request.query,
            timeout: 10000
        };*/
        const response = await axios.get(url);

        reply.status(response.status).send(response.data);
    })

    fastify.post("/api/v1/fortnite-br/surfaces/motd/target", async (request, reply) => {
        const motd = JSON.parse(JSON.stringify(require("../responses/content/motd.json")));
    
        try {
            motd.contentItems.forEach(item => {
                item.contentFields.title = item.contentFields.title[request.body.language];
                item.contentFields.body = "en";
            })
        } catch (err) {}
    
        reply.status(200).send(motd)
    })

    fastify.post("/api/v1/fortnite-br/surfaces/dmotd/target", async (request, reply) => {
        const motd = JSON.parse(JSON.stringify(require("../responses/content/motd.json")));
    
        try {
            motd.contentItems.forEach(item => {
                item.contentFields.title = item.contentFields.title[request.body.language];
                item.contentFields.body = "en";
            })
        } catch (err) {}
    
        reply.status(200).send(motd)
    })
}

module.exports = content;