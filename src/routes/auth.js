const jwt = require('jsonwebtoken');
const crypto = require("crypto");

async function auth(fastify, options) {
	fastify.post('/account/api/oauth/token', (request, reply) => {
		console.info("Grant Type: " + request.body.grant_type);
		return reply.status(200).send({
			"access_token": `eg1~Riot`,
			"expires_in": 2147483647,
			"expires_at": "9999-12-31T23:59:59.999Z",
			"token_type": "bearer",
			"refresh_token": `eg1~Riot`,
			"refresh_expires": 2147483647,
			"refresh_expires_at": "9999-12-31T23:59:59.999Z",
			"account_id": "Riot",
			"client_id": "ec684b8c687f479fadea3cb2ad83f5c6",
			"internal_client": true,
			"client_service": "prod-fn",
			"scope": [
				"basic_profile",
				"friends_list",
				"openid",
				"presence"
			],
			"displayName": "Riot",
			"app": "prod-fn",
			"in_app_id": "Riot",
			"product_id": "prod-fn",
			"application_id": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW",
			"acr": "urn:epic:loa:aal1",
			"auth_time": "1999-01-12T00:20:15.542Z"
		})
	})

	fastify.get('/account/api/oauth/verify', (request, reply) => {
		return reply.status(200).send({
			"access_token": `eg1~Riot`,
			"expires_in": 2147483647,
			"expires_at": "9999-12-31T23:59:59.999Z",
			"token_type": "bearer",
			"refresh_token": `eg1~Riot`,
			"refresh_expires": 2147483647,
			"refresh_expires_at": "9999-12-31T23:59:59.999Z",
			"account_id": "Riot",
			"client_id": "ec684b8c687f479fadea3cb2ad83f5c6",
			"internal_client": true,
			"client_service": "prod-fn",
			"scope": [
				"basic_profile",
				"friends_list",
				"openid",
				"presence"
			],
			"displayName": "Riot",
			"app": "prod-fn",
			"in_app_id": "Riot",
			"product_id": "prod-fn",
			"application_id": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW",
			"acr": "urn:epic:loa:aal1",
			"auth_time": "1999-01-12T00:20:15.542Z"
		})
	})

	fastify.post('/epic/oauth/v2/token', (request, reply) => {
		reply.status(200).send({
			"scope": "basic_profile friends_list openid presence",
			"token_type": "bearer",
			"access_token": `eg1~Riot`,
			"refresh_token": `eg1~Riot`,
			"id_token": `eg1~Riot`,
			"expires_in": 115200,
			"expires_at": "9999-12-31T23:59:59.999Z",
			"refresh_expires_in": 115200,
			"refresh_expires_at": "9999-12-31T23:59:59.999Z",
			"account_id": "Riot",
			"client_id": "ec684b8c687f479fadea3cb2ad83f5c6",
			"application_id": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW",
			"selected_account_id": "Riot",
			"merged_accounts": []
		})
	});

	fastify.post('/epic/oauth/v2/revoke', (request, reply) => {
		reply.status(200).send({
			"scope": "basic_profile friends_list openid presence",
			"token_type": "bearer",
			"access_token": `eg1~Riot`,
			"refresh_token": `eg1~Riot`,
			"id_token": `eg1~Riot`,
			"expires_in": 115200,
			"expires_at": "9999-12-31T23:59:59.999Z",
			"refresh_expires_in": 115200,
			"refresh_expires_at": "9999-12-31T23:59:59.999Z",
			"account_id": "Riot",
			"client_id": "ec684b8c687f479fadea3cb2ad83f5c6",
			"application_id": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW",
			"selected_account_id": "Riot",
			"merged_accounts": []
		})
	});

	fastify.post('/publickey/v2/publickey/', (request, reply) => {
        return reply.status(200).send({
			"key": request.body.key,
			"account_id": "Riot",
			"key_guid": "2e57bba7-4a7a-423c-b4b4-853acfcf019c",
			"kid": "20230621",
			"expiration": "9999-12-31T23:59:59.999Z",
			"jwt": "Riot",
			"type": "legacy"
		})
    });
}

module.exports = auth;