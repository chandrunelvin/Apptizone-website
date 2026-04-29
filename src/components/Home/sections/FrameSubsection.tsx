import { Link } from 'react-router-dom';
import homeHeroReference from '../../../assets/home/home-hero-reference.png';
import FloatingElement from '../../ui/FloatingElement';
import ScrollReveal from '../../ui/ScrollReveal';
import ParallaxBlock from '../../ui/ParallaxBlock';

const FrameSubsection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#4f4298]">
      <Link
        to="/contact"
        aria-label="Go to contact page"
        className="block"
      >
        <div className="relative mx-auto aspect-[1530/1049] w-full max-w-[1530px] min-h-[250px] sm:min-h-[320px] md:min-h-[520px]">
          <ScrollReveal className="h-full w-full" distance={34} blur={10} scale={0.97}>
            <ParallaxBlock className="h-full w-full" speed={0.06}>
              <FloatingElement className="h-full w-full" amplitude={8} duration={6.5}>
                <img
                  src={homeHeroReference}
                  alt="Built for brand growth hero section"
                  className="h-full w-full object-contain object-center transition-transform duration-700 hover:scale-[1.01]"
                />
              </FloatingElement>
            </ParallaxBlock>
          </ScrollReveal>
        </div>
      </Link>
    </section>
  );
};

export { FrameSubsection };
