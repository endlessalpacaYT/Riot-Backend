async function error(fastify, options) {
    fastify.get('/api/v1/access/fortnite/client-logs*', (request, reply) => {
        reply.status(204);
    })

    fastify.get('/api/v1/access/fortnite/client-feedback*', (request, reply) => {
        reply.status(204);
    })

    fastify.post('/fortnite/api/feedback/Error', (request, reply) => {
        reply.status(204);
    })
}

module.exports = error;