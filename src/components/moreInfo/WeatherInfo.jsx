import React from "react";
import Pressure from "./Pressure";
import RealFeel from "./RealFeel";
import Direction from "./Direction";
import Sunset from "./Sunset";

const WeatherInfo = ({ countryData }) => {
  return (
    <div className="relative max-w-screen m-auto grid grid-cols-2 mt-8 gap-2 mb-10">
      <Pressure countryData={countryData} />
      <RealFeel countryData={countryData} />
      <Direction countryData={countryData} />
      <Sunset countryData={countryData} />
    </div>
  );
};

export default WeatherInfo;
