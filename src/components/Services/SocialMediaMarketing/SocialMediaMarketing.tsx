import React from 'react';

const SocialMediaMarketing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="text-center py-20 bg-pink-50 rounded-3xl shadow-sm border border-pink-100 mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Social Media <span className="text-pink-600">Marketing</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Engage your audience and build your brand presence across all major social media platforms.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'Content Creation', icon: '📸', desc: 'Crafting visually stunning and engaging content that resonates.' },
          { title: 'Community Management', icon: '🤝', desc: 'Building relationships and engaging with your online community.' },
          { title: 'Influencer Marketing', icon: '🌟', desc: 'Partnering with key influencers to expand your reach.' },
          { title: 'Analytics & Reporting', icon: '📊', desc: 'Tracking and analyzing performance to drive growth.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-pink-200 transition-colors">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
