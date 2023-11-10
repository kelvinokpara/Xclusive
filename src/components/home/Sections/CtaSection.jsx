import React from "react";

const CtaSection = () => {
  return (
    <div className=" bg-black text-white flex max-lg:flex-col items-center gap-12 px-14 py-16">
      <div className="w-1/3 flex flex-col items-center md:items-start gap-8">
        <p className="text-greenHue1 font-poppins font-semibold text-base">
          Categories
        </p>
        <h2 className="font-inter text-4xl font-semibold sm:text-left ">
          Enhance Your Music Experience
        </h2>
        <div className="hidden md:flex items-center gap-6">
          <div className="rounded-full w-16 h-16 bg-white text-black p-2 flex flex-col justify-center items-center">
            <h4 className="text-sm font-medium">23</h4>
            <p className="text-xs">Hours</p>
          </div>
          {/*  */}
          <div className="rounded-full w-16 h-16 bg-white text-black p-2 flex flex-col justify-center items-center">
            <h4 className="text-sm font-medium">05</h4>
            <p className="text-xs">Days</p>
          </div>
          {/*  */}
          <div className="rounded-full w-16 h-16 bg-white text-black p-2 flex flex-col justify-center items-center">
            <h4 className="text-sm font-medium">59</h4>
            <p className="text-xs">Minutes</p>
          </div>
          {/*  */}
          <div className="rounded-full w-16 h-16 bg-white text-black p-2 flex flex-col justify-center items-center">
            <h4 className="text-sm font-medium">35</h4>
            <p className="text-xs">Seconds</p>
          </div>
          {/*  */}
        </div>
      </div>
      <img
        src="/Assets/home-assets/hero_cta_speaker.png"
        alt=""
        className="lg:max-w-xl max-md:w-[300px]"
      />
    </div>
  );
};

export default CtaSection;
