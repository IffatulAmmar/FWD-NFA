import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container my-5">
      <div
        className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
        style={{ minHeight: "500px" }} // tinggi minimum untuk membuat layout lebih tinggi
      >
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            E-Book Digital, Baca Kapan Saja!
          </h1>
          <p className="lead">
            ePerpus adalah platform eBook digital yang memudahkan Anda membaca buku kapan pun dan di mana pun.
            Akses ribuan judul dari berbagai genre hanya dalam genggaman Anda.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <Link to="/books" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
              Jelajahi Koleksi
            </Link>
            <Link to="/cara-pinjam" className="btn btn-outline-secondary btn-lg px-4">
              Cara Membaca
            </Link>
          </div>
        </div>

        <div className="col-lg-5 p-0 overflow-hidden d-flex align-items-stretch">
          <img
            src="https://david-pranata.com/wp-content/uploads/2014/04/Ebook-reader.jpg"
            alt="Ilustrasi Membaca eBook"
            style={{
              width: "100%",
              objectFit: "cover",
              height: "100%",
              borderRadius: "0 0.3rem 0.3rem 0", // biar ngikutin rounded-nya
            }}
          />
        </div>
      </div>
    </div>
  );
}
