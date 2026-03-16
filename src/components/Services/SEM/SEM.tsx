import React from 'react';

const SEM: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="text-center py-20 bg-red-50 rounded-3xl shadow-sm border border-red-100 mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Search Engine <span className="text-red-600">Marketing</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Reach your audience instantly with our high-impact paid search and display campaigns.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'PPC Campaigns', icon: '💰', desc: 'Crafting targeted Pay-Per-Click ads that maximize ROI.' },
          { title: 'Display Ads', icon: '🖼️', desc: 'Engaging visual advertisements across the web to build brand awareness.' },
          { title: 'Remarketing', icon: '🔄', desc: 'Re-engaging users who have previously visited your website.' },
          { title: 'Ad Optimization', icon: '🧪', desc: 'Continuous testing and refining to improve campaign performance.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-red-200 transition-colors">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SEM;
