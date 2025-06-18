import React, { useState } from 'react';

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample portfolio data - client-wise organization
  const portfolioData = [
    {
      id: 1,
      clientName: "Bloom Cafe",
      category: "food",
      industry: "Food & Beverage",
      description: "Complete social media management for a trendy local cafe, focusing on food photography and community engagement.",
      services: ["Content Creation", "Account Management", "Community Building"],
      results: [
        "300% increase in Instagram followers",
        "150% boost in engagement rate",
        "40% increase in foot traffic"
      ],
      images: [
        "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg"
      ],
      platforms: ["Instagram", "Facebook", "TikTok"],
      duration: "6 months",
      testimonial: {
        text: "Geetha transformed our social media presence completely. Our engagement and foot traffic have never been better!",
        author: "Sarah Johnson, Owner"
      }
    },
    {
      id: 2,
      clientName: "TechStart Solutions",
      category: "tech",
      industry: "Technology",
      description: "Strategic social media consulting for a B2B tech startup, focusing on thought leadership and lead generation.",
      services: ["Strategy Development", "Content Planning", "Lead Generation"],
      results: [
        "200% increase in LinkedIn connections",
        "85% improvement in lead quality",
        "50 new qualified leads per month"
      ],
      images: [
        "https://images.unsplash.com/photo-1595349785606-5982d59ef635"
      ],
      platforms: ["LinkedIn", "Twitter", "YouTube"],
      duration: "4 months",
      testimonial: {
        text: "Her strategic approach helped us establish thought leadership in our industry and generated high-quality leads.",
        author: "Mike Chen, Founder"
      }
    },
    {
      id: 3,
      clientName: "Bella Boutique",
      category: "fashion",
      industry: "Fashion & Retail",
      description: "Instagram-focused campaign for a fashion boutique, emphasizing visual storytelling and influencer partnerships.",
      services: ["Visual Content", "Influencer Outreach", "Campaign Management"],
      results: [
        "500% increase in online sales",
        "250% growth in Instagram followers",
        "90% increase in website traffic"
      ],
      images: [
        "https://images.pexels.com/photos/8638300/pexels-photo-8638300.jpeg"
      ],
      platforms: ["Instagram", "Pinterest", "Facebook"],
      duration: "8 months",
      testimonial: {
        text: "Our online presence and sales have skyrocketed since working with Geetha. She really understands our brand!",
        author: "Emma Rodriguez, Creative Director"
      }
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'food', label: 'Food & Beverage' },
    { key: 'tech', label: 'Technology' },
    { key: 'fashion', label: 'Fashion & Retail' },
  ];

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">My Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how I've helped businesses transform their social media presence and achieve remarkable growth
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.key
                    ? 'bg-pink-600 text-white'
                    : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPortfolio.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-pink-100 p-8 rounded-2xl max-w-md mx-auto">
                <svg className="w-16 h-16 text-pink-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-xl font-bold text-gray-800 mb-2">More Projects Coming Soon!</h3>
                <p className="text-gray-600">
                  I'm currently working on exciting new projects in this category. Check back soon to see the amazing results!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredPortfolio.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Project Image */}
                    <div className="relative">
                      <img 
                        src={project.images[0]} 
                        alt={project.clientName}
                        className="w-full h-96 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.industry}
                        </span>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8 lg:p-12">
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">{project.clientName}</h2>
                      <p className="text-lg text-gray-600 mb-6">{project.description}</p>

                      {/* Services Provided */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Services Provided:</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.services.map((service, index) => (
                            <span key={index} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Platforms */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Platforms:</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.platforms.map((platform, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Results:</h3>
                        <ul className="space-y-2">
                          {project.results.map((result, index) => (
                            <li key={index} className="flex items-center">
                              <svg className="w-5 h-5 text-pink-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Project Duration */}
                      <div className="mb-6">
                        <span className="text-sm text-gray-500">Project Duration: </span>
                        <span className="text-sm font-medium text-gray-700">{project.duration}</span>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-600">
                        <p className="text-gray-700 italic mb-3">"{project.testimonial.text}"</p>
                        <p className="text-sm font-medium text-pink-600">— {project.testimonial.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Be My Next Success Story?</h2>
          <p className="text-lg text-pink-100 mb-8">
            Let's work together to create amazing results for your brand's social media presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-pink-600 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors shadow-lg font-medium"
            >
              Start Your Project
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-pink-600 transition-colors font-medium"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <svg className="w-16 h-16 text-pink-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">More Case Studies Coming Soon!</h3>
            <p className="text-gray-600 mb-6">
              I'm currently working with several exciting clients across various industries. 
              New case studies and success stories will be added regularly to showcase the latest results and innovations.
            </p>
            <p className="text-sm text-gray-500">
              Interested in being featured in my next case study? Let's start your project today!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;