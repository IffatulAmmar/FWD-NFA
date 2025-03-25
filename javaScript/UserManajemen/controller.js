import { users as initialUsers } from "./data.js";

// Buat salinan array supaya bisa diubah
let users = [...initialUsers];

// Fungsi untuk menampilkan data di tabel
function viewUsers() {
    const tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = users.map((user, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${user.nama}</td>
            <td>${user.umur}</td>
            <td>${user.alamat}</td>
            <td>${user.email}</td>
            <td><button class="delete-btn" data-index="${index}">Hapus</button></td>
        </tr>
    `).join('');
}

// Fungsi untuk menambah pengguna
function addUser(nama, umur, alamat, email) {
    if (!nama || !umur || !alamat || !email) {
        alert("Semua field harus diisi!");
        return;
    }

    users.push({ nama, umur, alamat, email });
    viewUsers(); // Perbarui tampilan
}

// Fungsi untuk menghapus pengguna
function deleteUser(index) {
    users.splice(index, 1);
    viewUsers(); // Perbarui tampilan
}

// Event listener untuk tambah pengguna
document.getElementById("userForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const umur = document.getElementById("umur").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const email = document.getElementById("email").value.trim();

    addUser(nama, umur, alamat, email);
    document.getElementById("userForm").reset();
});

// Event delegation untuk menangani hapus pengguna
document.getElementById("userTableBody")?.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const index = event.target.getAttribute("data-index");
        deleteUser(Number(index));
    }
});

// Tampilkan data saat pertama kali halaman dimuat
viewUsers();
