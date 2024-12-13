const path = require('path');
const crypto = require("crypto");
const fs = require('fs');

async function cloudstorage(fastify, options) {
    fastify.get('/Builds/Fortnite/Content/CloudDir/*', (request, reply) => {
        return reply.status(200).send({
            status: "OK",
            code: 200
        })
    });

    fastify.get('/fortnite/api/cloudstorage/system', async (request, reply) => {
        const dir = path.join(__dirname, "..", "CloudStorage");

        let CloudFiles = [];

        fs.readdirSync(dir).forEach(name => {
            if (name.toLowerCase().endsWith(".ini")) {
                const ParsedFile = fs.readFileSync(path.join(dir, name)).toString();
                const ParsedStats = fs.statSync(path.join(dir, name));

                CloudFiles.push({
                    "uniqueFilename": name,
                    "filename": name,
                    "hash": crypto.createHash('sha1').update(ParsedFile).digest('hex'),
                    "hash256": crypto.createHash('sha256').update(ParsedFile).digest('hex'),
                    "length": ParsedFile.length,
                    "contentType": "application/octet-stream",
                    "uploaded": ParsedStats.mtime,
                    "storageType": "S3",
                    "storageIds": {},
                    "doNotCache": true
                });
            }
        });
        reply.status(200).send(CloudFiles);
    });

    fastify.get('/fortnite/api/cloudstorage/system/:filename', (request, reply) => {
        const file = path.join(__dirname, "..", "CloudStorage", path.basename(request.params.file));
    
        if (fs.existsSync(file)) return reply.status(200).send(fs.readFileSync(file));
    
        reply.status(200);
    });

    fastify.get('/fortnite/api/cloudstorage/user/:accountId', (request, reply) => {
		reply.json([]);
	});

	fastify.get('/fortnite/api/cloudstorage/user/:accountId/:fileName', (request, reply) => {
		reply.status(204).send();
	});

	fastify.put('/fortnite/api/cloudstorage/user/:accountId/:fileName', (request, reply) => {
		reply.status(204).send();
	});
}

module.exports = cloudstorage;