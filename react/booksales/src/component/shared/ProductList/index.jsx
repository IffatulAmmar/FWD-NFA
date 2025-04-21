import { useState } from "react";
import { Link } from "react-router-dom"; // Untuk link ke halaman books
import books from "../../../Utils/books";

export default function ProductList({ isHomePage = false }) {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleReadMore = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  // Membatasi hanya 3 buku pertama jika berada di halaman Home
  const displayedBooks = isHomePage ? books.slice(0, 3) : books;

  return (
    <section id="album" className="album py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 text-primary">
          Koleksi Series dari Tere Liye yang Tersedia
        </h2>
        <p className="text-center mb-5 text-muted">
          Temukan buku favoritmu dan pilih untuk dipinjam
        </p>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {displayedBooks.map((book, index) => {
            const isExpanded = expandedIndexes.includes(index);
            const shortDesc =
              book.description.length > 150
                ? book.description.slice(0, 150) + "..."
                : book.description;

            return (
              <div key={index} className="col">
                <div
                  className="card h-100 border-0"
                  style={{
                    borderRadius: "15px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Bagian Gambar */}
                  <div
                    style={{
                      position: "relative",
                      width: "150px", // Menetapkan lebar gambar 150px
                      height: "auto", // Tinggi otomatis berdasarkan proporsi gambar
                      overflow: "hidden",
                      margin: "auto", // Untuk menempatkan gambar di tengah
                    }}
                  >
                    <img
                      src={book.img}
                      alt={`Cover ${book.title}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "10px", // Membuat sudut gambar lebih halus
                        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.15)", // Efek bayangan pada gambar
                      }}
                    />
                  </div>

                  {/* Bagian Konten Card */}
                  <div className="card-body text-center px-4 pt-4 pb-4">
                    <h5 className="card-title text-primary">{book.title}</h5>
                    <p
                      className="card-text text-muted"
                      style={{ textAlign: "justify", fontSize: "0.9rem" }}
                    >
                      {isExpanded ? book.description : shortDesc}
                    </p>
                    {book.description.length > 150 && (
                      <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <button
                          className="btn btn-link p-0 mb-2"
                          style={{ fontSize: "0.85rem" }}
                          onClick={() => toggleReadMore(index)}
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      </div>
                    )}
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <p className="mb-0 text-muted" style={{ fontSize: "0.85rem" }}>
                        {book.author}
                      </p>
                      <small className="text-muted">{book.year}</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tombol untuk menuju halaman Buku jika berada di halaman Home */}
        {isHomePage && (
          <div className="text-center mt-4">
            <Link to="/books" className="btn btn-primary btn-lg">
              Lihat Semua Buku
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
