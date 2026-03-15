import React from 'react';
import Hero from './Hero';
import Mission from './Mission';
import Vision from './Vision';
import WhyChooseUs from './WhyChooseUs';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-[#ecd65d] overflow-x-hidden w-full relative">
      <Hero />
      <Mission />
      <Vision />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
