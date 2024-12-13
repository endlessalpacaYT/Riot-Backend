async function error(fastify, options) {
    fastify.get('/api/v1/access/fortnite/client-logs*', (request, reply) => {
        reply.status(204);
    })
}

module.exports = error;