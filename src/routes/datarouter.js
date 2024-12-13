async function datarouter(fastify, options) {
    fastify.post('/datarouter/api/v1/public/data', (request, reply) => {
        return reply.status(204)
    })

    fastify.post('/datarouter/api/v1/public/data/clients', (request, reply) => {
        return reply.status(204)
    })

    fastify.post('/telemetry/data/datarouter/api/v1/public/data', (request, reply) => {
        return reply.status(204)
    })
}

module.exports = datarouter;