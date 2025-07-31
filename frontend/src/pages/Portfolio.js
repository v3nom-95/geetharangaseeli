import React, { useState } from 'react';

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Categorize both works as 'food' for filtering
  const portfolioData = [
    {
      id: 1,
      clientName: "Fox In The Field",
      category: "food-beverage",
      industry: "Brewery & Restaurant",
      description: "Comprehensive social media management for Fox In The Field, a popular brewery and restaurant in Whitefield. Focused on content creation, engagement, and brand building.",
      services: [
        "Instagram Content Creation",
        "Profile Optimization",
        "Community Engagement",
        "Analytics & Reporting"
      ],
      summary: `Fox in the Field is a microbrewery and theatre bar in Whitefield known for its food, craft beer, and vibrant vibe.\n\nI handled their content strategy, leading creative direction for video and design. In the past 3 months, the account reached 1.7M+ accounts, crossed 4M total views, and one of the top-performing reels alone hit 200K views.`,
      images: [
        "/images/11.jpeg",
        "/images/12.jpeg",
        "/images/13.jpeg",
        "/images/14.jpeg",
        "/images/15.jpeg",
        "/images/16.jpeg"
      ],
      platforms: ["Instagram"],
      duration: "Ongoing",
      testimonial: {
        text: "Our Instagram has never looked better! The content and engagement have brought in more customers and built a loyal community.",
        author: "Fox In The Field Team"
      },
      instagram: "https://instagram.com/foxinthe_field"
    },
    {
      id: 2,
      clientName: "The Dome Cafe - HSR Layout",
      category: "food-beverage",
      industry: "Cafe & Restaurant",
      description: "Social media management and content strategy for The Dome Cafe, India's first dome-shaped cafe. Focused on food photography, event promotion, and audience growth.",
      services: [
        "Instagram Content Creation",
        "Event Promotion",
        "Brand Storytelling",
        "Analytics & Reporting"
      ],
      results: [
        "Steady follower growth",
        "Increased engagement on posts",
        "Successful event promotions"
      ],
      images: [
        "/images/21.jpeg",
        "/images/22.jpeg",
        "/images/23.jpeg",
        "/images/24.jpeg"
      ],
      platforms: ["Instagram"],
      duration: "Ongoing",
      testimonial: {
        text: "The Dome Cafe's Instagram is now a true reflection of our vibe and food. The creative posts and stories have helped us reach more food lovers!",
        author: "The Dome Cafe Team"
      },
      instagram: "https://instagram.com/thedomecafe_hsr_layout"
    },
    {
      id: 3,
      clientName: "LM Farms",
      category: "hotel-resort",
      industry: "Hotel Resort",
      description: "Social media growth and analytics for LM Farms, a luxury nature resort. Focused on Instagram strategy, content, and audience growth.",
      services: [
        "Instagram Growth Strategy",
        "Content Planning",
        "Analytics & Insights",
        "Community Engagement"
      ],
      results: [
        "886.5K views in 30 days",
        "1.9K total followers",
        "+8% follower growth in 90 days"
      ],
      images: [
        "/images/31.jpeg",
        "/images/32.jpeg",
      ],
      platforms: ["Instagram"],
      duration: "Ongoing",
      testimonial: {
        text: "The Instagram growth and engagement for LM Farms has been fantastic. The analytics and content have helped us reach more guests and build our brand.",
        author: "LM Farms Team"
      },
      instagram: "https://instagram.com/lm_farms_"
    },
    {
      id: 4,
      clientName: "angel.lifecoach",
      category: "influencers",
      industry: "Life Coach / Influencer",
      description: "Instagram management and analytics for angel.lifecoach. Focused on content creation, engagement, and audience growth for a vibrant coaching brand.",
      services: [
        "Instagram Content Creation",
        "Growth Analytics",
        "Community Engagement",
        "Reels & Stories Strategy"
      ],
      results: [
        "7,052 followers",
        "25,781 views in 90 days",
        "+21.9% follower growth in 90 days"
      ],
      images: [
        "/images/41.jpeg",
        "/images/42.jpeg",
        "/images/43.jpeg"
      ],
      platforms: ["Instagram"],
      duration: "Ongoing",
      testimonial: {
        text: "angel.lifecoach's Instagram has seen a huge boost in engagement and reach. The creative content and analytics have made a real difference!",
        author: "angel.lifecoach"
      },
      instagram: "https://instagram.com/angel.lifecoach"
    },
    /*{
      id: 5,
      clientName: "Aurum Brew Works",
      category: "food-beverage",
      industry: "Brewery",
      description: "Social media management and growth strategy for Aurum Brew Works. Focused on increasing views, interactions, and followers through engaging content.",
      services: [
        "Instagram Content Creation",
        "Audience Growth Strategy",
        "Engagement Boost",
        "Performance Analytics"
      ],
      results: [
        "861.0K views in 30 days",
        "5.2K interactions",
        "626 new followers",
        "41.6% posts content type",
        "31.0% reels content type"
      ],
      images: [
        "/images/p6.png"
      ],
      platforms: ["Instagram"],
      duration: "Ongoing",
      testimonial: {
        text: "Working with Geetha has significantly boosted our Instagram presence. The views and interactions have seen a remarkable increase!",
        author: "Aurum Brew Works Team"
      },
      instagram: "https://instagram.com/aurumbrews"
    },
    {
      id: 6,
      clientName: "Anagha | Ethnic Wear for Women",
      category: "fashion",
      industry: "Ethnic Wear / Fashion",
      description: "Social media management and content strategy for Anagha, a curated ethnic wear brand. Focused on increasing followers, engagement, and brand awareness through creative content and community interaction.",
      services: [
        "Instagram Content Creation",
        "Community Engagement",
        "Brand Storytelling",
        "Analytics & Reporting"
      ],
      results: [
        "4,765 followers",
        "861 posts",
        "Consistent engagement",
        "Enhanced brand presence"
      ],
      images: [
        "/images/p5.png"
      ],
      platforms: ["Instagram"],
      duration: "Ongoing",
      testimonial: {
        text: "The Instagram page for Anagha has seen steady growth in followers and engagement. The creative content and consistent posting have helped build a strong brand presence!",
        author: "Anagha Team"
      },
      instagram: "https://instagram.com/anagha_designs"
    }*/
  ];

  // Update categories to match the new data
  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'food-beverage', label: 'Food & Beverage' },
    { key: 'hotel-resort', label: 'Hotel Resort' },
    { key: 'fashion', label: 'Clothing & Fashion' },
    { key: 'influencers', label: 'Influencers' }
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolio.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer hover:shadow-2xl transition"
                  onClick={() => { setSelectedProject(project); setModalOpen(true); }}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.clientName}</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.platforms.map((platform, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal for project details */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={() => setModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative max-h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-pink-600 text-2xl"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedProject.clientName}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.platforms.map((platform, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {platform}
                </span>
              ))}
            </div>
            {/* Image carousel for all projects with multiple images, single image for others */}
            {selectedProject.images && selectedProject.images.length > 1 ? (
              <div className="flex overflow-x-auto gap-4 mb-4 pb-2 scrollbar-thin scrollbar-thumb-pink-200 scrollbar-track-pink-50">
                {selectedProject.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={selectedProject.clientName + ' screenshot ' + (idx + 1)}
                    className="h-80 w-44 object-cover rounded-xl border-2 border-pink-200 shadow-md flex-shrink-0"
                    style={{ minWidth: '176px' }}
                  />
                ))}
              </div>
            ) : (
              selectedProject.images && selectedProject.images.length === 1 ? (
                <img src={selectedProject.images[0]} alt={selectedProject.clientName} className="w-full h-64 object-cover rounded-xl mb-4" />
              ) : null
            )}
            <p className="text-lg text-gray-600 mb-4">{selectedProject.description}</p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Services Provided:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.services.map((service, idx) => (
                  <span key={idx} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">{service}</span>
                ))}
              </div>
            </div>
            {/* Custom summary for Fox In The Field, fallback to results for others */}
            {selectedProject.id === 1 && selectedProject.summary ? (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-pink-700 mb-3 flex items-center gap-2">
                  <span className="drop-shadow-lg">Project Impact & Highlights</span>
                  <span className="animate-pulse">
                    <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15 8l6 .9-4.5 4.4L17 20l-5-3-5 3 1.5-6.7L3 8.9 9 8z"/>
                    </svg>
                  </span>
                </h3>
                <div className="bg-gradient-to-br from-pink-100 via-white to-rose-100 p-5 rounded-2xl shadow-2xl border-l-8 border-pink-400 relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 opacity-30 pointer-events-none">
                    {/* 3D effect: floating glass sphere */}
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <defs>
                        <radialGradient id="glass" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#fff" stopOpacity="0.9"/>
                          <stop offset="100%" stopColor="#f472b6" stopOpacity="0.3"/>
                        </radialGradient>
                      </defs>
                      <circle cx="60" cy="60" r="50" fill="url(#glass)"/>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 font-medium leading-relaxed z-10 relative">
                    {selectedProject.summary}
                  </p>
                </div>
              </div>
            ) : (
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Results</h3>
                <ul className="space-y-1">
                  {selectedProject.results && selectedProject.results.map((result, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-4 h-4 text-pink-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mb-4">
              <span className="text-sm text-gray-500">Project Duration: </span>
              <span className="text-sm font-medium text-gray-700">{selectedProject.duration}</span>
            </div>
            <div className="bg-pink-50 p-4 rounded-xl border-l-4 border-pink-600">
              <p className="text-gray-700 italic mb-2">"{selectedProject.testimonial.text}"</p>
              <p className="text-sm font-medium text-pink-600">— {selectedProject.testimonial.author}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-rose-500 to-rose-700 text-white relative overflow-hidden">
        {/* 3D floating cubes for advanced UI */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute animate-float-slow left-10 top-10">
            <div className="w-16 h-16 bg-gradient-to-tr from-white/60 to-pink-300/80 rounded-2xl shadow-2xl transform rotate-12 blur-sm" style={{ filter: 'drop-shadow(0 8px 24px #f472b6aa)' }}></div>
          </div>
          <div className="absolute animate-float-fast right-20 bottom-20">
            <div className="w-24 h-24 bg-gradient-to-br from-rose-200/80 to-pink-400/60 rounded-3xl shadow-2xl transform -rotate-6 blur-sm" style={{ filter: 'drop-shadow(0 8px 24px #be185daa)' }}></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-extrabold mb-8 tracking-tight drop-shadow-lg flex items-center justify-center gap-3">
            <span>Ready to Be My Next</span>
            <span className="bg-white/20 px-4 py-1 rounded-2xl shadow-inner text-pink-100 animate-pulse">Success Story?</span>
          </h2>
          <p className="text-2xl text-pink-100 mb-10 font-medium drop-shadow-md">
            Let's work together to create <span className="bg-white/20 px-2 py-1 rounded-xl">amazing results</span> for your brand's social media presence
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact" 
              className="bg-white/90 text-pink-700 px-10 py-4 rounded-full hover:bg-pink-50 transition-colors shadow-2xl font-bold text-lg border-2 border-pink-200 hover:scale-105 transform duration-200"
            >
              Start Your Project
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-pink-600 transition-colors font-bold text-lg hover:scale-105 transform duration-200 shadow-xl"
            >
              View Services
            </a>
          </div>
        </div>
        {/* Keyframes for floating animation */}
        <style>{`
          @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
          @keyframes float-fast { 0% { transform: translateY(0); } 50% { transform: translateY(40px); } 100% { transform: translateY(0); } }
          .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        `}</style>
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