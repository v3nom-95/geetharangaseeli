import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      {/* Advanced Hero Section */}
      <section className="hero-advanced min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)`
          }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full blur-xl opacity-60 animate-float-advanced"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-40 animate-float-advanced" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow-200 rounded-full blur-xl opacity-50 animate-float-advanced" style={{ animationDelay: '4s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-pink-700 font-medium mb-6 hover:bg-white/30 transition-all duration-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Available for freelance projects
                </div>
              </div>
              
              <h1 className="section-title-advanced leading-tight mb-8">
                Hi, I'm <span className="relative">
                  <span className="text-gradient">Geetha</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards] origin-left"></div>
                </span>
              </h1>
              
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-display">
                  Social Media Manager & 
                  <span className="block text-gradient">Creative Strategist</span>
                </h2>
              </div>
              
              <p className="section-subtitle-advanced max-w-xl">
                Passionate freelancer specializing in social media marketing and strategy consulting. 
                I bring creative marketing expertise and fresh perspectives to help brands grow their 
                digital presence and connect meaningfully with their audiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link 
                  to="/contact" 
                  className="btn-advanced text-white inline-flex items-center justify-center space-x-2 group"
                >
                  <span>Get In Touch</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  to="/portfolio" 
                  className="btn-secondary-advanced inline-flex items-center justify-center space-x-2 group"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View My Work</span>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 font-display">50+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 font-display">25+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 font-display">2+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="relative group">
                {/* Background Decorations */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-40 transition-opacity animate-pulse"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-yellow-200 to-pink-200 rounded-full blur-2xl opacity-40 animate-float-advanced"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-2xl opacity-40 animate-float-advanced" style={{ animationDelay: '3s' }}></div>
                
                {/* Main Image */}
                <div className="relative z-10">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                    <img 
                      src="https://images.pexels.com/photos/8638300/pexels-photo-8638300.jpeg" 
                      alt="Social Media Manager" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 animate-bounce">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">Available</div>
                        <div className="text-xs text-gray-600">Ready to work</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Services Overview */}
      <section className="section-advanced bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-pink-50 rounded-full border border-pink-100 text-pink-700 font-medium mb-8">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
              </svg>
              What I Do Best
            </div>
            <h2 className="section-title-advanced text-center">
              Transforming Brands Through
              <br />
              <span className="text-gradient">Strategic Social Media</span>
            </h2>
            <p className="section-subtitle-advanced max-w-3xl mx-auto">
              Helping brands create meaningful connections through strategic social media marketing that drives real results and lasting engagement.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 stagger-children">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                ),
                title: "Social Media Marketing",
                description: "Creating engaging content and managing social media presence across all platforms with data-driven strategies.",
                features: ["Content Creation", "Community Management", "Brand Building", "Analytics"],
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                ),
                title: "Strategy Consulting",
                description: "Developing data-driven strategies that align with your business goals and target audience for maximum impact.",
                features: ["Digital Strategy", "Analytics", "Growth Planning", "Market Research"],
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                ),
                title: "Brand Building",
                description: "Helping brands establish a strong digital presence and authentic voice that resonates with their audience.",
                features: ["Brand Voice", "Visual Identity", "Storytelling", "Reputation Management"],
                color: "from-teal-500 to-cyan-500"
              }
            ].map((service, index) => (
              <div key={index} className="card-advanced group hover-lift">
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-display">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-pink-100 hover:text-pink-700 transition-colors">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            ))}
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