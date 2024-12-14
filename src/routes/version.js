const functions = require("../utils/functions");

async function version(fastify, options) {
    fastify.get('/fortnite/api/v2/versioncheck/:platform', (request, reply) => {
        return reply.status(200).send({
            type: "NO_UPDATE"
        })
    })

    fastify.get('/fortnite/api/versioncheck/:platform', (request, reply) => {
        return reply.status(200).send({
            type: "NO_UPDATE"
        })
    })

    fastify.get("/fortnite/api/calendar/v1/timeline", (request, reply) => {
        const timeline = require("../responses/FortniteConfigs/timeline.json");
        const keychain = require("../responses/keychain.json");
        const memory = functions.GetVersionInfo(request);
        console.log(memory);
        timeline.channels.tk.states = [
            [
                {
                    validFrom: "2019-12-31T23:59:59.999Z",
                    activeEvents: [],
                    state: {
                        k: keychain,
                    }
                }
            ]
        ];
        timeline.channels.tk.cacheExpire = new Date(Date.now() - new Date().getTimezoneOffset() * 60000 + 1000).toISOString()
        timeline.channels["client-events"].states = [
            {
                "validFrom": "2019-12-31T23:59:59.999Z",
                "activeEvents": [
                    {
                        "eventType": "heard0stone78hole65stick178feet",
                        "activeUntil": "9999-12-31T23:59:59.999Z",
                        "activeSince": "2019-12-31T23:59:59.999Z"
                    },
                    {
                        "eventType": "RBFI",
                        "activeUntil": "9999-12-01T21:10:00.000Z",
                        "activeSince": "2020-11-21T07:00:00.000Z"
                    },
                    {
                        "eventType": "Gal_Crashes",
                        "activeUntil": "9999-09-14T07:00:00.000Z",
                        "activeSince": "2015-09-14T07:00:00.000Z"
                    },
                    {
                        "eventType": "Papaya_Stage",
                        "activeUntil": "9999-12-31T23:59:59.999Z",
                        "activeSince": "2021-06-05T14:00:00.000Z"
                    },
                    {
                        "eventType": "Papaya_Theater",
                        "activeUntil": "9999-12-31T23:59:59.999Z",
                        "activeSince": "2021-06-05T14:00:00.000Z"
                    }
                ],
                "state": {
                    "activeStorefronts": [],
                    "eventNamedWeights": {},
                    "activeEvents": [],
                    "seasonNumber": memory.season,
                    "seasonTemplateId": `AthenaSeason:athenaseason${memory.season}`,
                    "matchXpBonusPoints": 0,
                    "eventPunchCardTemplateId": "",
                    "seasonBegin": "2021-06-05T14:00:00Z",
                    "seasonEnd": "9999-12-31T23:59:59.999Z",
                    "seasonDisplayedEnd": "2021-09-30T04:00:00Z",
                    "dailyStoreEnd": "9999-12-31T23:59:59.999Z",
                    "weeklyStoreEnd": "9999-12-31T23:59:59.999Z",
                    "sectionStoreEnds": {},
                    "rmtPromotion": "melody"
                }
            }
        ]
        timeline.channels["client-events"].cacheExpire = new Date(Date.now() - new Date().getTimezoneOffset() * 60000 + 10000).toISOString()
        timeline.currentTime = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString();

        return reply.status(200).send(timeline);
    });
}

module.exports = version;