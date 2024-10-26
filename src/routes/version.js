async function version(fastify, options) {
    fastify.get('/fortnite/api/v2/versioncheck/:platform', (request, reply) => {
        const { platform } = request.params;
        return reply.status(200).send({
            type: "NO_UPDATE",
            platform: platform
        })
    })
}

module.exports = version;