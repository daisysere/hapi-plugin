/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');

class NotesService {
  constructor() {
    // aplikasi ini menggunakan teknik pool daripada client
    // karna akan sering berinteraksi dengan database
    this._pool = new Pool();
  }

  async addNote({ title, body, tags }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    // query untuk memasukkan notes baru
    const query = {
      text: 'INSERT INTO notes VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
      values: [id, title, body, tags, createdAt, updatedAt],
    };

    const result = await this._pool.query(query);

    // untuk memastikan notes berhasil dimasukkan ke database
    if (!result.rows[0].id) { // apakah undefined
      throw new InvariantError('Catatan gagal ditambahkan');
    }

    return result.rows[0].id;
  }
}

module.exports = NotesService;
