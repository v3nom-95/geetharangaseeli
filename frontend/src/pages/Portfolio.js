import React, { useState, useRef, useEffect } from 'react';

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Refs for scroll-based 3D reveal
  const heroRef = useRef(null);
  const brandsRef = useRef(null);
  const detailsRef = useRef(null);
  const transitionRef = useRef(null);

  useEffect(() => {
    const sections = [heroRef.current, brandsRef.current, detailsRef.current, transitionRef.current];
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
    <div className="pt-20 relative page-transition">
      {/* Hero Section */}
      <section ref={heroRef} className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">My <span className="text-pink-500 drop-shadow-lg">Portfolio</span></h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            <span className="text-pink-400 font-bold">Discover how I've helped businesses</span> transform their social media presence and achieve remarkable growth
          </p>
        </div>
        {/* 3D Floating Pink Ring */}
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-pink-500 rounded-full blur-2xl opacity-40 animate-float-advanced"></div>
        {/* Glowing Pink Highlight */}
        <div className="absolute left-1/2 top-2/3 w-32 h-8 bg-gradient-to-r from-pink-500/60 to-transparent rounded-full blur-xl opacity-60 animate-pulse"></div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-black border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.key
                    ? 'bg-white/10 text-white'
                    : 'bg-black text-white/60 hover:bg-white/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={brandsRef} className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPortfolio.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-black p-8 rounded-2xl max-w-md mx-auto border border-white/10 text-white">
                <svg className="w-16 h-16 text-white/60 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">More Projects Coming Soon!</h3>
                <p className="text-white/70">
                  I'm currently working on exciting new projects in this category. Check back soon to see the amazing results!
                </p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolio.map((project) => (
                <div
                  key={project.id}
                  className="relative rounded-3xl p-8 cursor-pointer border-2 border-white/20 transition group bg-gradient-to-br from-black via-black/80 to-black/95 shadow-3xl hover:shadow-4xl hover:scale-[1.08] duration-300 hover:border-white/40 hover:z-20"
                  style={{ boxShadow: '0 16px 48px 0 rgba(0,0,0,0.85), 0 2px 12px 0 rgba(255,255,255,0.18)' }}
                  onClick={() => { setSelectedProject(project); setModalOpen(true); }}
                >
                  {/* 3D floating highlight */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-white/10 via-white/30 to-black/80 rounded-full blur-3xl opacity-40 pointer-events-none animate-float-advanced"></div>
                  {/* Animated 3D cube */}
                  <div className="absolute -top-10 -right-10 w-12 h-12 bg-gradient-to-tr from-white/10 to-black/80 rounded-2xl shadow-2xl blur-sm opacity-30 pointer-events-none animate-float-cube"></div>
                  {/* Glowing brand highlight */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-8 bg-gradient-to-r from-white/10 via-white/30 to-white/10 rounded-full blur-2xl opacity-30 pointer-events-none animate-pulse"></div>
                  {/* Animated glowing border */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-white/30 group-hover:shadow-glow animate-glow-border"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl font-extrabold text-white mb-2 drop-shadow-3xl tracking-wide animate-3d-title group-hover:animate-title-pop">{project.clientName}</h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.platforms.map((platform, idx) => (
                        <span key={idx} className="bg-black/80 text-white px-3 py-1 rounded-full text-sm border border-white/20 shadow-3xl animate-3d-chip group-hover:animate-chip-pop">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Micro-interaction: floating icon on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <svg className="w-8 h-8 text-white/40 animate-float-fast" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 8l6 .9-4.5 4.4L17 20l-5-3-5 3 1.5-6.7L3 8.9 9 8z"/></svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal for project details */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-black/90 to-black/95 bg-opacity-95 p-4" onClick={() => setModalOpen(false)}>
          <div className="bg-black/95 rounded-3xl shadow-3xl max-w-2xl w-full p-8 relative max-h-full overflow-y-auto border-2 border-white/20" onClick={(e) => e.stopPropagation()} style={{ boxShadow: '0 16px 48px 0 rgba(0,0,0,0.85), 0 2px 12px 0 rgba(255,255,255,0.14)' }}>
            {/* 3D floating highlight */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-white/10 via-white/30 to-black/80 rounded-full blur-3xl opacity-40 pointer-events-none animate-float-advanced"></div>
            {/* Animated 3D cube */}
            <div className="absolute -top-10 -right-10 w-12 h-12 bg-gradient-to-tr from-white/10 to-black/80 rounded-2xl shadow-2xl blur-sm opacity-30 pointer-events-none animate-float-cube"></div>
            {/* Animated glowing border for modal */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent animate-glow-border"></div>
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.clientName}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.platforms.map((platform, idx) => (
                <span key={idx} className="bg-black/80 text-white px-3 py-1 rounded-full text-sm border border-white/20">
                  {platform}
                </span>
              ))}
            </div>
            {/* Image carousel for all projects with multiple images, single image for others */}
            {selectedProject.images && selectedProject.images.length > 1 ? (
              <div className="flex overflow-x-auto gap-4 mb-4 pb-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-black">
                {selectedProject.images.map((img, idx) => (
                  <div key={idx} className="relative">
                    <img
                      src={img}
                      alt={selectedProject.clientName + ' screenshot ' + (idx + 1)}
                      className="h-80 w-44 object-cover rounded-2xl border-2 border-white/10 shadow-3xl flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                      style={{ minWidth: '176px', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.7), 0 1.5px 8px 0 rgba(255,255,255,0.08)' }}
                    />
                    {/* 3D floating highlight */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 rounded-full blur-2xl opacity-30 pointer-events-none animate-float-advanced"></div>
                  </div>
                ))}
              </div>
            ) : (
              selectedProject.images && selectedProject.images.length === 1 ? (
                <img src={selectedProject.images[0]} alt={selectedProject.clientName} className="w-full h-64 object-cover rounded-xl mb-4" />
              ) : null
            )}
            <p className="text-lg text-white/70 mb-4">{selectedProject.description}</p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">Services Provided:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.services.map((service, idx) => (
                  <span key={idx} className="bg-black/80 text-white px-3 py-1 rounded-full text-sm border border-white/20">{service}</span>
                ))}
              </div>
            </div>
            {/* Custom summary for Fox In The Field, fallback to results for others */}
            {selectedProject.id === 1 && selectedProject.summary ? (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="drop-shadow-lg">Project Impact & Highlights</span>
                  <span className="animate-pulse">
                    <svg className="w-6 h-6 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15 8l6 .9-4.5 4.4L17 20l-5-3-5 3 1.5-6.7L3 8.9 9 8z"/>
                    </svg>
                  </span>
                </h3>
                <div className="bg-gradient-to-br from-black via-white/10 to-black p-5 rounded-2xl shadow-2xl border-l-8 border-white/10 relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 opacity-30 pointer-events-none">
                    {/* 3D effect: floating glass sphere */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full shadow-2xl animate-float-advanced" style={{ filter: 'drop-shadow(0 8px 24px #fff2)' }}></div>
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
                  <p className="text-lg text-white/70 font-medium leading-relaxed z-10 relative">
                    {selectedProject.summary}
                  </p>
                </div>
              </div>
            ) : (
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Key Results</h3>
                <ul className="space-y-1">
                  {selectedProject.results && selectedProject.results.map((result, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-4 h-4 text-white/60 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mb-4">
              <span className="text-sm text-white/60">Project Duration: </span>
              <span className="text-sm font-medium text-white/70">{selectedProject.duration}</span>
            </div>
            <div className="bg-black p-4 rounded-xl border-l-4 border-white/10">
              <p className="text-white/70 italic mb-2">"{selectedProject.testimonial.text}"</p>
              <p className="text-sm font-medium text-white/60">— {selectedProject.testimonial.author}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        {/* 3D floating cubes for advanced UI */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute animate-float-slow left-10 top-10">
            <div className="w-16 h-16 bg-gradient-to-tr from-white/10 to-white/5 rounded-2xl shadow-2xl transform rotate-12 blur-sm animate-float-advanced" style={{ filter: 'drop-shadow(0 8px 24px #fff2)' }}></div>
          </div>
          <div className="absolute animate-float-fast right-20 bottom-20">
            <div className="w-24 h-24 bg-white/10 rounded-3xl shadow-2xl transform -rotate-6 blur-sm" style={{ filter: 'drop-shadow(0 8px 24px #fff2)' }}></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-extrabold mb-8 tracking-tight drop-shadow-lg flex items-center justify-center gap-3">
            <span>Ready to Be My Next</span>
            <span className="bg-white/20 px-4 py-1 rounded-2xl shadow-inner text-white/60 animate-pulse">Success Story?</span>
          </h2>
          <p className="text-2xl text-white/70 mb-10 font-medium drop-shadow-md">
            Let's work together to create <span className="bg-white/20 px-2 py-1 rounded-xl">amazing results</span> for your brand's social media presence
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact" 
              className="bg-white/10 text-white px-10 py-4 rounded-full hover:bg-white/20 transition-colors shadow-2xl font-bold text-lg border-2 border-white/10 hover:scale-105 transform duration-200"
            >
              Start Your Project
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white/10 hover:text-white transition-colors font-bold text-lg hover:scale-105 transform duration-200 shadow-xl"
            >
              View Services
            </a>
          </div>
        </div>
        {/* Keyframes for floating animation */}
        <style>{`
          @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
          @keyframes float-fast { 0% { transform: translateY(0); } 50% { transform: translateY(40px); } 100% { transform: translateY(0); } }
          @keyframes float-cube { 0% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(12deg); } 100% { transform: translateY(0) rotate(0deg); } }
          @keyframes glow-border { 0% { box-shadow: 0 0 0 0 #fff2, 0 0 0 0 #fff2; } 50% { box-shadow: 0 0 24px 8px #fff2, 0 0 12px 4px #fff2; } 100% { box-shadow: 0 0 0 0 #fff2, 0 0 0 0 #fff2; } }
          @keyframes title-pop { 0% { transform: scale(1); } 50% { transform: scale(1.08); } 100% { transform: scale(1); } }
          @keyframes chip-pop { 0% { transform: scale(1); } 50% { transform: scale(1.12); } 100% { transform: scale(1); } }
          .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
          .animate-float-cube { animation: float-cube 6s ease-in-out infinite; }
          .animate-3d-title { text-shadow: 0 2px 12px #fff2, 0 1px 4px #000a; }
          .animate-3d-chip { box-shadow: 0 2px 8px #fff2, 0 1px 4px #000a; }
          .animate-glow-border { animation: glow-border 3s ease-in-out infinite; }
          .group-hover\:animate-title-pop:hover .animate-3d-title { animation: title-pop 0.5s ease-in-out; }
          .group-hover\:animate-chip-pop:hover .animate-3d-chip { animation: chip-pop 0.5s ease-in-out; }
          /* Custom scrollbar for portfolio grid and modal image carousel */
          .scrollbar-thin { scrollbar-width: thin; }
          .scrollbar-thumb-white\/10 { background: linear-gradient(90deg, #222 0%, #444 100%); border-radius: 8px; }
          .scrollbar-track-black { background: #111; }
          ::-webkit-scrollbar { width: 8px; height: 8px; background: #111; }
          ::-webkit-scrollbar-thumb { background: linear-gradient(90deg, #222 0%, #444 100%); border-radius: 8px; }
          ::-webkit-scrollbar-track { background: #111; }
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

      {/* Coming Soon Section */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/90 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border border-white/10">
            <svg className="w-16 h-16 text-white/60 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <h3 className="text-2xl font-bold text-white mb-4">More Case Studies Coming Soon!</h3>
            <p className="text-white/70 mb-6">
              I'm currently working with several exciting clients across various industries. 
              New case studies and success stories will be added regularly to showcase the latest results and innovations.
            </p>
            <p className="text-sm text-white/60">
              Interested in being featured in my next case study? Let's start your project today!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;