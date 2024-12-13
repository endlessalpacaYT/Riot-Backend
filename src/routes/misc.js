async function misc(fastify, options) {
    fastify.get('/hotconfigs/v2/:filename', (request, reply) => {
        return reply.status(204)
    });
}

module.exports = misc;