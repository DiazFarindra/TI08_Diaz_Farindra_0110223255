<?php
 require_once 'database.php';
?>

<?php
$sql = "SELECT * FROM patient";
$rs = $dbh->query($sql);
?>

<a class="btn btn-success" href="patients_form.php" role="button">Create Patient</a>
<table class="table" width="100%" border="1" cellspacing="2" cellpadding="2">
    <thead>
        <tr>
            <th>ID</th>
            <th>Kode</th>
            <th>Nama</th>
            <th>Tempat Lahir</th>
            <th>Tanggal Lahir</th>
            <th>Jenis Kelamin</th>
            <th>Email</th>
            <th>Alamat</th>
            <th>Kelurahan ID</th>
        </tr>
    </thead>
    <tbody>
        <?php
        $nomor  = 1;
        foreach ($rs as $row) {
        ?>
            <tr>
                <td><?= $nomor ?></td>
                <td><?= $row['kode'] ?></td>
                <td><?= $row['nama'] ?></td>
                <td><?= $row['tmp_lahir'] ?></td>
                <td><?= $row['tgl_lahir'] ?></td>
                <td><?= $row['gender'] ?></td>
                <td><?= $row['email'] ?></td>
                <td><?= $row['alamat'] ?></td>
                <td><?= $row['kelurahan_id'] ?></td>
                <td>
                    <a class="btn btn-primary" href="patient_show.php?id=<?= $row['id'] ?>">View</a>
                    <a class="btn btn-primary" href="patients_form.php?idedit=<?= $row['id'] ?>">Edit</a>
                    <a class="btn btn-primary" href="patient_delete.php?iddel=<?= $row['id'] ?>" onclick="if(!confirm('Anda Yakin Hapus Data Produk <?= $row['nama'] ?>?')) {return false}">Delete</a>
                </td>
            </tr>
        <?php
            $nomor++;
        }
        ?>
    </tbody>
</table>
