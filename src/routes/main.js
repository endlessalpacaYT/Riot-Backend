async function main(fastify, options) {
    fastify.get('/launcher/api/public/distributionpoints', (request, reply) => {
        // ok so like just this works, so thats fire
        return reply.status(200).send({
            status: "OK",
            code: 200
        })
    });

    fastify.get('/waitingroom/api/waitingroom', (request, reply) => {
        return reply.status(200).send({
            status: "OK",
            code: 200
        })
    });
}

module.exports = main;