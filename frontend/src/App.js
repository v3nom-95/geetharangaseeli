import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-pink-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-pink-600">Geetha Rangaseeli</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 hover:text-pink-600 transition-colors">Skills</a>
              <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
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
                Currently pursuing BTech in Computer Science Engineering, bringing a unique blend of 
                technical knowledge and creative marketing expertise to help brands grow their digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors shadow-lg">
                  Get In Touch
                </button>
                <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
                  View My Work
                </button>
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

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm a passionate social media enthusiast who loves helping brands tell their stories 
              and connect with their audiences in meaningful ways.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1595349785606-5982d59ef635" 
                alt="Professional at work" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-pink-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Freelance Social Media Manager</h4>
                    <p className="text-gray-600">Starting my journey as a freelancer, eager to help businesses grow their online presence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-pink-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">BTech Computer Science Student</h4>
                    <p className="text-gray-600">Currently pursuing my degree, combining technical skills with creative marketing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-pink-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Strategic Thinker</h4>
                    <p className="text-gray-600">Passionate about creating data-driven strategies that deliver real results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
            <p className="text-lg text-gray-600">
              Combining creativity with strategic thinking to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Social Media Marketing */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Social Media Marketing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Expert in creating engaging content, managing social media accounts, and building brand awareness across all major platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Content Creation</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Community Management</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Brand Building</span>
              </div>
            </div>

            {/* Strategy Consulting */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Strategy Consulting</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Developing comprehensive digital marketing strategies that align with business goals and drive measurable growth.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Digital Strategy</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Analytics</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Growth Planning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What I Offer</h2>
            <p className="text-lg text-gray-600">
              Comprehensive social media solutions to help your brand thrive online
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-2xl mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-12 h-12 text-pink-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Content Creation</h3>
              <p className="text-gray-600">
                Eye-catching posts, stories, and campaigns that engage your audience and reflect your brand's personality.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-2xl mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-12 h-12 text-pink-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Account Management</h3>
              <p className="text-gray-600">
                Complete social media account management including posting, engagement, and community building.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-2xl mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-12 h-12 text-pink-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Strategy Development</h3>
              <p className="text-gray-600">
                Data-driven social media strategies tailored to your business goals and target audience.
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Work Together</h2>
            <p className="text-lg text-gray-600">
              Ready to take your social media to the next level? Let's chat about your project!
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="text-center mt-8 text-gray-500">
            <p>Contact details will be updated soon. Stay tuned!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">Geetha Rangaseeli</h3>
            <p className="text-gray-400 mb-6">Social Media Manager & Strategist</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.223.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-400">© 2024 Geetha Rangaseeli. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;