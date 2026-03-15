import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100 mb-12">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-6">
          Future of <span className="text-blue-600">Software</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          We build digital products that scale with your business needs and provide exceptional user experiences.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
          Get Started Now
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Web Development', icon: '🌐', desc: 'Modern, responsive websites built with the latest technologies.' },
          { title: 'Mobile Apps', icon: '📱', desc: 'Cross-platform mobile applications for iOS and Android.' },
          { title: 'Cloud Solutions', icon: '☁️', desc: 'Scalable cloud infrastructure and serverless architectures.' }
        ].map((service, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
