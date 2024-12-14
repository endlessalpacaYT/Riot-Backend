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

    fastify.put('/profile/play_region', (request, reply) => {
        reply.status(204);
    })

    fastify.put('/profile/languages', (request, reply) => {
        reply.status(200);
    })

    fastify.put('/profiles', (request, reply) => {
        reply.status(200);
    })

    fastify.post('/links/api/fn/mnemonic', (request, reply) => {
        reply.status(204);
    })

    fastify.get('/api/content/v2/launch-data', (request, reply) => {
        reply.status(204);
    })

    fastify.get('/sdk/v1/product/prod-fn', (request, reply) => {
        reply.status(204);
    })
}

module.exports = misc;