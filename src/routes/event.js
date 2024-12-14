async function event(fastify, options) {
    fastify.get('/api/v1/events/Fortnite/download/:accountId', (request, reply) => {
        const json = require("../responses/event/eventDownload.json");
        json.player.accountId = request.params.accountId;
        reply.status(200).send(json);
    })

    fastify.get('/api/v1/events/Fortnite/:accountId/history/:accountId', (request, reply) => {
        reply.status(200).send([]);
    })
}

module.exports = event;