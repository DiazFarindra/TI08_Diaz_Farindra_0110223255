import users from './data.js';

// Tampilkan data - menampilkan semua user dengan map()
const index = () => {
  console.log('===== DATA PENGGUNA =====');
  const displayUsers = users.map((user, idx) => {
    return `${idx + 1}. ${user.nama} | Umur: ${user.umur} | Alamat: ${user.alamat} | Email: ${user.email}`;
  });
  displayUsers.forEach(user => console.log(user));
  console.log(`Total: ${users.length} data\n`);
};

// Tambahkan data
const store = (user) => {
  users.push(user);
  console.log(`✓ Data "${user.nama}" berhasil ditambahkan\n`);
};

// Hapus data
const destroy = (index) => {
  if (index >= 0 && index < users.length) {
    const deletedUser = users[index].nama;
    users.splice(index, 1);
    console.log(`✓ Data "${deletedUser}" berhasil dihapus\n`);
  } else {
    console.log('✗ Index tidak valid\n');
  }
};

export { index, store, destroy };
