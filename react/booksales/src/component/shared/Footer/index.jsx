export default function Footer() {
    return (
        <>
            <footer className="py-5 bg-dark text-white">
                <div className="container">
                    <div className="row">
                        {/* Section dengan link navigasi */}
                        <div className="col-12 col-md-3 mb-4">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-white-50">Home</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-white-50">FAQs</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-white-50">About</a>
                                </li>
                            </ul>
                        </div>

                        {/* Form Subscribe */}
                        <div className="col-12 col-md-5 offset-md-1 mb-4">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input
                                        id="newsletter1"
                                        type="email"
                                        className="form-control rounded-3"
                                        placeholder="Email address"
                                    />
                                    <button className="btn btn-primary rounded-3" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Footer Bottom (Teks dan Social Media) */}
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top border-light">
                        <p>&copy; 2025 ePerpus, Web by Iffatul Ammar.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3">
                                <a
                                    className="link-body-emphasis text-white"
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <i className="fa-brands fa-instagram fa-lg"></i>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a
                                    className="link-body-emphasis text-white"
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <i className="fa-brands fa-facebook fa-lg"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
