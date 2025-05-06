<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Ujian</title>
</head>
<body>
    <h2>Form Input Ujian</h2>
    <form action="process.php" method="POST">
        <label for="nama">Nama:</label><br>
        <input type="text" id="nama" name="nama" required><br><br>
        
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="nilai">Nilai Ujian:</label><br>
        <input type="number" id="nilai" name="nilai" required><br><br>

        <input type="submit" value="Kirim">
    </form>
</body>
</html>
