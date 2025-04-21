export default function LoginForm() {
  return (
    <>
      {/* Form Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 text-primary">Hubungi Kami</h2>
          <p className="text-center mb-5 text-muted">Punya pertanyaan? Kirimkan pesanmu melalui form di bawah!</p>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <form className="shadow-sm p-4 bg-white rounded">
                <div className="mb-4">
                  <label htmlFor="name" className="form-label fw-bold">Nama</label>
                  <input
                    type="text"
                    className="form-control shadow-sm border-0 rounded-3 p-3"
                    id="name"
                    placeholder="Nama lengkap"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    className="form-control shadow-sm border-0 rounded-3 p-3"
                    id="email"
                    placeholder="nama@email.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-bold">Pesan</label>
                  <textarea
                    className="form-control shadow-sm border-0 rounded-3 p-3"
                    id="message"
                    rows="5"
                    placeholder="Tulis pesan di sini"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-3 mt-3 rounded-3 shadow-lg hover-shadow"
                >
                  <i className="fa-solid fa-paper-plane me-2"></i> Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for hover shadow */}
      <style>
        {`
          .hover-shadow:hover {
            box-shadow: 0 10px 20px rgba(0, 123, 255, 0.2);
            transition: box-shadow 0.3s ease-in-out;
          }

          .form-control:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
          }

          .form-label {
            font-size: 1rem;
            color: #333;
          }
        `}
      </style>
    </>
  );
}
