async function mcp(fastify, options) {
    fastify.post('/fortnite/api/game/v2/profile/:accountId/client/:operation', (request, reply) => {
        console.warn(`Unsupported MCP Operation: ${request.params.operation}`);
        try {
            const profile = require(`../responses/DefaultProfiles/${request.query.profileId}`);
            if (!profile) {
                console.error(
                    `Profile with ID ${request.query.profileId} for accountId ${request.params.accountId} not found.`
                );
                return {
                    error: "riot.errors.profile.not_found",
                };
            }

            let multiUpdate = [];
            let ApplyProfileChanges = [];
            let BaseRevision = profile.rvn;
            let ProfileRevisionCheck = profile.commandRevision;
            let QueryRevision = request.query.rvn || -1;

            if (QueryRevision != ProfileRevisionCheck) {
                ApplyProfileChanges = [{
                    "changeType": "fullProfileUpdate",
                    "profile": profile
                }];
            }

            reply.status(200).send({
                profileRevision: profile.rvn || 0,
                profileId: request.query.profileId,
                profileChangesBaseRevision: profile.rvn || 0,
                profileChanges: ApplyProfileChanges,
                profileCommandRevision: profile.commandRevision || 0,
                serverTime: new Date().toISOString(),
                multiUpdate: multiUpdate,
                responseVersion: 1,
            })
        } catch (err) {
            if (err instanceof Error) {
                console.error("An error occurred in Fallback:", err.message);
                return {
                    error: "riot.errors.internal_server_error",
                    message: err.message,
                };
            } else {
                console.error("An unknown error occurred.");
                return {
                    error: "riot.errors.unknown_error",
                };
            }
        }
    })
}

module.exports = mcp;