/* terdiri dari
1. Fungsi mapDBToModel untuk menyesuaikan kembali struktur model dengan cara mapping objek
*/
const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  body,
  tags,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = mapDBToModel;
