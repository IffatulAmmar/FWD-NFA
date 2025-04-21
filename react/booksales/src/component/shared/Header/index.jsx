import { NavLink } from 'react-router-dom';
import '../../../App.css';

export default function Header() {
    return (
        <>
            <header className="py-3 mb-4 border-bottom sticky-top" style={{ backgroundColor: '#343a40', zIndex: 1030 }}>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        {/* Logo di kiri */}
                        <div className="d-flex align-items-center">
                            <NavLink to="/" className="link-body-emphasis text-decoration-none">
                                <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
                                <span className="ms-2 fs-4" style={{ color: '#fff' }}>E-Book</span>
                            </NavLink>
                        </div>

                        {/* Navigasi */}
                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <NavLink 
                                    to="/" 
                                    className={({ isActive }) => `nav-link px-2 ${isActive ? 'active-link' : 'link-secondary'}`}
                                    style={{ color: '#fff' }}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/books" 
                                    className={({ isActive }) => `nav-link px-2 ${isActive ? 'active-link' : ''}`}
                                    style={{ color: '#fff' }}
                                >
                                    Book
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/team" 
                                    className={({ isActive }) => `nav-link px-2 ${isActive ? 'active-link' : ''}`}
                                    style={{ color: '#fff' }}
                                >
                                    Team
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/contact" 
                                    className={({ isActive }) => `nav-link px-2 ${isActive ? 'active-link' : ''}`}
                                    style={{ color: '#fff' }}
                                >
                                    Kontak
                                </NavLink>
                            </li>
                        </ul>

                        {/* Tombol Login/Register */}
                        <div className="text-end">
                            <button type="button" className="btn btn-outline-primary me-2">Login</button>
                            <button type="button" className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
