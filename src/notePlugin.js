const notesPlugin = {
  name: 'notes',
  version: '1.0.0',
  // fungsi register pada plugin memiliki 2 parameter
  register: async (server, options) => {
    // contoh menetapkan routing untuk /notes
    const { notes } = options;
    server.route([
      {
        method: 'GET',
        path: '/notes',
        handler: () => notes,
      },
    ]);
  },
};

module.exports = notesPlugin;
