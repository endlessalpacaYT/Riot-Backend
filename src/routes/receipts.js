async function receipts(fastify, options) {
    fastify.get('/fortnite/api/receipts/v1/account/:accountId/receipts', (request, reply) => {
        reply.status(200).send([]);
    })
}

module.exports = receipts;