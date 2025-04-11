import React from 'react';

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Muhammad Iffatul Ammar</h1>
          <p className="lead">Frontend Developer | Export Enthusiast | Creator of Parucious</p>
          <a href="#projects" className="btn btn-outline-light mt-3">Lihat Proyek Saya</a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light" id="about">
        <div className="container">
          <h2 className="mb-4 text-center">Tentang Saya</h2>
          <p className="text-center">
            Saya adalah mahasiswa Informatika di STT Terpadu Nurul Fikri yang aktif mengikuti berbagai program pengembangan diri seperti MSIB dan Sekolah Ekspor. Saya menyukai pengembangan website menggunakan React, serta memiliki minat besar pada digital branding dan ekspor UKM.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-5" id="projects">
        <div className="container">
          <h2 className="mb-4 text-center">Proyek Terbaru</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/parucious.jpg" className="card-img-top" alt="Parucious" />
                <div className="card-body">
                  <h5 className="card-title">Parucious</h5>
                  <p className="card-text">Brand keripik paru dengan tiga varian rasa. Dibuat sebagai bagian dari Export Business Plan MSIB 2024 dan dijual melalui Shopee serta Instagram.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/reactproject.jpg" className="card-img-top" alt="React Project" />
                <div className="card-body">
                  <h5 className="card-title">React Portfolio</h5>
                  <p className="card-text">Website portofolio pribadi ini dibuat menggunakan React + Bootstrap. Responsive, clean, dan modular menggunakan komponen.</p>
                </div>
              </div>
            </div>
            {/* Tambahkan proyek lain jika ada */}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h3>Ingin bekerja sama atau tanya-tanya?</h3>
          <a href="/contact" className="btn btn-outline-light mt-3">Hubungi Saya</a>
        </div>
      </section>

    </div>
  );
};

export default Home;
