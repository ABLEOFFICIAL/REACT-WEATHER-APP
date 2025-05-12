import React from "react";
import Wind from "../images/wind.png";
import Humidity from "../images/humidity.png";
import "../index.css";

const MyInfo = ({ countryData }) => {
  const date = new Date();
  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="border-white border-2 rounded-2xl bg-[#bfbfbf]50 mx-4">
      <div className="w-full h-full bg-white/30 flex flex-col justify-between items-center py-4">
        <div className="text-center">
          <h6 className="text-xl [text-shadow:3px_3px_3px_grey]">
            Today, {date.getDate()} {months[date.getMonth()]}
          </h6>
          <h1 className="text-7xl [text-shadow:7px_7px_30px_black] font-bold my-4">
            {Math.round(countryData.main.temp)}°
          </h1>
          <h3 className="text-2xl [text-shadow:3px_3px_3px_grey] font-bold">
            {countryData.weather[0].main}
          </h3>
        </div>
        <div className="w-[70%] pt-5 pb-2">
          <div className=" w-[100%] flex pb-3">
            <div className="w-[50%] ">
              <img src={Wind} className="w-10 inline" />
              <span className="px-2">Wind</span>
            </div>
            <div>
              <span className="left-0.5">|</span>
              <span className="pl-4">
                {Math.round(countryData.wind.speed)} km/h
              </span>
            </div>
          </div>
          <div className=" w-[100%] flex">
            <div className="w-[50%] ">
              <img src={Humidity} className="w-8 inline" />
              <span className="px-2">Hum</span>
            </div>
            <div>
              <span className="left-0.5">|</span>
              <span className="pl-4">{countryData.main.humidity} %</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
