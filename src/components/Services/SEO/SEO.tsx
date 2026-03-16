import React from 'react';

const SEO: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="text-center py-20 bg-orange-50 rounded-3xl shadow-sm border border-orange-100 mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Search Engine <span className="text-orange-600">Optimization</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Boost your online visibility and drive organic traffic with our expert SEO strategies.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'Keyword Research', icon: '🔑', desc: 'Finding the most relevant terms your customers are searching for.' },
          { title: 'On-Page SEO', icon: '📄', desc: 'Optimizing individual pages to rank higher and earn more traffic.' },
          { title: 'Technical SEO', icon: '⚙️', desc: 'Improving your site structure for better crawling and indexing.' },
          { title: 'Link Building', icon: '🔗', desc: 'Building high-quality backlinks to increase your domain authority.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-orange-200 transition-colors">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SEO;
