import React from "react";
// import ProgressBar from "./ProgressBar";
import DirectionStatus from "./DirectionStatus";

const Direction = ({ countryData }) => {
  return (
    <div className="h-44 relative w-[90%] mt-3 border-white border-2 rounded-2xl bg-[#bfbfbf]50 mx-4">
      <div className="w-full h-full bg-white/30 flex flex-col justify-start items-center py-4  rounded-2xl">
        <span className="text-neutral-200">Direction</span>
        <p className="text-2xl font-bold">North</p>
        {/* <ProgressBar percentage={88} color="text-cyan-400" /> */}
        <DirectionStatus direction={countryData.list[0].wind.deg} />
        {/* <p>{countryData.main.pressure}</p> */}
      </div>
    </div>
  );
};

export default Direction;
