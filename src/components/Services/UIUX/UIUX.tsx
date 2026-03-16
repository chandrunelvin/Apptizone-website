import React from 'react';

const UIUX: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto pt-40 pb-12 px-4 sm:px-6 lg:px-8">
      <section className="text-center py-20 bg-blue-50 rounded-3xl shadow-sm border border-blue-100 mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          UI / UX <span className="text-blue-600">Design</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          User-centric design solutions that combine aesthetics with functionality to create unforgettable digital experiences.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'User Research', icon: '🔍', desc: 'Understanding your users to create products that solve real problems.' },
          { title: 'Wireframing', icon: '📐', desc: 'Laying the structural foundation for your digital product interfaces.' },
          { title: 'Visual Design', icon: '🎨', desc: 'Crafting beautiful and engaging visuals that align with your brand.' },
          { title: 'Prototyping', icon: '⚡', desc: 'Building interactive models to test and refine the user journey.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default UIUX;
