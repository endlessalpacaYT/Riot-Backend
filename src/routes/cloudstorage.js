async function cloudstorage(fastify, options) {
    fastify.get('/Builds/Fortnite/Content/CloudDir/*', (request, reply) => {
        return reply.status(200).send({
            status: "OK",
            code: 200
        })
    });

    fastify.get('/fortnite/api/cloudstorage/system', (request, reply) => {
        return reply.status(200).send({
            status: "OK",
            code: 200
        })
    });

    fastify.get('/fortnite/api/cloudstorage/system/config', (request, reply) => {
        return reply.status(200).send({
            status: "OK",
            code: 200
        })
    });
}

module.exports = cloudstorage;