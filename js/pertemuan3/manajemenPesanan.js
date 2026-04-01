const produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

function tambahProduk(nama, harga, stok) {
  const idBaru =
    produkToko.length > 0
      ? Math.max(...produkToko.map((produk) => produk.id)) + 1
      : 1;

  const produkBaru = { id: idBaru, nama, harga, stok };
  produkToko.push(produkBaru);

  console.log(`Produk "${nama}" berhasil ditambahkan.`);
}

function hapusProduk(id) {
  const indexProduk = produkToko.findIndex((produk) => produk.id === id);

  if (indexProduk === -1) {
    console.log(`Produk dengan id ${id} tidak ditemukan.`);
    return;
  }

  const [produkDihapus] = produkToko.splice(indexProduk, 1);
  console.log(`Produk "${produkDihapus.nama}" berhasil dihapus.`);
}

function tampilkanProduk() {
  if (produkToko.length === 0) {
    console.log("Daftar produk kosong.");
    return;
  }

  console.log("=== Daftar Produk Toko ===");
  produkToko.forEach((produk) => {
    console.log(
      `ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp${produk.harga} | Stok: ${produk.stok}`
    );
  });
}

// Contoh penggunaan
tampilkanProduk();
console.log("\nMenambah produk baru...");
tambahProduk("Monitor", 1500000, 4);
tampilkanProduk();

console.log("\nMenghapus produk id 2...");
hapusProduk(2);
tampilkanProduk();
