<?php 
// Tangkap hasil inputan
$proses=$_POST["kirim"];
$nama_mahasiswa=$_POST["nama"];
$mata_kuliah=$_POST["matkul"];
$nilai_uts=$_POST["nilai_uts"];
$nilai_uas=$_POST["nilai_uas"];
$nilai_tugas=$_POST["nilai_tugas"];

$total_nilai=($nilai_uts+$nilai_uas+$nilai_tugas)/3;
$grade;
$status;
$predikat;

// Buat Logic status
if ($total_nilai >= 55){
	$status="Lulus";
}else{
	$status="Tidak Lulus";
}

// Buat logic grade
if ($total_nilai >= 85 && $total_nilai <= 100){
	$grade="A";
}elseif($total_nilai >= 70 && $total_nilai < 85){
	$grade="B";
}elseif($total_nilai >= 56 && $total_nilai < 70){
	$grade="C";
}elseif($total_nilai >= 36 && $total_nilai < 56){
	$grade="D";
}elseif ($total_nilai >= 0 && $total_nilai < 36){
	$grade="E";
}else{
	$grade="I";
}

// Buat logic predikat
switch ($grade) {
	case 'A':
		$predikat="Sangat Memuaskan";
		break;
	case "B":
		$predikat="Memuaskan";
		break;
	case "C":
		$predikat="Cukup";
		break;
	case "D":
		$predikat="Kurang";
		break;
	case "E":
		$predikat="Sangat Kurang";
		break;
	default:
		$predikat="Tidak Ada";
		break;
}
?>
