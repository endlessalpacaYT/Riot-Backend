async function friends(fastify, options) {
    fastify.get('/friends/api/v1/:accountId/blocklist', (request, reply) => {
        return reply.status(200).send({
            blockedUsers: []
        })
    })

    fastify.get('/friends/api/public/blocklist/:accountId', (request, reply) => {
        return reply.status(200).send({
            blockedUsers: []
        })
    })

    fastify.get('/epic/friends/v1/:accountId/blocklist', (request, reply) => {
        return reply.status(200).send({
            blockedUsers: []
        })
    })

    fastify.get('/friends/api/v1/:accountId/summary', (request, reply) => {
        return reply.status(200).send({
            "friends": [{
                "accountId": request.params.accountId,
                "groups": [],
                "mutual": 0,
                "alias": "",
                "note": "",
                "favorite": true,
                "created": "2021-01-17T16:42:04.125Z"
            }],
            "incoming": [],
            "suggested": [],
            "blocklist": [],
            "settings": {
                "acceptInvites": "public"
            },
            "limitsReached": {
                "incoming": false,
                "outgoing": false,
                "accepted": false
            }
        })
    })

    fastify.get('/friends/api/public/friends/:accountId', (request, reply) => {
        return reply.status(200).send([
            {
                accountId: request.params.accountId,
                status: 'ACCEPTED',
                direction: 'INBOUND',
                created: '2018-12-06T04:46:01.296Z',
                favorite: false
            }
        ])
    })

    fastify.get('/friends/api/v1/:accountId/recent/fortnite', (request, reply) => {
        return reply.status(200).send([])
    })

    fastify.get('/friends/api/v1/:accountId/settings', (request, reply) => {
        return reply.status(200).send({
            acceptInvites: "public"
        })
    })

    fastify.get('/friends/api/public/list/fortnite/:accountId/recentPlayers', (request, reply) => {
        return reply.status(200).send([])
    })

    fastify.get('/fortnite/api/game/v2/friendcodes/:accountId/epic', (request, reply) => {
        return reply.status(200).send([])
    })

    fastify.get('/presence/api/v1/_/:accountId/last-online', async (request, reply) => {
        reply.status(200).send({
            accountId: request.params.accountId,
            lastOnline: new Date().toISOString(),
        });
    });
}

module.exports = friends;