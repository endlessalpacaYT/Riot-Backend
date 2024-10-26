async function auth(fastify, options) {
    fastify.post('/account/api/oauth/token', (request, reply) => {
        return reply.status(200).send({
            access_token: "Riot",
			expires_in: 28800,
			expires_at: "9999-12-31T23:59:59.999Z",
			token_type: "bearer",
			account_id: "Riot",
			client_id: "Riot",
			internal_client: true,
			client_service: "fortnite",
			refresh_token: "Riot",
			refresh_expires: 115200,
			refresh_expires_at: "9999-12-31T23:59:59.999Z",
			displayName: "Riot",
			app: "fortnite",
			in_app_id: "Riot",
			device_id: "5dcab5dbe86a7344b061ba57cdb33c4f"
        })
    })

    fastify.get('/account/api/oauth/verify', (request, reply) => {
        return reply.status(200).send({
            access_token: "Riot",
			expires_in: 28800,
			expires_at: "9999-12-31T23:59:59.999Z",
			token_type: "bearer",
			account_id: "Riot",
			client_id: "Riot",
			internal_client: true,
			client_service: "fortnite",
			refresh_token: "Riot",
			refresh_expires: 115200,
			refresh_expires_at: "9999-12-31T23:59:59.999Z",
			displayName: "Riot",
			app: "fortnite",
			in_app_id: "Riot",
			device_id: "5dcab5dbe86a7344b061ba57cdb33c4f"
        })
    })
}

module.exports = auth;