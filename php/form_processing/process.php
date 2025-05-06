<?php
// Memeriksa apakah form sudah disubmit dengan POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mengambil data dari form
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $nilai = $_POST['nilai'];

    // Struktur kendali untuk menentukan kelulusan
    if ($nilai > 70) {
        $status = "Lulus";
    } else {
        $status = "Remedial";
    }
    
    // Menampilkan hasil ke browser
    echo "<h2>Hasil Pengolahan Form</h2>";
    echo "Nama: " . htmlspecialchars($nama) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
    echo "Nilai Ujian: " . htmlspecialchars($nilai) . "<br>";
    echo "Status: " . $status;
} else {
    echo "Data tidak diterima.";
}
?>
