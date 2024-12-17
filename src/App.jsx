import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/contact';
import YouTube from './pages/YouTube/YouTube';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/youtube" element={<YouTube />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
