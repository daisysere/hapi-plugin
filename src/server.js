/*
Server.js memiliki tanggung jawab menyimpan kode berupa:
- membuat HTTP server menggunakan Hapi
- mengkonfigurasi HTTP server menggunakan Hapi
- menjalankan HTTP server menggunakan Hapi
*/

// const Hapi = require('@hapi/hapi');
// const notesPlugin = require('./notePlugin');
// const otherPlugin = require('./otherPlugin');

// const init = async () => {
//   const server = Hapi.server();

//   // registrasi satu plugin
//   await server.register([
//     {
//       plugin: notesPlugin,
//       options: { notes: [] },
//     },
//     {
//       // contoh salah satu cara mendaftarkan banyak plugin seklaigus
//       plugin: otherPlugin,
//       options: { /* berikan nilai options jika dibutuhkan */ },
//     },
//   ]);

//   await server.start();
// };

// init();

/* eslint-disable no-unused-vars */
const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./services/inMemory/NotesService');
const NotesValidator = require('./validator/notes');

const init = async () => {
  const notesService = new NotesService();

  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      service: notesService,
      validator: NotesValidator,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
