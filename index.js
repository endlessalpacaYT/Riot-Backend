const fastify = require('fastify')();
const formbody = require('@fastify/formbody');
const fs = require("fs");

const PORT = 5595;
const IP = "0.0.0.0";

fastify.register(formbody);

fs.readdirSync("./src/routes").forEach(fileName => {
  try {
      fastify.register(require(`./src/routes/${fileName}`));
  } catch (err) {
      console.error(`Error Registering Route: ${fileName}, Error: ` + err);
  }
});

fastify.setNotFoundHandler((request, reply) => {
    console.log(`404 Not Found - ${request.method} ${request.url}`);
    reply.status(404).send({
        error: 'riot.errors.common.not_found',
        error_description: "The route you requested is unavailable!",
        code: 404
    });
});

fastify.setErrorHandler((error, request, reply) => {
    if (reply.statusCode >= 400) {
        console.error(error);
    }
    reply.status(500).send({
        error: "riot.errors.common.server_error",
        error_description: "An internal server error has ocurred!",
        code: 500
    })
});

fastify.listen({ port: PORT, host: IP }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server running on ${address}`);
});