<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Penilaian Ujian</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f5f5f5;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .card {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 2rem;
      width: 100%;
      max-width: 440px;
    }

    .card-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #222;
      margin-bottom: 0.25rem;
    }

    .card-sub {
      font-size: 0.85rem;
      color: #888;
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      font-size: 0.85rem;
      font-weight: 600;
      color: #444;
      margin-bottom: 0.3rem;
    }

    input[type="text"],
    input[type="email"],
    input[type="number"] {
      width: 100%;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 6px;
      color: #222;
      font-size: 0.95rem;
      padding: 0.6rem 0.8rem;
      margin-bottom: 1rem;
      outline: none;
      transition: border-color 0.2s;
    }

    input:focus { border-color: #555; }

    input::placeholder { color: #bbb; }

    .error-msg {
      font-size: 0.78rem;
      color: #c0392b;
      margin-top: -0.8rem;
      margin-bottom: 0.8rem;
    }

    button[type="submit"] {
      width: 100%;
      background: #222;
      color: #fff;
      font-weight: 600;
      font-size: 0.95rem;
      border: none;
      border-radius: 6px;
      padding: 0.75rem;
      cursor: pointer;
      transition: background 0.2s;
      margin-top: 0.25rem;
    }

    button[type="submit"]:hover { background: #444; }

    .result-card {
      background: #f9f9f9;
      border-radius: 6px;
      border: 1px solid #ddd;
      padding: 1.25rem;
      margin-top: 1.5rem;
    }

    .result-card h2 {
      font-size: 0.78rem;
      color: #999;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 0.75rem;
    }

    .result-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.4rem 0;
      border-bottom: 1px solid #eee;
      font-size: 0.9rem;
    }

    .result-row:last-of-type { border-bottom: none; }

    .result-row .rk { color: #888; }
    .result-row .rv { color: #222; font-weight: 600; }

    .badge {
      display: inline-block;
      padding: 0.25rem 0.8rem;
      border-radius: 4px;
      font-weight: 600;
      font-size: 0.85rem;
    }

    .badge-lulus    { background: #e6f4ea; color: #2d7a3f; border: 1px solid #a8d5b0; }
    .badge-remedial { background: #fdecea; color: #c0392b; border: 1px solid #f5b0aa; }

    .nilai-display {
      font-size: 2rem;
      font-weight: 800;
      text-align: center;
      padding: 0.75rem 0 0.5rem;
      color: #222;
    }

    .divider {
      height: 1px;
      background: #eee;
      margin: 0.75rem 0;
    }

    .reset-btn {
      display: block;
      text-align: center;
      margin-top: 1rem;
      color: #555;
      font-size: 0.85rem;
      cursor: pointer;
      background: none;
      border: none;
      width: 100%;
    }

    .reset-btn:hover { text-decoration: underline; }
  </style>
</head>
<body>

<?php
// ── Helpers ──────────────────────────────────────────────────────────────────
function clean($data) {
  return htmlspecialchars(stripslashes(trim($data)));
}

// ── Process Form ─────────────────────────────────────────────────────────────
$nama   = $email = $nilai = "";
$errNama = $errEmail = $errNilai = "";
$submitted = false;
$status = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

  // Validasi Nama
  if (empty($_POST["nama"])) {
    $errNama = "Nama wajib diisi.";
  } else {
    $nama = clean($_POST["nama"]);
    if (!preg_match("/^[a-zA-Z\s]+$/", $nama))
      $errNama = "Nama hanya boleh berisi huruf dan spasi.";
  }

  // Validasi Email
  if (empty($_POST["email"])) {
    $errEmail = "Email wajib diisi.";
  } else {
    $email = clean($_POST["email"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL))
      $errEmail = "Format email tidak valid.";
  }

  // Validasi Nilai
  if (empty($_POST["nilai"]) && $_POST["nilai"] !== "0") {
    $errNilai = "Nilai ujian wajib diisi.";
  } else {
    $nilai = (int) clean($_POST["nilai"]);
    if ($nilai < 0 || $nilai > 100)
      $errNilai = "Nilai harus antara 0 – 100.";
  }

  // Jika tidak ada error → proses
  if (!$errNama && !$errEmail && !$errNilai) {
    $submitted = true;

    // ── Struktur Kendali ─────────────────────────────────────────────────────
    if ($nilai > 70) {
      $status = "Lulus";
    } else {
      $status = "Remedial";
    }
  }
}
?>

<div class="card">

  <?php if (!$submitted): ?>

    <!-- ── Form ── -->
    <p class="card-title">Form Penilaian Ujian</p>
    <p class="card-sub">Isi data di bawah untuk melihat hasil evaluasi.</p>

    <form method="POST" action="<?= htmlspecialchars($_SERVER['PHP_SELF']) ?>">

      <label for="nama">Nama Lengkap</label>
      <input type="text" id="nama" name="nama"
             placeholder="Contoh: Budi Santoso"
             value="<?= $nama ?>">
      <?php if ($errNama): ?>
        <p class="error-msg"><?= $errNama ?></p>
      <?php endif; ?>

      <label for="email">Email</label>
      <input type="email" id="email" name="email"
             placeholder="Contoh: budi@email.com"
             value="<?= $email ?>">
      <?php if ($errEmail): ?>
        <p class="error-msg"><?= $errEmail ?></p>
      <?php endif; ?>

      <label for="nilai">Nilai Ujian (0 – 100)</label>
      <input type="number" id="nilai" name="nilai"
             placeholder="Contoh: 85"
             min="0" max="100"
             value="<?= $nilai !== "" ? $nilai : "" ?>">
      <?php if ($errNilai): ?>
        <p class="error-msg"><?= $errNilai ?></p>
      <?php endif; ?>

      <button type="submit">Lihat Hasil</button>
    </form>

  <?php else: ?>

    <!-- ── Result ── -->
    <p class="card-title">Hasil Evaluasi</p>
    <p class="card-sub">Berdasarkan data yang kamu masukkan.</p>

    <div class="result-card">
      <h2>Detail</h2>

      <div class="result-row">
        <span class="rk">Nama</span>
        <span class="rv"><?= $nama ?></span>
      </div>
      <div class="result-row">
        <span class="rk">Email</span>
        <span class="rv"><?= $email ?></span>
      </div>

      <div class="divider"></div>

      <div class="nilai-display"><?= $nilai ?> <span style="font-size:1rem;color:#6c7086">/ 100</span></div>

      <div style="text-align:center; margin-top:0.8rem;">
        <?php if ($status === "Lulus"): ?>
          <span class="badge badge-lulus">&#10003; Lulus</span>
        <?php else: ?>
          <span class="badge badge-remedial">&#9888; Remedial</span>
        <?php endif; ?>
      </div>

      <div class="divider"></div>

      <div class="result-row">
        <span class="rk">Kondisi</span>
        <span class="rv" style="font-size:0.82rem; color:#6c7086">
          <?php if ($status === "Lulus"): ?>
            Nilai <?= $nilai ?> &gt; 70 &rarr; Lulus
          <?php else: ?>
            Nilai <?= $nilai ?> &lt;= 70 &rarr; Remedial
          <?php endif; ?>
        </span>
      </div>
    </div>

    <form method="POST" action="<?= htmlspecialchars($_SERVER['PHP_SELF']) ?>">
      <button type="button" class="reset-btn"
              onclick="window.location.href=window.location.href">
        &larr; Isi ulang form
      </button>
    </form>

  <?php endif; ?>

</div>

</body>
</html>
