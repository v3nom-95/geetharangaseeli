import React, { useEffect } from 'react';
import './PageTransition.css';

function PageTransition({ show }) {
  return (
    <div className={`page-transition-overlay${show ? ' show' : ''}`} style={{ background: 'linear-gradient(135deg, #000 80%, #111 100%)', color: '#fff' }}>
      <div className="page-transition-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <span className="transition-name text-3xl font-bold mb-4 animate-3d-title">Geetha Rangaseeli</span>
        <div className="transition-bar w-32 h-2 bg-pink-500 rounded-full mb-6 animate-pulse"></div>
        <span className="text-lg font-semibold mb-6 text-white/80">Social Media Strategist & Brand Builder</span>
        <div className="flex space-x-6 mb-4">
          <a href="https://instagram.com/sociallygeetha" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="w-8 h-8 text-pink-500 hover:text-white transition-colors animate-float-fast" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></svg>
          </a>
          <a href="mailto:geetharangaseeli@gmail.com" aria-label="Email">
            <svg className="w-8 h-8 text-white/70 hover:text-pink-500 transition-colors animate-float-slow" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
          </a>
        </div>
        <span className="text-white/60 text-base">Empowering brands to grow and connect</span>
      </div>
    </div>
  );
}

export default PageTransition;
