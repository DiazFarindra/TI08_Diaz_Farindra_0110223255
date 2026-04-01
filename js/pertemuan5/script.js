// **Data Produk**
let produktList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Headphone", harga: 1500000 },
    { id: 4, nama: "Tablet", harga: 3500000 },
    { id: 5, nama: "Smartwatch", harga: 2000000 }
];

// **Event Handler Object**
const eventHandler = {
    lastId: 5
};

// **Menambahkan Produk dengan Rest Parameter**
// Rest parameter (...products) memungkinkan menerima multiple produk
function tambahProduk(...products) {
    if (products.length === 0) {
        tampilkanPesan("Silakan masukkan data produk!", "error");
        return;
    }

    products.forEach(produk => {
        // Destructuring object produk
        const { nama, harga } = produk;

        // Validasi input
        if (!nama || !harga || harga <= 0) {
            tampilkanPesan("Nama dan harga tidak boleh kosong, harga harus positif!", "error");
            return;
        }

        // Generate ID baru
        eventHandler.lastId++;

        // Tambah produk baru menggunakan Spread Operator
        produktList = [
            ...produktList,
            {
                id: eventHandler.lastId,
                nama: nama.trim(),
                harga: parseInt(harga)
            }
        ];

        tampilkanPesan(`✅ Produk "${nama}" berhasil ditambahkan!`, "success");
        console.log(`Produk ditambahkan: ID ${eventHandler.lastId} - ${nama} (Rp${harga})`);
    });

    renderProduk();
}

// **Menghapus Produk dengan Destructuring**
function hapusProduk(id) {
    // Destructuring untuk mencari produk yang akan dihapus
    const produkDihapus = produktList.find(p => p.id === id);

    if (!produkDihapus) {
        tampilkanPesan(`Produk dengan ID ${id} tidak ditemukan!`, "error");
        return;
    }

    // Destructuring nama produk
    const { nama } = produkDihapus;

    // Filter produk dengan Spread Operator
    produktList = produktList.filter(produk => produk.id !== id);

    tampilkanPesan(`🗑️ Produk "${nama}" berhasil dihapus!`, "success");
    console.log(`Produk dihapus: ${nama} (ID: ${id})`);

    renderProduk();
}

// **Menampilkan Semua Produk dengan Destructuring**
function tampilkanProduk() {
    console.clear();
    console.log("========== DAFTAR SEMUA PRODUK ==========");
    console.log(`Total Produk: ${produktList.length}`);
    console.log("----------------------------------------");

    if (produktList.length === 0) {
        console.log("Belum ada produk dalam daftar.");
        tampilkanPesan("Belum ada produk dalam daftar.", "error");
        return;
    }

    // Menggunakan destructuring dalam map
    produktList.forEach(({ id, nama, harga }, index) => {
        console.log(`${index + 1}. ID: ${id} | ${nama} | Rp${harga.toLocaleString('id-ID')}`);
    });

    console.log("----------------------------------------");
    console.log(`Total Harga Semua Produk: Rp${hitungTotalHarga()}`);
    console.log("========================================");

    tampilkanPesan("✅ Data produk ditampilkan di console!", "success");
}

// **Fungsi Helper dengan Rest Parameter**
// Fungsi untuk menghitung total harga
function hitungTotalHarga(...ids) {
    if (ids.length === 0) {
        // Jika tidak ada parameter, hitung semua
        return produktList.reduce((total, { harga }) => total + harga, 0);
    }

    // Jika ada parameter IDs, hitung hanya produk dengan ID tersebut
    return produktList
        .filter(p => ids.includes(p.id))
        .reduce((total, { harga }) => total + harga, 0);
}

// **Fungsi untuk mencari produk dengan Destructuring**
function cariProduk(id) {
    const produk = produktList.find(p => p.id === id);

    if (!produk) {
        return null;
    }

    // Destructuring hasil pencarian
    const { nama, harga } = produk;
    return { nama, harga, id };
}

// **Render UI - Menampilkan semua produk di layar**
function renderProduk() {
    const container = document.getElementById("productContainer");

    if (produktList.length === 0) {
        container.innerHTML = '<div class="empty-message">Belum ada produk. Tambahkan produk baru untuk memulai.</div>';
        return;
    }

    // Menggunakan destructuring dalam template literal
    container.innerHTML = produktList.map(({ id, nama, harga }) => `
        <div class="product-card">
            <div class="product-id">ID: ${id}</div>
            <div class="product-name">${nama}</div>
            <div class="product-price">Rp${harga.toLocaleString('id-ID')}</div>
            <button class="btn-delete" onclick="hapusProduk(${id})">🗑️ Hapus</button>
        </div>
    `).join("");
}

// **Fungsi Tampil Pesan**
function tampilkanPesan(pesan, tipe) {
    const messageDiv = document.getElementById("messageDisplay");
    const className = tipe === "success" ? "success-message" : "error-message";
    messageDiv.innerHTML = `<div class="${className}">${pesan}</div>`;

    setTimeout(() => {
        messageDiv.innerHTML = "";
    }, 4000);
}

// **Event Listeners**
document.getElementById("addProductBtn").addEventListener("click", function() {
    const nama = document.getElementById("productName").value;
    const harga = document.getElementById("productPrice").value;

    if (!nama || !harga) {
        tampilkanPesan("Silakan isi semua field!", "error");
        return;
    }

    // Menggunakan Spread Operator untuk membuat object baru
    const produkBaru = {
        nama,
        harga: parseInt(harga)
    };

    tambahProduk(produkBaru);

    // Reset form
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productName").focus();
});

document.getElementById("displayProductsBtn").addEventListener("click", function() {
    tampilkanProduk();
});

// **Initialize - Tampilkan produk awal saat halaman dimuat**
window.addEventListener("DOMContentLoaded", function() {
    renderProduk();
    console.log("🎯 Aplikasi Manajemen Produk berhasil dimuat!");
    console.log("📦 Total produk awal:", produktList.length);
});

// **Export untuk testing (jika diperlukan)**
// Uncomment jika menggunakan module system
// export { tambahProduk, hapusProduk, tampilkanProduk, produktList };
