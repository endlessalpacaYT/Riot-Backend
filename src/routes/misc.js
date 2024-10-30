async function misc(fastify, options) {
    fastify.get('/hotconfigs/v2/:filename', (request, reply) => {
        return reply.status(200).send({
            status: "OK",
            code: 200
        })
    });

    fastify.post('/publickey/v2/publickey/', (request, reply) => {
        return reply.status(200).send({
            status: "OK",
            code: 200
        })
    });
}

module.exports = misc;