<?php
require_once 'header.php';
require_once 'sidebar.php';

$customer = $_POST['customer'];
$produk = $_POST['produk'];
$jumlah = $_POST['jumlah'];

$data = [
    'tv' => 4_200_000,
    'kulkas' => 3_100_000,
    'mesin cuci' => 3_800_000,
];

$total = $data[$produk] * $jumlah;

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <div class="row pt-5">
            <div class="col-8">
                <div>
                    <h1>Belanja Online</h1>
                    <hr class="mt-4 mb-2">
                </div>

                <form action="" method="post">
                    <div class="my-3">
                        <label for="customer" class="form-label fs-4">customer</label>
                        <input type="text" class="form-control" name="customer" id="customer">
                    </div>
                    <div class="mb-3">
                        <label for="produk" class="form-label fs-4 me-5">pilih produk</label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="produk" value="tv" id="produk">
                            <label class="form-check-label" for="tv">tv</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="produk" value="kulkas" id="kulkas">
                            <label class="form-check-label" for="kulkas">kulkas</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="produk" value="mesin cuci" id="mesin_cuci">
                            <label class="form-check-label" for="mesin_cuci">mesin cuci</label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="jumlah" class="form-label fs-4">jumlah</label>
                        <input type="number" class="form-control" name="jumlah" id="jumlah">
                    </div>

                    <button type="submit" class="btn btn-outline-primary">submit</button>
                </form>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        Daftar Harga
                    </div>
                    <div class="card-body px-3">
                        <p>TV: Rp.4.200.000</p>
                        <p>Kulkas: Rp.3.100.000</p>
                        <p>Mesin Cuci: Rp.3.800.000</p>
                    </div>
                    <div class="card-footer bg-secondary text-white">
                        <sup>*</sup>harga dapat berubah sewaktu-waktu!
                    </div>
                </div>+

                <div class="my-5">
                        <h4>Struk Belanja</h4>
                        <hr>
                        <p class="border rounded-3 px-2 py-1">nama customer: <?= $customer ?? '' ?></p>
                        <p class="border rounded-3 px-2 py-1">produk pilihan: <?= $produk ?? '' ?></p>
                        <p class="border rounded-3 px-2 py-1">jumlah beli: <?= $jumlah ?? '' ?></p>
                        <p class="border rounded-3 px-2 py-1">total belanja: Rp. <?= number_format(num: $total, thousands_separator: '.') ?? '' ?></p>
                        <hr>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>

<?php

require_once 'footer.php';
?>
