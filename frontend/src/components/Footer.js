import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20"></div>
      
      <div className="section-advanced relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient font-display">Geetha Rangaseeli</h3>
                  <p className="text-gray-400 text-sm">Social Media Manager & Creative Strategist</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
                Passionate about helping brands create meaningful connections through strategic social media marketing. Let's build something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { 
                    name: 'Twitter', 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    ),
                    color: 'hover:bg-blue-500'
                  },
                  { 
                    name: 'LinkedIn', 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                    color: 'hover:bg-blue-600'
                  },
                  { 
                    name: 'Instagram', 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.223.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                      </svg>
                    ),
                    color: 'hover:bg-pink-500'
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Services', path: '/services' },
                  { name: 'Portfolio', path: '/portfolio' },
                  { name: 'Contact', path: '/contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center group"
                    >
                      <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {[
                  'Social Media Management',
                  'Content Creation',
                  'Strategy Consulting',
                  'Brand Building',
                  'Analytics & Reporting'
                ].map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Geetha Rangaseeli. All rights reserved. Made with ❤️ for amazing brands.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Terms of Service</a>
                <div className="flex items-center text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for new projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;