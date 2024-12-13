async function misc(fastify, options) {
    fastify.get('/hotconfigs/v2/:filename', (request, reply) => {
        return reply.status(204)
    });

    fastify.patch('/v1/epic-settings/public/users/:accountId/values', (request, reply) => {
        reply.status(200).send(require("../responses/epic-settings.json"));
    })

    fastify.get('/v1/epic-settings/public/users/:accountId/values', (request, reply) => {
        reply.status(200).send(require("../responses/epic-settings.json"));
    })

    fastify.get('/salesEvent/salesEvent/*', (request, reply) => {
        reply.status(200);
    })
}

module.exports = misc;