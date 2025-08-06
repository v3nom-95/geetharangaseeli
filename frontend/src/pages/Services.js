import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Services() {
  // Refs for scroll-based 3D reveal
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const detailsRef = useRef(null);
  const transitionRef = useRef(null);

  useEffect(() => {
    const sections = [heroRef.current, servicesRef.current, detailsRef.current, transitionRef.current];
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

  const services = [];

  const packages = [
    {
      name: "Basic",
      price: "₹12,499",
      period: "/month",
      description: "Perfect for individuals and small businesses starting with social media.",
      features: [
        "Profile Audit & Optimization",
        "Content Calendar Planning",
        "12 Custom Content (Posts + Reels)",
        "Captions with Hashtags & Keywords"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "₹19,499",
      period: "/month",
      description: "Comprehensive solution for brands seeking growth and advanced strategy.",
      features: [
        "Profile Audit & Optimization",
        "Content Calendar Planning",
        "20 Custom Content (Posts + Reel)",
        "Captions with Hashtags & Keywords",
        "Competitor Analysis",
        "Story Strategy & Highlights Design",
        "Monthly Analytics Report",
        "Engagement Support (Comments + DMs)",
        "1:1 Strategy Call (Monthly)",
        "Ad Strategy/Boosting Guidance",
        "Brand Kit Creation"
      ],
      popular: true
    }
  ];

  const individualServices = [
    {
      name: "Instagram Audit",
      description: "In-depth profile review + optimization tips (bio, highlights, aesthetics, content suggestions)",
      price: "₹1,999"
    },
    {
      name: "Strategy Session",
      description: "60–90 min 1:1 call + personalized content roadmap, niche clarity, engagement plan",
      price: "₹2,999"
    },
    {
      name: "Content Calendar + Captions",
      description: "12 content ideas + custom hooks + full captions + SEO hashtags",
      price: "₹5,999"
    },
    {
      name: "Story Strategy",
      description: "Story templates, highlight covers, engagement prompts, CTA framework",
      price: "₹2,500"
    },
    {
      name: "Reels Script Pack",
      description: "5–10 Reels ideas with trends, scripts, hooks & CTA",
      price: "₹2,000 – ₹3,500"
    },
    {
      name: "Brand Kit Creation",
      description: "Fonts, colors, voice/tone, story templates — for a cohesive identity",
      price: "₹3,500"
    },
    {
      name: "Analytics Report Only",
      description: "Monthly insights review + action plan (ideal for self-managed creators)",
      price: "₹1,000 – ₹1,500"
    },
    {
      name: "Ad Strategy / Boosting Guide",
      description: "Custom guidance for paid promotions that convert",
      price: "₹1,999"
    }
  ];

  return (
    <div className="pt-20 relative page-transition">
      {/* 3D Parallax Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-32 h-32 bg-gradient-to-br from-white/10 via-white/30 to-black/80 rounded-full blur-3xl opacity-30 animate-cube-spin"></div>
        <div className="absolute right-1/4 bottom-0 w-40 h-40 bg-gradient-to-tr from-white/10 to-black/80 rounded-3xl blur-2xl opacity-40 animate-cube-spin-reverse"></div>
        <div className="absolute left-1/2 top-1/2 w-24 h-24 bg-gradient-to-br from-white/20 via-black/80 to-white/10 rounded-full blur-2xl opacity-30 animate-sphere-float"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6 animate-3d-title">My <span className="text-pink-500 drop-shadow-lg">Services</span></h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto animate-fade-in">
            <span className="text-pink-400 font-bold">Comprehensive social media solutions</span> designed to help your brand thrive in the digital landscape
          </p>
          {/* 3D Floating Pink Cube */}
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-pink-500 rounded-3xl blur-2xl opacity-40 animate-float-advanced"></div>
          {/* Glowing Pink Highlight */}
          <div className="absolute right-1/2 bottom-1/3 w-32 h-8 bg-gradient-to-r from-pink-500/60 to-transparent rounded-full blur-xl opacity-60 animate-pulse"></div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 bg-black">
        {/* Services Grid */}
        {/* No main services to display, so show a placeholder or remove the section for a cleaner look */}
        {/*
        <section className="py-16 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-black border border-white/10 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 text-white">
                  <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-2xl mb-6 hover:scale-105 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-pink-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* Pricing Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="absolute animate-float-slow left-10 top-10">
              <div className="w-16 h-16 bg-gradient-to-tr from-white/10 to-white/5 rounded-2xl shadow-2xl transform rotate-12 blur-sm animate-float-advanced" style={{ filter: 'drop-shadow(0 8px 24px #fff2)' }}></div>
            </div>
            <div className="absolute animate-float-fast right-20 bottom-20">
              <div className="w-24 h-24 bg-white/10 rounded-3xl shadow-2xl transform -rotate-6 blur-sm" style={{ filter: 'drop-shadow(0 8px 24px #fff2)' }}></div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 animate-3d-title">Service Packages</h2>
              <p className="text-lg text-white/70">
                Choose the perfect package for your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className={`bg-black rounded-3xl p-8 shadow-3xl relative text-white border-2 border-white/10 hover:border-white/30 transition-all duration-300 group ${pkg.popular ? 'ring-2 ring-white scale-105 z-20' : ''}`}
                  style={{ boxShadow: '0 16px 48px 0 rgba(0,0,0,0.85), 0 2px 12px 0 rgba(255,255,255,0.18)' }}>
                  {/* 3D floating highlight */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-white/10 via-white/30 to-black/80 rounded-full blur-3xl opacity-40 pointer-events-none animate-float-advanced"></div>
                  {/* Animated glowing border */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent animate-glow-border"></div>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium animate-pulse">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 animate-3d-title group-hover:animate-title-pop">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-white mb-2">
                      {pkg.price}
                      <span className="text-lg text-white/60 font-normal">{pkg.period}</span>
                    </div>
                    <p className="text-white/70">{pkg.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center group">
                        <svg className="w-5 h-5 text-white mr-3 group-hover:text-white/80 transition-colors animate-float-fast" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-white/60 group-hover:text-white transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full text-center py-3 rounded-lg font-medium transition-colors block bg-white/10 text-white hover:bg-white/20 shadow-xl border-2 border-white/10 hover:border-white/30 animate-cta-btn`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
            @keyframes float-fast { 0% { transform: translateY(0); } 50% { transform: translateY(40px); } 100% { transform: translateY(0); } }
            @keyframes cube-spin { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(18deg) scale(1.08); } 100% { transform: rotate(0deg) scale(1); } }
            @keyframes cube-spin-reverse { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(-18deg) scale(1.08); } 100% { transform: rotate(0deg) scale(1); } }
            @keyframes sphere-float { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-18px) scale(1.08); } 100% { transform: translateY(0) scale(1); }
            }
            @keyframes fade-in { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
            @keyframes img-pop { 0% { transform: scale(0.98); } 50% { transform: scale(1.04); } 100% { transform: scale(1); }
            }
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
            .page-transition {
              animation: pageFadeIn 1.2s cubic-bezier(.23,1,.32,1);
            }
            @keyframes pageFadeIn {
              0% { opacity: 0; transform: scale(0.98) translateY(40px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>
        </section>
      </section>

      {/* Details Section */}
      <section ref={detailsRef} className="py-16 bg-black">
        {/* Individual Services Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="absolute animate-float-slow left-10 top-10">
              <div className="w-16 h-16 bg-gradient-to-tr from-white/10 to-white/5 rounded-2xl shadow-2xl transform rotate-12 blur-sm animate-float-advanced" style={{ filter: 'drop-shadow(0 8px 24px #fff2)' }}></div>
            </div>
            <div className="absolute animate-float-fast right-20 bottom-20">
              <div className="w-24 h-24 bg-white/10 rounded-3xl shadow-2xl transform -rotate-6 blur-sm" style={{ filter: 'drop-shadow(0 8px 24px #fff2)' }}></div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 animate-3d-title">One-Time Services</h2>
              <p className="text-lg text-white/70">Quick solutions for specific needs—no monthly commitment required.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {individualServices.map((service, idx) => (
                <div key={idx} className="bg-black rounded-3xl p-8 shadow-3xl flex flex-col items-center text-center border-2 border-white/10 hover:border-white/30 transition-all duration-300 group"
                  style={{ boxShadow: '0 16px 48px 0 rgba(0,0,0,0.85), 0 2px 12px 0 rgba(255,255,255,0.18)' }}>
                  {/* 3D floating highlight */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-white/10 via-white/30 to-black/80 rounded-full blur-3xl opacity-40 pointer-events-none animate-float-advanced"></div>
                  {/* Animated glowing border */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent animate-glow-border"></div>
                  <h3 className="text-xl font-bold text-white mb-2 animate-3d-title group-hover:animate-title-pop">{service.name}</h3>
                  <p className="text-white/70 mb-4 text-sm">{service.description}</p>
                  <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                  <Link to="/contact" className="mt-auto bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors font-medium shadow-xl border-2 border-white/10 hover:border-white/30 animate-cta-btn">
                    Book Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
            @keyframes float-fast { 0% { transform: translateY(0); } 50% { transform: translateY(40px); } 100% { transform: translateY(0); } }
            @keyframes cube-spin { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(18deg) scale(1.08); } 100% { transform: rotate(0deg) scale(1); } }
            @keyframes cube-spin-reverse { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(-18deg) scale(1.08); } 100% { transform: rotate(0deg) scale(1); } }
            @keyframes sphere-float { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-18px) scale(1.08); } 100% { transform: translateY(0) scale(1); }
            }
            @keyframes fade-in { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
            @keyframes img-pop { 0% { transform: scale(0.98); } 50% { transform: scale(1.04); } 100% { transform: scale(1); }
            }
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
            .page-transition {
              animation: pageFadeIn 1.2s cubic-bezier(.23,1,.32,1);
            }
            @keyframes pageFadeIn {
              0% { opacity: 0; transform: scale(0.98) translateY(40px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>
        </section>
      </section>

      {/* Transition Section */}
      <section ref={transitionRef} className="py-16 bg-black">
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Social Media?</h2>
          <p className="text-lg text-white/70 mb-8">
            Let's discuss your specific needs and create a custom solution that works for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors shadow-lg">
              Start Your Project
            </Link>
            <Link to="/portfolio" className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 hover:text-white transition-colors">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-lg text-white/70 mb-4">For collaborations, inquiries, or to connect directly:</p>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <span className="text-white/60 font-semibold">Instagram:</span>
              <a href="https://instagram.com/geetharangaseeli" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-8 h-8 text-white hover:text-white/80 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <style>{`
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
        .page-transition {
          animation: pageFadeIn 1.2s cubic-bezier(.23,1,.32,1);
        }
        @keyframes pageFadeIn {
          0% { opacity: 0; transform: scale(0.98) translateY(40px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Services;