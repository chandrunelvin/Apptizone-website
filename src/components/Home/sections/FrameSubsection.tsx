import homeHeroReference from '../../../assets/home/home-hero-reference.png';

const FrameSubsection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#4f4298]">
      <div className="relative mx-auto aspect-[1530/1049] w-full max-w-[1530px] min-h-[360px] md:min-h-[520px]">
        <img
          src={homeHeroReference}
          alt="Built for brand growth hero section"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export { FrameSubsection };
