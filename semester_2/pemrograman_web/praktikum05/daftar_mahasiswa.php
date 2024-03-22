<?php
require_once "class_mahasiswa.php";

if (isset($_POST['submit'])) {
    $nim = $_POST['nim'];
    $prodi = $_POST['prodi'];
    $nilai = $_POST['nilai'];

    $mahasiswa1 = new Mahasiswa($nim, $prodi, $nilai);
}
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <main class="container">
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand mb-0 h1" href="/">Diaz Farindra</a>
            </div>
        </nav>

        <div class="my-5">
            <h3>Form Nilai Ujian</h3>
            <hr>
        </div>

        <div class="container">
            <form action="" method="post">
                <div class="mb-3">
                    <label for="nim" class="form-label">NIM</label>
                    <input type="number" name="nim" class="form-control" id="nim">
                </div>
                <div class="mb-3">
                    <label for="prodi" class="form-label">Pilih Prodi</label>
                    <select class="form-select" name="prodi" id="prodi">
                        <option selected disabled>pilih prodi</option>
                        <?php foreach (Mahasiswa::prodi() as $mhs) { ?>
                            <option value="<?= $mhs ?>"><?= ucwords(str_replace('_', ' ', $mhs)) ?></option>
                        <?php } ?>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="nilai" class="form-label">Nilai</label>
                    <input type="number" name="nilai" class="form-control" id="nilai">
                </div>
                <button type="submit" name="submit" class="btn btn-outline-success">Submit</button>
            </form>
        </div>

        <?php if (isset($_POST['submit'])) { ?>
            <hr>

            <div class="mt-5 px-3 py-5">
                <p>NIM: <?= @$nim; ?></p>
                <p>Prodi: <?= @ucwords(str_replace('_', ' ', $prodi)); ?></p>
                <p>Nilai: <?= @number_format($nilai, 2); ?></p>
                <p>Hasil Ujian <?= $mahasiswa1->getNilai()['hasil']; ?></p>
                <p>Grade <?= $mahasiswa1->getNilai()['grade']; ?></p>
            </div>
        <?php } ?>
    </main>
</body>

</html>
