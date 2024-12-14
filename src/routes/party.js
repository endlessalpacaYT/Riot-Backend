async function party(fastify, options) {
    fastify.get('/party/api/v1/Fortnite/user/:accountId', (request, reply) => {
        reply.status(200).send({
            "current": [],
            "pending": [],
            "invites": [],
            "pings": []
        })
    })

    fastify.get('/party/api/v1/Fortnite/user/:accountId/notifications/undelivered/count', (request, reply) => {
        reply.status(200).send({
            "undeliveredCount": 0
        })
    })

    fastify.get('/party/api/v1/Fortnite/user/:accountId/settings/privacy', (request, reply) => {
        reply.status(200).send([])
    })
}

module.exports = party;