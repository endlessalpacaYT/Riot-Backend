async function Fallback(accountId, profileId) {
    try {
        const profile = require(`../responses/DefaultProfiles/${profileId}`);
        if (!profile) {
            console.error(
                `Profile with ID ${profileId} for accountId ${accountId} not found.`
            );
            return {
                error: "riot.errors.profile.not_found",
            };
        }

        let multiUpdate = [];
        let ApplyProfileChanges = [];
        /*let BaseRevision = profile.rvn;
        let ProfileRevisionCheck = profile.commandRevision;
        let QueryRevision = rvn || -1;*/

        ApplyProfileChanges = [{
            "changeType": "fullProfileUpdate",
            "profile": profile
        }];

        const data = {
            profileRevision: profile.rvn || 0,
            profileId: profileId,
            profileChangesBaseRevision: profile.rvn || 0,
            profileChanges: ApplyProfileChanges,
            profileCommandRevision: profile.commandRevision || 0,
            serverTime: new Date().toISOString(),
            multiUpdate: multiUpdate,
            responseVersion: 1,
        };

        return data;
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
}

export default {
    Fallback,
};