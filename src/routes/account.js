async function account(fastify, options) {
    fastify.get('/account/api/public/account/:accountId', (request, reply) => {
        const { accountId } = request.params;

        return reply.status(200).send({
            id: accountId,
            displayName: accountId,
            externalAuths: {}
        })
    })

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

        reply.status(200).send({
            id: accountId,
			displayName: accountId,
			email: "developer@riot.dev",
			failedLoginAttempts: 0,
			lastLogin: "",
			numberOfDisplayNameChanges: 1,
			dateOfBirth: "1999-01-01",
			ageGroup: "ADULT",
			headless: false,
			country: "",
			phoneNumber: "",
			company: "Riot",
			preferredLanguage: "en",
			lastDisplayNameChange: "",
			canUpdateDisplayName: true,
			tfaEnabled: true,
			emailVerified: true,
			minorVerified: false,
			minorExpected: false,
			minorStatus: "NOT_MINOR",
			cabinedMode: false,
			hasHashedEmail: false,
			externalAuths: {},
        });
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
}

module.exports = account;