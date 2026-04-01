class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa = null) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    return {
      waktu: new Date().toISOString(),
      namaPelanggan: this.nama,
      nomorTelepon: this.nomorTelepon,
      kendaraanDisewa: kendaraan,
      status: "Berhasil disewa",
    };
  }
}

class SistemManajemenTransportasi {
  constructor() {
    this.daftarPelanggan = [];
    this.riwayatTransaksi = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  catatTransaksiPenyewaan(pelanggan, kendaraan) {
    const transaksi = pelanggan.sewaKendaraan(kendaraan);
    this.riwayatTransaksi.push(transaksi);
    return transaksi;
  }

  tampilkanDaftarPenyewaAktif() {
    const penyewaAktif = this.daftarPelanggan.filter(
      (pelanggan) => pelanggan.kendaraanDisewa !== null
    );

    if (penyewaAktif.length === 0) {
      console.log("Belum ada pelanggan yang sedang menyewa kendaraan.");
      return;
    }

    console.log("Daftar pelanggan yang sedang menyewa kendaraan:");
    penyewaAktif.forEach((pelanggan, index) => {
      console.log(
        `${index + 1}. Nama: ${pelanggan.nama} | Telepon: ${
          pelanggan.nomorTelepon
        } | Kendaraan: ${pelanggan.kendaraanDisewa}`
      );
    });
  }
}

// Contoh penggunaan
const sistem = new SistemManajemenTransportasi();

const pelanggan1 = new Pelanggan("Andi", "081234567890");
const pelanggan2 = new Pelanggan("Budi", "082345678901");
const pelanggan3 = new Pelanggan("Citra", "083456789012");

sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);

sistem.catatTransaksiPenyewaan(pelanggan1, "Mobil Avanza");
sistem.catatTransaksiPenyewaan(pelanggan3, "Motor NMAX");

sistem.tampilkanDaftarPenyewaAktif();
