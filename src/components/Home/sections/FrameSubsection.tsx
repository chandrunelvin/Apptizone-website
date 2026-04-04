import { useNavigate } from 'react-router-dom';
import homeHeroReference from '../../../assets/home-hero-reference.png';

const FrameSubsection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden bg-[#4f4298]">
      <div className="absolute inset-0">
        <img
          src={homeHeroReference}
          alt=""
          className="h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-[#4f4298]/70" />
      </div>

      <div className="relative mx-auto w-full max-w-[1530px] px-6 pb-20 pt-28 md:px-[70px] md:pb-28 md:pt-36">
        <div className="pointer-events-none absolute left-8 top-30 text-[74px] font-bold leading-none text-[#e8d953] md:left-[58px] md:top-[162px] md:text-[110px]">
          #
        </div>

        <div className="pointer-events-none absolute right-2 top-20 hidden md:block md:w-[390px] lg:right-12 lg:top-24 lg:w-[470px]">
          <img
            src={homeHeroReference}
            alt="Running professional illustration"
            className="h-auto w-full object-cover object-[77%_22%] [clip-path:polygon(20%_71%,24%_52%,33%_34%,41%_20%,52%_18%,62%_8%,72%_3%,79%_17%,76%_33%,84%_35%,100%_52%,92%_72%,82%_77%,65%_70%,54%_62%,44%_73%,36%_90%)]"
          />
        </div>

        <h1 className="[font-family:'Black_Han_Sans',Helvetica] relative z-10 max-w-[980px] text-[clamp(50px,9vw,132px)] font-normal leading-[0.95] tracking-[0] text-[#dfe2f6] [text-shadow:6px_6px_1px_#2c2a66]">
          BUILT FOR
          <br />
          BRAND GROWTH.
        </h1>

        <div className="relative z-0 -mt-5 h-[22px] w-full max-w-[920px] rounded-[30px] bg-[#f0542e] md:-mt-7 md:h-[26px]" />

        <p className="[font-family:'Bricolage_Grotesque',Helvetica] relative z-10 mt-8 max-w-[980px] text-[clamp(18px,2.1vw,44px)] font-normal leading-[1.35] tracking-[0] text-[#ececff]">
          We help brands scale faster with performance-focused digital marketing
          strategies backed by real data, creativity, and technology.
        </p>

        <button
          onClick={() => navigate('/contact')}
          className="[font-family:'Bricolage_Grotesque',Helvetica] relative z-10 mt-8 h-[58px] w-[168px] rounded-xl bg-[#f0542e] text-[36px] leading-none text-white shadow-[6px_6px_1px_#2b2967] transition-all hover:bg-[#e14e2d] active:translate-y-[1px]"
        >
          Contact Us
        </button>

        <div className="pointer-events-none absolute right-6 top-[360px] hidden -rotate-[19deg] text-[128px] leading-none text-[#d6df59] md:block">
          ↩
        </div>
      </div>
    </section>
  );
};

export { FrameSubsection };
