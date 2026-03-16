import React from 'react';

const WhatsAppMarketing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="text-center py-20 bg-emerald-50 rounded-3xl shadow-sm border border-emerald-100 mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          WhatsApp <span className="text-emerald-600">Marketing</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Connect with your customers directly on their favorite messaging app for higher engagement and conversions.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'Bulk Messaging', icon: '📤', desc: 'Reach thousands of customers instantly with targeted messages.' },
          { title: 'Personalized Campaigns', icon: '👤', desc: 'Customizing messages for each customer to increase engagement.' },
          { title: 'Automated Replies', icon: '🤖', desc: 'Providing instant responses to customer inquiries using smart bots.' },
          { title: 'Broadcast Lists', icon: '📢', desc: 'Organizing and managing your audience for better targeting.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-emerald-200 transition-colors">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WhatsAppMarketing;
