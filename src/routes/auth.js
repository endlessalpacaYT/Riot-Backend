const jsonwebtoken = require('jsonwebtoken');

let token = jsonwebtoken.sign({
	"app": "prod-fn",
	"sub": "Riot",
	"mver": false,
	"clid": "ec684b8c687f479fadea3cb2ad83f5c6",
	"dn": "Riot",
	"am": "authorization_code",
	"pfpid": "prod-fn",
	"p": "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",
	"iai": "Riot",
	"sec": 1,
	"acr": "urn:epic:loa:aal1",
	"clsvc": "prod-fn",
	"t": "s",
	"scope": "basic_profile",
	"auth_time": 1725882476,
	"ic": true,
	"exp": 2147483647,
	"iat": 1725882476,
	"jti": "132fac2cc9c94fa08fdc3e65fef24f07"
  },"PS256",  {keyid:""})

async function auth(fastify, options) {
    fastify.post('/account/api/oauth/token', (request, reply) => {
        return reply.status(200).send({
            access_token: `eg1~${token}`,
			expires_in: 28800,
			expires_at: "9999-12-31T23:59:59.999Z",
			token_type: "bearer",
			account_id: "Riot",
			client_id: "Riot",
			internal_client: true,
			client_service: "fortnite",
			refresh_token: `eg1~${token}`,
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
            access_token: `eg1~${token}`,
			expires_in: 28800,
			expires_at: "9999-12-31T23:59:59.999Z",
			token_type: "bearer",
			account_id: "Riot",
			client_id: "Riot",
			internal_client: true,
			client_service: "fortnite",
			refresh_token: `eg1~${token}`,
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