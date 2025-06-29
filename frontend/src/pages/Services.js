import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
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
    <div className="pt-20">
      {/* Hero Section */}
      {/*
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">My Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive social media solutions designed to help your brand thrive in the digital landscape
          </p>
        </div>
      </section>
      */}

      {/* Services Grid */}
      {/* No main services to display, so show a placeholder or remove the section for a cleaner look */}
      {/*
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
      */}

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

      {/* Individual Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">One-Time Services</h2>
            <p className="text-lg text-gray-600">Quick solutions for specific needs—no monthly commitment required.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {individualServices.map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-8 shadow-md flex flex-col items-center text-center border border-pink-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-pink-600 mb-2">{service.price}</div>
                <Link to="/contact" className="mt-auto bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors font-medium shadow">
                  Book Now
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

      {/* Get in Touch Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-4">For collaborations, inquiries, or to connect directly:</p>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <span className="text-gray-700 font-semibold">Instagram:</span>
              <a href="https://instagram.com/geetharangaseeli" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-8 h-8 text-pink-600 hover:text-pink-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;