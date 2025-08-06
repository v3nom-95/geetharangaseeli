import React, { useRef, useEffect } from 'react';

function About() {
  // Refs for scroll-based 3D reveal
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const expertiseRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const sections = [heroRef.current, aboutRef.current, expertiseRef.current, valuesRef.current];
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-3d-in');
            entry.target.classList.remove('scroll-3d-out');
          } else {
            entry.target.classList.remove('scroll-3d-in');
            entry.target.classList.add('scroll-3d-out');
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => {
      if (section) {
        section.classList.add('scroll-3d-out');
        observer.observe(section);
      }
    });
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="pt-20 relative">
      {/* 3D Parallax Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-32 h-32 bg-gradient-to-br from-white/10 via-white/30 to-black/80 rounded-full blur-3xl opacity-30 animate-cube-spin"></div>
        <div className="absolute right-1/4 bottom-0 w-40 h-40 bg-gradient-to-tr from-white/10 to-black/80 rounded-3xl blur-2xl opacity-40 animate-cube-spin-reverse"></div>
        <div className="absolute left-1/2 top-1/2 w-24 h-24 bg-gradient-to-br from-white/20 via-black/80 to-white/10 rounded-full blur-2xl opacity-30 animate-sphere-float"></div>
      </div>
      {/* Hero Section */}
      <section ref={heroRef} className="py-16 bg-black relative overflow-hidden">
        {/* Section-specific floating cubes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute animate-cube-spin left-10 top-10">
            <div className="w-16 h-16 bg-gradient-to-tr from-white/10 to-white/5 rounded-2xl shadow-2xl transform rotate-12 blur-sm" style={{ filter: 'drop-shadow(0 8px 24px #fff2)' }}></div>
          </div>
          <div className="absolute animate-cube-spin-reverse right-20 bottom-20">
            <div className="w-24 h-24 bg-white/10 rounded-3xl shadow-2xl transform -rotate-6 blur-sm" style={{ filter: 'drop-shadow(0 8px 24px #fff2)' }}></div>
          </div>
          <div className="absolute left-1/2 top-1/3 w-20 h-20 bg-gradient-to-br from-white/20 via-black/80 to-white/10 rounded-full blur-2xl opacity-40 animate-sphere-float"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6 animate-3d-title">About <span className="text-pink-500 drop-shadow-lg">Me</span></h1>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-white/10 via-white/30 to-black/80 rounded-full blur-2xl animate-sphere-float"></div>
            <div className="w-10 h-10 bg-gradient-to-tr from-white/10 to-black/80 rounded-2xl blur-2xl animate-cube-spin"></div>
          </div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto animate-fade-in">
            <span className="text-pink-400 font-bold">I'm a passionate social media enthusiast</span> who loves helping brands tell their stories 
            and connect with their audiences in meaningful ways.
        {/* 3D Floating Pink Sphere */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-pink-500 rounded-full blur-2xl opacity-40 animate-float-advanced"></div>
        {/* Glowing Pink Highlight */}
        <div className="absolute left-1/2 top-1/3 w-32 h-8 bg-gradient-to-r from-pink-500/60 to-transparent rounded-full blur-xl opacity-60 animate-pulse"></div>
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section ref={aboutRef} className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/images/r1.jpeg" 
                alt="Professional at work" 
                className="rounded-3xl shadow-3xl border-2 border-white/10 animate-img-pop"
                style={{ boxShadow: '0 16px 48px 0 rgba(0,0,0,0.85), 0 2px 12px 0 rgba(255,255,255,0.18)' }}
              />
              {/* Floating glowing sphere */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-white/10 via-white/30 to-black/80 rounded-full blur-2xl opacity-40 animate-sphere-float"></div>
              {/* Animated cube */}
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-tr from-white/10 to-black/80 rounded-2xl blur-2xl opacity-30 animate-cube-spin"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 animate-3d-title">My Journey</h2>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                As a freelance social media manager and strategist, I bring fresh perspectives and creative 
                solutions to help businesses thrive in the digital landscape. My passion lies in creating 
                authentic connections between brands and their audiences through strategic content and 
                meaningful engagement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="bg-black/80 p-2 rounded-full mr-4 shadow-lg group-hover:shadow-glow transition-shadow animate-cube-spin">
                    <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors animate-float-fast" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Freelance Social Media Manager</h4>
                    <p className="text-white/60">Starting my journey as a freelancer, eager to help businesses grow their online presence</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-black/80 p-2 rounded-full mr-4 shadow-lg group-hover:shadow-glow transition-shadow animate-sphere-float">
                    <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors animate-float-fast" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Creative Marketing Enthusiast</h4>
                    <p className="text-white/60">Passionate about creating engaging content and building meaningful brand connections</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-black/80 p-2 rounded-full mr-4 shadow-lg group-hover:shadow-glow transition-shadow animate-cube-spin-reverse">
                    <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors animate-float-fast" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Strategic Thinker</h4>
                    <p className="text-white/60">Passionate about creating data-driven strategies that deliver real results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={expertiseRef} className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 animate-3d-title">My Expertise</h2>
            <p className="text-lg text-white/70">
              Combining creativity with strategic thinking to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Social Media Marketing */}
            <div className="bg-black p-8 rounded-3xl shadow-3xl hover:shadow-4xl transition-shadow border-2 border-white/10">
              <div className="flex items-center mb-6">
                <div className="bg-black/80 p-3 rounded-full mr-4 shadow-lg">
                  <svg className="w-8 h-8 text-white/60 animate-float-slow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Social Media Marketing</h3>
              </div>
              <p className="text-white/70 mb-4">
                Expert in creating engaging content, managing social media accounts, and building brand awareness across all major platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-black/80 text-white/70 px-3 py-1 rounded-full text-sm border border-white/20">Content Creation</span>
                <span className="bg-black/80 text-white/70 px-3 py-1 rounded-full text-sm border border-white/20">Community Management</span>
                <span className="bg-black/80 text-white/70 px-3 py-1 rounded-full text-sm border border-white/20">Brand Building</span>
                <span className="bg-black/80 text-white/70 px-3 py-1 rounded-full text-sm border border-white/20">Platform Management</span>
                <span className="bg-black/80 text-white/70 px-3 py-1 rounded-full text-sm border border-white/20">Engagement Strategy</span>
              </div>
            </div>

            {/* Content Strategist */}
            <div className="bg-black p-8 rounded-3xl shadow-3xl hover:shadow-4xl transition-shadow border-2 border-white/10">
              <div className="flex items-center mb-6">
                <div className="bg-black/80 p-3 rounded-full mr-4 shadow-lg">
                  <svg className="w-8 h-8 text-white/60 animate-float-slow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Content Strategist</h3>
              </div>
              <p className="text-white/70 mb-4">
                Specializing in developing content strategies that align with your brand voice and business goals, ensuring every piece of content has purpose and impact.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-black/80 text-white/70 px-3 py-1 rounded-full text-sm border border-white/20">Content Planning</span>
                <span className="bg-black/80 text-white/70 px-3 py-1 rounded-full text-sm border border-white/20">Editorial Strategy</span>
                <span className="bg-black/80 text-white/70 px-3 py-1 rounded-full text-sm border border-white/20">Brand Messaging</span>
                <span className="bg-black/80 text-white/70 px-3 py-1 rounded-full text-sm border border-white/20">Storytelling</span>
                <span className="bg-black/80 text-white/70 px-3 py-1 rounded-full text-sm border border-white/20">Content Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 animate-3d-title">My Values</h2>
            <p className="text-lg text-white/70">
              The principles that guide everything I do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-black/80 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow">
                <svg className="w-10 h-10 text-white/60 group-hover:text-white transition-colors animate-float-fast" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Authentic Connections</h3>
              <p className="text-white/70">
                I believe in creating genuine relationships between brands and their audiences, not just followers.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-black/80 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow">
                <svg className="w-10 h-10 text-white/60 group-hover:text-white transition-colors animate-float-fast" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Creative Excellence</h3>
              <p className="text-white/70">
                Every piece of content I create is crafted with creativity and attention to detail.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-black/80 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow">
                <svg className="w-10 h-10 text-white/60 group-hover:text-white transition-colors animate-float-fast" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Results-Driven</h3>
              <p className="text-white/70">
                I focus on strategies that deliver measurable results and contribute to your business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
        @keyframes float-fast { 0% { transform: translateY(0); } 50% { transform: translateY(40px); } 100% { transform: translateY(0); } }
        @keyframes cube-spin { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(18deg) scale(1.08); } 100% { transform: rotate(0deg) scale(1); } }
        @keyframes cube-spin-reverse { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(-18deg) scale(1.08); } 100% { transform: rotate(0deg) scale(1); } }
        @keyframes sphere-float { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-18px) scale(1.08); } 100% { transform: translateY(0) scale(1); } }
        @keyframes fade-in { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes img-pop { 0% { transform: scale(0.98); } 50% { transform: scale(1.04); } 100% { transform: scale(1); } }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-cube-spin { animation: cube-spin 6s ease-in-out infinite; }
        .animate-cube-spin-reverse { animation: cube-spin-reverse 6s ease-in-out infinite; }
        .animate-sphere-float { animation: sphere-float 5s ease-in-out infinite; }
        .animate-3d-title { text-shadow: 0 2px 12px #fff2, 0 1px 4px #000a; animation: fade-in 1.2s ease-in; }
        .animate-fade-in { animation: fade-in 1.2s ease-in; }
        .animate-img-pop { animation: img-pop 2.5s ease-in-out infinite; }
        .shadow-glow { box-shadow: 0 0 16px 4px #fff2; }
        .scroll-3d-in {
          opacity: 1;
          transform: translateY(0) scale(1) rotateY(0deg) rotateX(0deg);
          transition: opacity 0.7s cubic-bezier(.23,1,.32,1), transform 0.7s cubic-bezier(.23,1,.32,1);
        }
        .scroll-3d-out {
          opacity: 0;
          transform: translateY(60px) scale(0.96) rotateY(12deg) rotateX(8deg);
          transition: opacity 0.7s cubic-bezier(.23,1,.32,1), transform 0.7s cubic-bezier(.23,1,.32,1);
        }
        /* Custom scrollbar styles */
        ::-webkit-scrollbar {
          width: 12px;
          background-color: rgba(255, 255, 255, 0.1);
        }
        ::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}

export default About;