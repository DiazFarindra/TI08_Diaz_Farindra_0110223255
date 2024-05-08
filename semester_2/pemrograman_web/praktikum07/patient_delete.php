<?php
require_once 'database.php';

$delete = $_GET['iddel'];
$sql = "DELETE FROM patients WHERE id=?";
$st = $dbh->prepare($sql);
$st->execute([$delete]);

header('location:patients_list.php');
