async function datarouter(fastify, options) {
    fastify.post('/datarouter/api/v1/public/data', (request, reply) => {
        return reply.status(200).send({
            status: "OK",
            code: 200
        })
    })
}

module.exports = datarouter;