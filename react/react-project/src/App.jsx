import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Header Section */}
        <Header />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
