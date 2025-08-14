import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/ScrollToTop";
import FloatContaction from "./components/FloatContaction";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Property";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PropertyDetails from "./pages/PropertyDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      
      <Navbar />
      <ScrollToTop />
      <FloatContaction/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property" element={<Property />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property/:slug" element={<PropertyDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
