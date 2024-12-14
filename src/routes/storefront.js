async function storefront(fastify, options) {
    fastify.get('/fortnite/api/storefront/v2/catalog', (request, reply) => {
        reply.status(200).send(require("../responses/shop/shop.json"));
    })

    fastify.get('/catalog/api/shared/bulk/offers', (request, reply) => {
        reply.status(200).send({});
    })

    fastify.post('/catalog/api/shared/namespace/fn/bulk/offers', (request, reply) => {
        reply.status(200).send({});
    })

    fastify.get('/fortnite/api/storefront/v2/keychain', (request, reply) => {
        reply.status(200).send(require("../responses/keychain.json"));
    })
}

module.exports = storefront;