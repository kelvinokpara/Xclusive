import React from "react";
import Carousel from "../../components/home/carousel/Carousel";
import FlashSales from "../../components/home/Sections/FlashSales";
import BestSelling from "../../components/home/Sections/BestSelling";
import ProductSection from "../../components/home/Sections/ProductSection";
import CtaSection from "../../components/home/Sections/CtaSection";
import NewArrivals from "../../components/home/Sections/NewArrivals";

const Homescreen = () => {
  return (
    <div className="flex flex-col lg:gap-36 sm:gap-24 gap-12">
      <section>
        <Carousel />
      </section>
      <section className="max-md: px-10">
        <FlashSales />
      </section>
      <section className="max-md: px-10">
        <BestSelling />
      </section>
      <section>
        <CtaSection />
      </section>
      <section className="max-md: px-10">
        <ProductSection />
      </section>
      <section className="max-md: px-10">
        <NewArrivals />
      </section>
    </div>
  );
};

export default Homescreen;
