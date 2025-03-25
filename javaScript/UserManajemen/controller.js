import { users as initialUsers } from "./data.js";

// Gunakan `let` agar bisa diubah
let users = [...initialUsers];

// Fungsi untuk menampilkan data
function index() {
    const tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = users.map((user, i) => `
        <tr>
            <td>${i + 1}</td>
            <td>${user.nama}</td>
            <td>${user.umur}</td>
            <td>${user.alamat}</td>
            <td>${user.email}</td>
            <td><button class="delete-btn" data-index="${i}">Hapus</button></td>
        </tr>
    `).join('');
}

// Fungsi untuk menambah pengguna
function store(user) {
    if (!user.nama || !user.umur || !user.alamat || !user.email) {
        alert("Semua field harus diisi!");
        return;
    }

    users.push(user);
    index(); // Perbarui tampilan tabel
}

// Fungsi untuk menghapus pengguna
function destroy(userIndex) {
    users = users.filter((_, index) => index !== userIndex); // Filter array
    index(); // Perbarui tampilan tabel
}

// Event listener untuk form submit (Menambah pengguna)
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const user = {
        nama: document.getElementById("nama").value.trim(),
        umur: document.getElementById("umur").value.trim(),
        alamat: document.getElementById("alamat").value.trim(),
        email: document.getElementById("email").value.trim()
    };

    store(user);
    document.getElementById("userForm").reset();
});

// Event delegation untuk tombol hapus
document.getElementById("userTableBody").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const userIndex = parseInt(event.target.getAttribute("data-index"), 10);
        destroy(userIndex);
    }
});

// Render data saat pertama kali halaman dimuat
index();
