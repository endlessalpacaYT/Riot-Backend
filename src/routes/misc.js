async function misc(fastify, options) {
    fastify.get('/hotconfigs/v2/:filename', (request, reply) => {
        return reply.status(204)
    });

    fastify.post('/publickey/v2/publickey/', (request, reply) => {
        return reply.status(204)
    });
}

module.exports = misc;