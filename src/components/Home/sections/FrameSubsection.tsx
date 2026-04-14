import { Link } from 'react-router-dom';
import homeHeroReference from '../../../assets/home/home-hero-reference.png';

const FrameSubsection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#4f4298]">
      <Link
        to="/contact"
        aria-label="Go to contact page"
        className="block"
      >
        <div className="relative mx-auto aspect-[1530/1049] w-full max-w-[1530px] min-h-[250px] sm:min-h-[320px] md:min-h-[520px]">
          <img
            src={homeHeroReference}
            alt="Built for brand growth hero section"
            className="h-full w-full object-contain object-center"
          />
        </div>
      </Link>
    </section>
  );
};

export { FrameSubsection };
