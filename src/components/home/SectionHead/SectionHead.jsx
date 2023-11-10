import React from "react";

const SectionHead = ({ topic, label }) => {
  return (
    <div className=" w-full flex flex-col gap-5 items-start">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10 rounded-md bg-redHue"></div>
        <p className="text-redHue font-poppins text-base font-semibold">
          {topic ?? "topic"}
        </p>
      </div>
      <h2 className="font-inter font-semibold text-4xl tracking-[1.44px]">
        {label}
      </h2>
    </div>
  );
};

export default SectionHead;
