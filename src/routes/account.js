async function account(fastify, options) {
    fastify.get('/account/api/public/account/:accountId', (request, reply) => {
        const { accountId } = request.params;

        return reply.status(200).send({
            id: accountId,
            displayName: accountId,
            externalAuths: {}
        })
    })

    fastify.get('/api/v1/public/accounts', async (request, reply) => {
        return reply.status(200).send({
            id: request.query.accountId,
            displayName: request.query.accountId,
            externalAuth: {}
        })
    });

    fastify.get('/account/api/public/account', (request, reply) => {
        const { accountId } = request.query;

        reply.status(200).send({
            id: accountId,
            displayName: accountId,
            name: "Riot",
            email: `riot@riot.dev`,
            failedLoginAttempts: 0,
            lastLogin: new Date().toISOString(),
            numberOfDisplayNameChanges: 0,
            ageGroup: "UNKNOWN",
            headless: false,
            country: "US",
            lastName: "Server",
            preferredLanguage: "en",
            canUpdateDisplayName: false,
            tfaEnabled: false,
            emailVerified: true,
            minorVerified: false,
            minorExpected: false,
            minorStatus: "UNKNOWN",
            cabinedMode: false,
            hasHashedEmail: false
        });
    })

    fastify.get('/epic/id/v2/sdk/accounts', (request, reply) => {
        const { accountId } = request.query;

        reply.status(200).send([
            {
                "accountId": accountId,
                "displayName": accountId,
                "preferredLanguage": "en",
                "linkedAccounts": [],
                "cabinedMode": false,
                "empty": false
            }
        ]);
    })

    fastify.get('/account/api/public/account/:accountId/externalAuths', (request, reply) => {
        const { accountId } = request.params;

        return reply.status(200).send({
            id: accountId,
            externalAuths: {}
        })
    })

    fastify.post('/fortnite/api/game/v2/tryPlayOnPlatform/account/:accountId', (request, reply) => {
        reply.header("Content-Type", "text/plain");
        return reply.status(200).send("true");
    });

    fastify.post('/fortnite/api/game/v2/grant_access/:accountId', (request, reply) => {
        reply.status(204);
    })

    fastify.get('/content-controls/:accountId', (request, reply) => {
        return reply.status(200).send({
            'data': {
                'ageGate': 0,
                'controlsEnabled': false,
                'maxEpicProfilePrivacy': 'none',
                'principalId': request.params.accountId
            }
        });
    })

    fastify.get('/fortnite/api/game/v2/privacy/account/Riot', (request, reply) => {
        reply.status(200).send({
            "accountId": request.params.accountId,
            "optOutOfPublicLeaderboards": false
        });
    })

    fastify.get('/content-controls/:accountId/rules/namespaces/fn', (request, reply) => {
        reply.status(204);
    })

    fastify.get('/region', (request, reply) => {
        reply.status(200).send(require("../responses/region.json"));
    })

    fastify.get('/fortnite/api/game/v2/br-inventory/account/:accountId', (request, reply) => {
        reply.status(200).send({
            "stash": {
                "globalcash": 0
            },
        })
    })

    fastify.get('/presence/api/v1/_/:accountId/settings/subscriptions', (request, reply) => {
        return reply.status(204);
    })

    fastify.get('/api/v2/interactions/aggregated/Fortnite/:accountId', (request, reply) => {
        reply.status(204);
    })

    fastify.get('/api/v2/interactions/latest/Fortnite/:accountId', (request, reply) => {
        reply.status(204);
    })

    fastify.get('/api/v1/games/fortnite/trackprogress/:accountId', (request, reply) => {
        reply.status(204);
    })

    fastify.get('/api/v1/lfg/Fortnite/users/:accountId/settings', (request, reply) => {
        reply.status(200).send([]);
    })

    fastify.get('/api/v1/links/history/:accountId', (request, reply) => {
        reply.status(200).send([]);
    })
}

module.exports = account;