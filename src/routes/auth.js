const jwt = require('jsonwebtoken');
const crypto = require("crypto");
const axios = require('axios');

let client_credentials_accessToken;

async function auth(fastify, options) {
	fastify.post('/account/api/oauth/token', async (request, reply) => {
		const { grant_type } = request.body;
		console.log("Request Headers: ", request.headers);
		console.log("Request Body: ", request.body);
		const url = "https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token";
		let response;
		let data = {
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
		}
		if (grant_type == "client_credentials") {
			if (!client_credentials_accessToken) {
				console.log(request.headers["authorization"]);
			axios.post(url, new URLSearchParams({
				grant_type: 'client_credentials',
				token_type: request.body.token_type
			}).toString(), {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					"Authorization": request.headers["authorization"]
				}
			})
				.then(response => {
					console.log("Response Body:", response.data);

					data.access_token = response.data.access_token;
					data.expires_in = response.data.expires_in;
					data.expires_at = response.data.expires_at;
					data.token_type = response.data.token_type;
					data.client_id = response.data.client_id;
					data.internal_client = response.data.internal_client;
					data.client_service = response.data.client_service;
					data.product_id = response.data.product_id;
					data.application_id = response.data.application_id;

					reply.status(200).send(data);
				})
				.catch(error => {
					console.warn("Encountered an error:", error);
					console.log("Error:", error.response ? error.response.data : error);
					reply.status(200).send(data);
				});
			}
			return reply.status(200).send(data);
		} else {
			return reply.status(200).send(data);
		}
	})

	/*fastify.get('/account/api/oauth/verify', (request, reply) => {
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
	})*/

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

	fastify.post('/auth/v1/oauth/token', (request, reply) => {
		const { grant_type, deployment_id } = request.body

		if (grant_type == "external_auth") {
			return reply.status(200).send({
				"access_token": `Riot`,
				"token_type": "bearer",
				"expires_at": "9999-12-31T23:59:59.999Z",
				"nonce": "6YBf2FT1QEivxlOCfueeww",
				"features": [
					"AntiCheat",
					"Connect",
					"Ecom",
					"Inventories",
					"LockerService"
				],
				"organization_id": "o-aa83a0a9bc45e98c80c1b1c9d92e9e",
				"product_id": "prod-fn",
				"sandbox_id": "fn",
				"deployment_id": deployment_id,
				"organization_user_id": "000185f80b9a4dc3aaf1ca83611c2bf5",
				"product_user_id": "00027b91959a4c57a1272efcc4d7480f",
				"product_user_id_created": false,
				"id_token": `Riot`,
				"expires_in": 3599
			})
		}
		else {
			return reply.status(200).send({
				"access_token": `Riot`,
				"token_type": "bearer",
				"expires_at": "9999-12-31T23:59:59.999Z",
				"features": [],
				"organization_id": "o-aa83a0a9bc45e98c80c1b1c9d92e9e",
				"product_id": "prod-fn",
				"sandbox_id": "fn",
				"deployment_id": deployment_id,
				"expires_in": 115200
			});
		}
	})

	fastify.get('/fortnite/api/discovery/accessToken/*', (request, reply) => {
		const useragent = request.headers["user-agent"];
		const regex = useragent.match(/\+\+Fortnite\+Release-\d+\.\d+/);
		reply.status(200).send({
			"branchName": regex[0],
			"appId": "Fortnite",
			"token": `${crypto.randomBytes(10).toString("hex")}=`
		})
	})

	fastify.post('/epic/oauth/v2/tokenInfo', (request, reply) => {
		reply.status(200).send({
			"active": true,
			"scope": "basic_profile openid offline_access",
			"token_type": "bearer",
			"expires_in": 2147483647,
			"expires_at": "9999-12-31T23:59:59.999Z",
			"account_id": "Riot",
			"client_id": "ec684b8c687f479fadea3cb2ad83f5c6",
			"application_id": "fghi45672f0QV6b6B1KntLd7JR7RFLWc"
		})
	})
}

module.exports = auth;