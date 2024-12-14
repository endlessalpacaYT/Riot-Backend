async function bans(fastify, options) {
    fastify.get('/socialban/api/public/v1/:accountId', (request, reply) => {
        reply.status(200).send({
            "bans": [],
			"warnings": []
        })
    })
}

module.exports = bans;