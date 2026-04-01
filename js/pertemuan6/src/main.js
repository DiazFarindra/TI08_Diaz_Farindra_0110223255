import { index, store, destroy } from './controller.js';

const main = () => {
  // Tampilkan data awal
  index();

  // Tambahkan minimal 2 data baru
  store({ nama: 'Farindra Diaz', umur: 19, alamat: 'Jl. Menteng 5', email: 'farindra.diaz@email.com' });
  store({ nama: 'Adi Prasetyo', umur: 20, alamat: 'Jl. Rasuna Said 12', email: 'adi.prasetyo@email.com' });

  // Tampilkan data setelah penambahan
  index();

  // Hapus data pada index tertentu
  destroy(0);

  // Tampilkan data setelah penghapusan
  index();
};

main();
