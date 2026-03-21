const FrameSubsection = () => {
  const handleContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#4f4298]">
      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-[60px] pt-[60px] md:px-[67px] md:pb-[120px] md:pt-[100px]">
        <h1 className="[font-family:'Black_Han_Sans',Helvetica] max-w-[1250px] text-[clamp(52px,9.5vw,144px)] font-normal leading-[1] tracking-[0] text-[#f5f6ff] [text-shadow:6px_6px_1px_#201f51]">
          BUILT FOR
          <br />
          BRAND GROWTH.
        </h1>

        <p className="[font-family:'Bricolage_Grotesque',Helvetica] mt-8 max-w-[900px] text-[clamp(16px,2.2vw,32px)] font-normal leading-[1.5] tracking-[0] text-white md:mt-10">
          We help brands scale faster with performance-focused digital marketing strategies backed by real data, creativity, and technology.
        </p>

        <div className="mt-10 md:mt-14">
          <button
            onClick={handleContact}
            className="[font-family:'Bricolage_Grotesque',Helvetica] h-[58px] w-[225px] whitespace-nowrap rounded-xl bg-[#f0542e] text-[clamp(20px,2vw,28px)] font-normal leading-normal tracking-[0] text-white shadow-[6px_6px_1px_#201f51] transition-all duration-200 hover:bg-[#d94a27] active:scale-95"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export { FrameSubsection };
