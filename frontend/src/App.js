import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();
  const [showTransition, setShowTransition] = useState(false);
  const [nextLocation, setNextLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(location);

  // Scroll to top on route change
  useEffect(() => {
    if (!showTransition && location !== currentLocation) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [showTransition, location, currentLocation]);

  useEffect(() => {
    if (location !== currentLocation) {
      setShowTransition(true);
      setNextLocation(location);
      const timeout = setTimeout(() => {
        setShowTransition(false);
        setCurrentLocation(location);
        setNextLocation(null);
      }, 700); // Duration matches transition CSS
      return () => clearTimeout(timeout);
    }
  }, [location, currentLocation]);

  return (
    <>
      <PageTransition show={showTransition} />
      <Routes location={showTransition ? currentLocation : location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;