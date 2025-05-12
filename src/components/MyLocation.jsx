import React from "react";
import Location from "./Location";
import { RiArrowDropDownLine } from "react-icons/ri";

const MyLocation = ({ onClick, countryData }) => {
  return (
    <div className="w-[50%] flex items-center justify-between">
      <Location />
      <h3 className="font-bold text-md text-center">{countryData.name}</h3>
      <RiArrowDropDownLine onClick={onClick} size={40} />
    </div>
  );
};

export default MyLocation;
