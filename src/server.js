/* eslint-disable indent */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 5000,
        host: process.env.NODE_ENV || '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    const Console = console;
    Console.log(`${server.info.host} berjalan pada ${server.info.uri}`);
};

init();
