import React from 'react';
import Hero from './Hero';
import Mission from './Mission';
import WhyChooseUs from './WhyChooseUs';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-[#ecd65d] overflow-x-hidden w-full relative">
      <Hero />
      <Mission />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
