import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      id: 1,
      title: "Content Creation & Management",
      description: "Eye-catching posts, stories, and campaigns that engage your audience and reflect your brand's personality.",
      features: [
        "Custom graphic designs",
        "Engaging captions and hashtags",
        "Stories and Reels creation",
        "Content calendar planning",
        "Brand-consistent visuals"
      ],
      icon: (
        <svg className="w-12 h-12 text-pink-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Social Media Account Management",
      description: "Complete social media account management including posting, engagement, and community building.",
      features: [
        "Daily content posting",
        "Community engagement",
        "Follower growth strategies",
        "Performance monitoring",
        "Crisis management"
      ],
      icon: (
        <svg className="w-12 h-12 text-pink-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Strategy Development & Consulting",
      description: "Data-driven social media strategies tailored to your business goals and target audience.",
      features: [
        "Comprehensive audit",
        "Custom strategy development",
        "Target audience analysis",
        "Competitor research",
        "ROI optimization"
      ],
      icon: (
        <svg className="w-12 h-12 text-pink-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Brand Building & Positioning",
      description: "Helping brands establish a strong digital presence and authentic voice online.",
      features: [
        "Brand voice development",
        "Visual identity consistency",
        "Brand storytelling",
        "Reputation management",
        "Thought leadership content"
      ],
      icon: (
        <svg className="w-12 h-12 text-pink-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Analytics & Reporting",
      description: "Comprehensive performance tracking and detailed insights to measure your social media success.",
      features: [
        "Monthly performance reports",
        "Engagement analytics",
        "Growth tracking",
        "ROI analysis",
        "Strategy optimization recommendations"
      ],
      icon: (
        <svg className="w-12 h-12 text-pink-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Campaign Management",
      description: "End-to-end management of social media campaigns from planning to execution and analysis.",
      features: [
        "Campaign planning & strategy",
        "Creative development",
        "Multi-platform execution",
        "Real-time monitoring",
        "Performance optimization"
      ],
      icon: (
        <svg className="w-12 h-12 text-pink-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "Starting at ₹15,000",
      period: "/month",
      description: "Perfect for small businesses getting started with social media",
      features: [
        "2-3 social media platforms",
        "10 posts per month",
        "Basic analytics reporting",
        "Community management",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "Starting at ₹25,000",
      period: "/month",
      description: "Ideal for growing businesses looking to expand their reach",
      features: [
        "4-5 social media platforms",
        "20 posts per month",
        "Advanced analytics & insights",
        "Stories & Reels creation",
        "Priority support",
        "Monthly strategy consultation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      period: "",
      description: "Comprehensive solution for established businesses",
      features: [
        "All social media platforms",
        "Unlimited posts",
        "Complete campaign management",
        "Dedicated account manager",
        "24/7 support",
        "Custom strategy development",
        "Influencer partnerships"
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">My Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive social media solutions designed to help your brand thrive in the digital landscape
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-pink-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
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

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Service Packages</h2>
            <p className="text-lg text-gray-600">
              Choose the perfect package for your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg relative ${pkg.popular ? 'ring-2 ring-pink-500 scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-pink-600 mb-2">
                    {pkg.price}
                    <span className="text-lg text-gray-500 font-normal">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-pink-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 rounded-lg font-medium transition-colors block ${
                    pkg.popular
                      ? 'bg-pink-600 text-white hover:bg-pink-700'
                      : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Transform Your Social Media?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss your specific needs and create a custom solution that works for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors shadow-lg">
              Start Your Project
            </Link>
            <Link to="/portfolio" className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;