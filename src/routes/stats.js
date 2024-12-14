async function stats(fastify, options) {
    fastify.get("/fortnite/api/statsv2/account/:accountId", (request, reply) => {
        reply.status(200).send({
            "startTime": 0,
            "endTime": 0,
            "stats": {},
            "accountId": request.params.accountId
        });
    });

    fastify.get("/statsproxy/api/statsv2/account/:accountId", (request, reply) => {
        reply.status(200).send({
            "startTime": 0,
            "endTime": 0,
            "stats": {},
            "accountId": request.params.accountId
        });
    });

    fastify.get("/fortnite/api/stats/accountId/:accountId/bulk/window/alltime", (request, reply) => {
        reply.status(200).send({
            "startTime": 0,
            "endTime": 0,
            "stats": {},
            "accountId": request.params.accountId
        });
    });

    fastify.get("/fortnite/api/game/v2/leaderboards/cohort/:accountId", async (request, reply) => {
        reply.status(200).send({
            "accountId": request.params.accountId,
            "cohortAccounts": [
                "Riot"
            ],
            "expiresAt": "9999-12-31T00:00:00.000Z",
            "playlist": request.query.playlist
        })
    })

    fastify.post("/fortnite/api/leaderboards/type/global/stat/:playlist/window/weekly", async (request, reply) => {
        reply.status(200).send([])
    })
}

module.exports = stats;