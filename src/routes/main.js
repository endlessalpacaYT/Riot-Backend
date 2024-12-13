async function main(fastify, options) {
    fastify.get('/launcher/api/public/distributionpoints', (request, reply) => {
        return reply.status(200).send({
            "distributions": [
                "http://localhost:5595/",
                "https://download.epicgames.com/",
                "https://epicgames-download1.akamaized.net/",
                "https://fastly-download.epicgames.com/"
            ]
        })
    });

    fastify.get('/waitingroom/api/waitingroom', (request, reply) => {
        reply.status(204).send();
    });

    fastify.get('/fortnite/api/game/v2/enabled_features', (request, reply) => {
        reply.status(200).send([]);
    })
}

module.exports = main;