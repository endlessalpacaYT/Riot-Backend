const contentpages = require("../responses/content/contentPages.json");

async function content(fastify, options) {
    fastify.get('/content/api/pages/fortnite-game*', (request, reply) => {
        reply.status(200).send(contentpages);
    })

    fastify.post("/api/v1/fortnite-br/surfaces/motd/target", async (request, reply) => {
        const motd = JSON.parse(JSON.stringify(require("../responses/content/motd.json")));
    
        try {
            motd.contentItems.forEach(item => {
                item.contentFields.title = item.contentFields.title[request.body.language];
                item.contentFields.body = "en";
            })
        } catch (err) {}
    
        reply.status(200).send(motd)
    })

    fastify.post("/api/v1/fortnite-br/surfaces/dmotd/target", async (request, reply) => {
        const motd = JSON.parse(JSON.stringify(require("../responses/content/motd.json")));
    
        try {
            motd.contentItems.forEach(item => {
                item.contentFields.title = item.contentFields.title[request.body.language];
                item.contentFields.body = "en";
            })
        } catch (err) {}
    
        reply.status(200).send(motd)
    })
}

module.exports = content;