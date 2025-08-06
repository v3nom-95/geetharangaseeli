import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Trap focus in menu
  useEffect(() => {
    if (!menuOpen) return;
    const focusable = menuRef.current.querySelectorAll('a,button');
    if (focusable.length) focusable[0].focus();
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 shadow-3xl backdrop-blur-lg' : 'bg-black/60 backdrop-blur-md'} border-b border-white/10`} style={{ boxShadow: scrolled ? '0 8px 32px 0 #000a, 0 2px 12px 0 #fff2' : 'none' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-bold text-white tracking-wide animate-3d-title" style={{ textShadow: '0 2px 12px #fff2, 0 1px 4px #000a' }}>
          Geetha
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className={`text-lg font-medium transition-colors duration-300 ${location.pathname === '/' ? 'text-white' : 'text-white/70'} hover:text-white`}>Home</Link>
          <Link to="/about" className={`text-lg font-medium transition-colors duration-300 ${location.pathname === '/about' ? 'text-white' : 'text-white/70'} hover:text-white`}>About</Link>
          <Link to="/services" className={`text-lg font-medium transition-colors duration-300 ${location.pathname === '/services' ? 'text-white' : 'text-white/70'} hover:text-white`}>Services</Link>
          <Link to="/portfolio" className={`text-lg font-medium transition-colors duration-300 ${location.pathname === '/portfolio' ? 'text-white' : 'text-white/70'} hover:text-white`}>Portfolio</Link>
          <Link to="/contact" className={`text-lg font-medium transition-colors duration-300 ${location.pathname === '/contact' ? 'text-white' : 'text-white/70'} hover:text-white`}>Contact</Link>
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black/70 border border-white/10 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu" aria-expanded={menuOpen} aria-controls="mobile-menu">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full z-[9999] transition-transform duration-500 ${menuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : '-translate-x-full opacity-0 pointer-events-none'}`}
        style={{
          background: 'rgba(10,10,10,0.98)',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 0 0 9999px rgba(10,10,10,0.98)',
          border: '2px solid #222',
          paddingTop: 'env(safe-area-inset-top, 0px)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
        aria-modal="true"
        role="dialog"
      >
        <button
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none bg-black/80 rounded-full w-12 h-12 flex items-center justify-center shadow-xl z-[10000] border border-white/20"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
        >
          &times;
        </button>
        <nav
          ref={menuRef}
          className="flex flex-col items-center justify-center pt-32 pb-16 px-8 w-full h-full overflow-y-auto gap-8"
          style={{ WebkitOverflowScrolling: 'touch', minHeight: '100vh' }}
        >
          <Link to="/" tabIndex={menuOpen ? 0 : -1} className={`w-full py-5 text-2xl font-bold text-white rounded-xl transition-colors duration-300 ${location.pathname === '/' ? 'bg-white/10 border border-white/30' : 'hover:bg-white/5'} shadow-lg`} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" tabIndex={menuOpen ? 0 : -1} className={`w-full py-5 text-2xl font-bold text-white rounded-xl transition-colors duration-300 ${location.pathname === '/about' ? 'bg-white/10 border border-white/30' : 'hover:bg-white/5'} shadow-lg`} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" tabIndex={menuOpen ? 0 : -1} className={`w-full py-5 text-2xl font-bold text-white rounded-xl transition-colors duration-300 ${location.pathname === '/services' ? 'bg-white/10 border border-white/30' : 'hover:bg-white/5'} shadow-lg`} onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" tabIndex={menuOpen ? 0 : -1} className={`w-full py-5 text-2xl font-bold text-white rounded-xl transition-colors duration-300 ${location.pathname === '/portfolio' ? 'bg-white/10 border border-white/30' : 'hover:bg-white/5'} shadow-lg`} onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link to="/contact" tabIndex={menuOpen ? 0 : -1} className={`w-full py-5 text-2xl font-bold text-white rounded-xl transition-colors duration-300 ${location.pathname === '/contact' ? 'bg-white/10 border border-white/30' : 'hover:bg-white/5'} shadow-lg`} onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
      <style>{`
        .animate-3d-title { text-shadow: 0 2px 12px #fff2, 0 1px 4px #000a; animation: fade-in 1.2s ease-in; }
        @keyframes fade-in { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .shadow-3xl { box-shadow: 0 8px 32px 0 #000a, 0 2px 12px 0 #fff2; }
      `}</style>
    </nav>
  );
}

export default Navbar;