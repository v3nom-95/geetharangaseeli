import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Hi, I'm <span className="text-pink-600">Geetha</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 mb-6">
                Social Media Manager & Strategist
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Passionate freelancer specializing in social media marketing and strategy consulting. 
                I bring creative marketing expertise and fresh perspectives to help brands grow their 
                digital presence and connect meaningfully with their audiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors shadow-lg text-center">
                  Get In Touch
                </Link>
                <Link to="/portfolio" className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-600 hover:text-white transition-colors text-center">
                  View My Work
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-200 rounded-full blur-2xl opacity-30"></div>
                <img 
                  src="https://images.pexels.com/photos/8638300/pexels-photo-8638300.jpeg" 
                  alt="Social Media Manager" 
                  className="relative w-80 h-80 object-cover rounded-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What I Do</h2>
            <p className="text-lg text-gray-600">
              Helping brands create meaningful connections through strategic social media marketing
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-2xl mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-12 h-12 text-pink-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Social Media Marketing</h3>
              <p className="text-gray-600">
                Creating engaging content and managing social media presence across all platforms.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-2xl mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-12 h-12 text-pink-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Strategy Consulting</h3>
              <p className="text-gray-600">
                Developing data-driven strategies that align with your business goals and audience.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-2xl mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-12 h-12 text-pink-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Brand Building</h3>
              <p className="text-gray-600">
                Helping brands establish a strong digital presence and authentic voice online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">Fresh</div>
              <div className="text-pink-100">Perspective</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-pink-100">Dedicated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-pink-100">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-pink-100">Creativity</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Grow Your Brand?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's work together to create an amazing social media presence for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors shadow-lg">
              View Services
            </Link>
            <Link to="/contact" className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;