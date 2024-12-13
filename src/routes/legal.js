async function legal(fastify, options) {
    const eulaData = [
        {
            id: "Riot",
            locale: "en",
            text: "End User License Agreement for Riot - Version 1.0"
        },
    ];

    fastify.get("/eulatracking/api/shared/agreements/fn", (request, reply) => {
        reply.status(200).send(eulaData);
    });

    fastify.get("/eulatracking/api/public/agreements/fn/account/:accountId", (request, reply) => {
        reply.status(204).send();
    });
}

module.exports = legal;