/* eslint-disable indent */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 5000,
        host: 'https://simple-note-apps.herokuapp.com',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    const Console = console;
    Console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
