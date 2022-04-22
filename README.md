Project ini merupakan restrukturasi dari proyek notes-app-back-end yang mengimplementasikan Hapi Plugin dan Data Validation

1. ./src/services
Folder services akan menampung segala fungsi untuk:
- menulis
- mendapatkan
- mengubah
- menghapus sebuah resource
Folder service akan fokus dalam menangani operasi CRUD

2. ./src/services/inMemory/NotesService.js
- File ini akan menyimpan pengelolaan resource seperti menyimpan, membaca, mengubah dan menghapus catatan.
- Beberapa method yang terdapat dalam file ini:
a. method addNote untuk menyimpan
b. method getNotes untuk mendaftar
c. getNoteById untuk membaca
d. method editNoteById untuk mengubah
e. method deleteNoteById untuk menghapus catatan

3. ./src/api/notes/routes.js
- File server.js memiliki ketergantunfan terhadap file routes.js
- File ini akan menampung kode dalam menentukan routes pada Hapi server seperti path, method dan handler yang digunakan
- Jika pada aplikasi notes-app-back-end routes berisi tiap method dengan handler masing", di aplikasi ini routes.js justru tidak perlu tahu dari mana handler berasal (tidak ada proses import module satu per satu)


4. ./src/api/notes/handler.js
- File ini akan menangani request secara spesifik berdasarkan method API yang digunakan
- File ini berbeda dengan handler.js yang terdapat di aplikasi satu lagi,fimana fungsi handler dibuat sesuai tanggung jawabnya masing". Setiap fungsi tidak perlu tahu bagaiaman resource disimpan, 

.