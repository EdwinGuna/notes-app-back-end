const NotesHandler = require('./../notes/handler');
const routes = require('./../notes/routes');

module.exports = {
    name: 'notes',
    version: '1.0.0',
    register: async (server, { service, validator }) => {
        const notesHandler = new NotesHandler(service, validator);
        server.route(routes(notesHandler));
    },
};