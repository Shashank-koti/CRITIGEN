import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CritigenPharma from './pages/CritigenPharma';
import VisionMission from './pages/VisionMission';
import Portfolio from './pages/Portfolio';
import Science from './pages/Science';
import Infrastructure from './pages/Infrastructure';
import Careers from './pages/Careers';
import Contact from "./pages/contact"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/critigen-pharma" element={<CritigenPharma />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/science" element={<Science />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
