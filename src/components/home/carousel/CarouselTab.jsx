import React, { useState } from "react";
import { AiFillApple, AiOutlineArrowRight } from "react-icons/ai";

const CarouselTab = ({ img, label, icon, slide }) => {
  const [curr, setCurr] = useState(0);
  const next = () => {
    setCurr((curr) => (curr === slide.length - 1 ? 0 : curr + 1));
    console.log(curr, "don");
  };
  console.log(slide.length, "img");
  // setInterval(() => {
  //   next();
  // }, 5000);
  return (
    <div
      className={`bg-black lg:w-[850px] flex justify-between items-center max-md:flex-col relative overflow-hidden transition-transform ease-out duration-300 translate-x-[-${
        curr * 100
      }%]`}
    >
      <div className="flex flex-col gap-8 md:items-start items-center p-14 w-full">
        <div className="flex gap-4 items-center text-white">
          <div className="text-3xl">{icon ?? <AiFillApple />}</div>
          <p>{label ?? "Iphone 14 series"}</p>
        </div>
        <h1 className="font-semibold leading-[60px] tracking-[1.92px] font-inter text-white text-5xl md:text-left">
          Up to 10% off Voucher
        </h1>
        <div>
          <div className="group text-white border-b border-b-white lg:text-base text-sm flex gap-4 items-center py-2 hover:border-b-white transition-all duration-150">
            Shop now
            <AiOutlineArrowRight className="group-hover:translate-x-2 transition-all duration-150" />
          </div>
        </div>
      </div>
      <img
        src={img ?? "/Assets/home-assets/hero_carousel_phone.png"}
        alt=""
        className=" w-full md:w-3/6"
      />
      {/* <div className={carousel.buttonContainer}>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div> */}
    </div>
  );
};

export default CarouselTab;
