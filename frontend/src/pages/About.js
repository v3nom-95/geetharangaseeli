import React from 'react';

function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate social media enthusiast who loves helping brands tell their stories 
              and connect with their audiences in meaningful ways.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/r1.jpeg" 
                alt="Professional at work" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">My Journey</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a freelance social media manager and strategist, I bring fresh perspectives and creative 
                solutions to help businesses thrive in the digital landscape. My passion lies in creating 
                authentic connections between brands and their audiences through strategic content and 
                meaningful engagement.
              </p>
              
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
                    <h4 className="font-semibold text-gray-800">Creative Marketing Enthusiast</h4>
                    <p className="text-gray-600">Passionate about creating engaging content and building meaningful brand connections</p>
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
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Expertise</h2>
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
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Platform Management</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Engagement Strategy</span>
              </div>
            </div>

            {/* Content Strategist */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Content Strategist</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Specializing in developing content strategies that align with your brand voice and business goals, ensuring every piece of content has purpose and impact.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Content Planning</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Editorial Strategy</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Brand Messaging</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Storytelling</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Content Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything I do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Authentic Connections</h3>
              <p className="text-gray-600">
                I believe in creating genuine relationships between brands and their audiences, not just followers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Creative Excellence</h3>
              <p className="text-gray-600">
                Every piece of content I create is crafted with creativity and attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Results-Driven</h3>
              <p className="text-gray-600">
                I focus on strategies that deliver measurable results and contribute to your business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;