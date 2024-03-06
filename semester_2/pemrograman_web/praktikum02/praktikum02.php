<?php

$customer = $_POST['customer'];
$produk = $_POST['produk'];
$jumlah = $_POST['jumlah'];

$data = [
    'tv' => 4_200_000,
    'kulkas' => 3_100_000,
    'mecin cuci' => 3_800_000,
];

$total = $data[$produk] * $jumlah;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <thead>
            <th>produk</th>
            <th>harga</th>
        </thead>

        <tbody>
            <tr>
                <td>TV</td>
                <td>4.200.000</td>
            </tr>
            <tr>
                <td>kulkas</td>
                <td>3.100.000</td>
            </tr>
            <tr>
                <td>Mesin Cuci</td>
                <td>3.800.000</td>
            </tr>
        </tbody>
    </table>

    <br>

    <form action="html.php" method="post">
        <div>
            <label for="customer">customer</label>
            <input type="text" name="customer" id="customer">
        </div>
        <div>
            <label for="produk">pilih produk</label>
            <label for="tv">tv</label>
            <input type="radio" name="produk" value="tv" id="produk">
            <label for="kulkas">kulkas</label>
            <input type="radio" name="produk" value="kulkas" id="kulkas">
            <label for="mesin_cuci">mesin cuci</label>
            <input type="radio" name="produk" value="mesin cuci" id="mesin_cuci">
        </div>
        <div>
            <label for="jumlah">jumlah</label>
            <input type="number" name="jumlah" id="jumlah">
        </div>

        <button type="submit">submit</button>
    </form>

    <p>nama customer: <?= $customer ?? '' ?></p>
    <p>produk pilihan: <?= $produk ?? '' ?></p>
    <p>jumlah beli: <?= $jumlah ?? '' ?></p>
    <p>total belanja: <?= $total ?? '' ?></p>
</body>
</html>
