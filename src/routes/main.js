const functions = require("../utils/functions");

async function main(fastify, options) {
    fastify.get('/launcher/api/public/distributionpoints', (request, reply) => {
        return reply.status(200).send({
            "distributions": [
                "http://localhost:5595/",
                "https://download.epicgames.com/",
                "https://epicgames-download1.akamaized.net/",
                "https://fastly-download.epicgames.com/"
            ]
        })
    });

    fastify.get('/waitingroom/api/waitingroom', (request, reply) => {
        reply.status(204).send();
    });

    fastify.get('/fortnite/api/game/v2/enabled_features', (request, reply) => {
        reply.status(200).send([]);
    })

    fastify.put('/profile/privacy_settings', (request, reply) => {
        reply.status(200).send({
            "privacySettings":{
				"playRegion":"PRIVATE",
				"badges":"PRIVATE",
				"languages":"PRIVATE"
			}
        })
    })

    fastify.post('/api/v1/assets/Fortnite/:version/:cl', (request, reply) => {
        const { version } = getVersionInfo(request);
		const FrontendAssets =  require("../responses/FortniteConfigs/FortniteAssets.json");
		const FortniteGameConfig = require("../responses/FortniteConfigs/FortniteGameConfig.json");
		if (version >= 24.00) {
			FrontendAssets.FortPlaylistAthena = {
				"meta": {
					"promotion": 9
				},
				"assets": {
					[FortniteGameConfig.playlist_config]: {
						"meta": {
							"revision": 2,
							"headRevision": 2,
							"revisedAt": "2023-11-27T06:41:57.818Z",
							"promotion": 3,
							"promotedAt": "2023-11-27T06:43:00.452Z"
						},
						"assetData": FortniteGameConfig.playlist_settings
					}
				}
			};
		}
		reply.status(200).send(FrontendAssets)
    })

    fastify.get('/gameRating/gameRating/*', (request, reply) => {
        reply.status(204);
    })

    fastify.get('/api/v1/games/fortnite/tracks/query', (request, reply) => {
        reply.status(204);
    })
}

module.exports = main;