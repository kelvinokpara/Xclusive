import React from "react";
// import carousel from "./Carousel.module.css";
// import { Link } from "react-router-dom";
import CarouselTab from "./CarouselTab";
import { AiFillApple } from "react-icons/ai";

const slideData = [
  {
    img: "/Assets/home-assets/hero_carousel_phone.png",
    label: "iPhone 14 Series",
    icon: <AiFillApple />,
  },
  // {
  //   img: "/Assets/home-assets/arrival_playstation.png",
  //   label: "Play Station 4 & 5 Consoles",
  //   icon: <AiFillApple />,
  // },
  // {
  //   img: "/Assets/home-assets/hero_carousel_earbuds.png",
  //   label: "Cleer Ultra Noise-cancelling Earphones",
  //   icon: <AiFillApple />,
  // },
];

const Carousel = () => {
  return (
    <section className=" flex flex-row items-start justify-center px-0 mx-0 w-full">
      <ul className="py-10 pr-4 border-r max-lg:hidden w-1/6 flex gap-4 flex-col items-start">
        <li>Woman’s Fashion</li>
        <li>Men’s Fashion</li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby’s & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>

      {/*  */}
      <div className="md:pt-10 grid place-items-center md:pl-10 max-sm:w-full w-5/6 lg:w-[850px] max-w-5xl md:flex overflow-hidden ">
        {slideData.map((slide) => (
          <div className="lg:w-[850px] w-full">
            <CarouselTab
              img={slide.img}
              label={slide.label}
              icon={slide.icon}
              slide={slideData}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
