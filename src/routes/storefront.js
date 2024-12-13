async function storefront(fastify, options) {
    fastify.get('/fortnite/api/storefront/v2/catalog', (request, reply) => {
        reply.status(200).send(require("../responses/shop/shop.json"));
    })

    fastify.get('/fortnite/api/storefront/v2/keychain', (request, reply) => {
        reply.status(200).send(require("../responses/keychain.json"));
    })
}

module.exports = storefront;