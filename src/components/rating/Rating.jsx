import React from "react";
import { AiFillStar } from "react-icons/ai";

function Rating() {
  return (
    <div className=" flex justify-between">
      <div className="flex items-center text-base ratng-gold">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <span className="text-slate-400 text-xs">(65)</span>
    </div>
  );
}

export default Rating;
