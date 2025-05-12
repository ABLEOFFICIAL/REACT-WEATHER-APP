import React from "react";
import MyLocation from "./MyLocation";
import Mynotification from "./Mynotification";

const MyHeader = ({ onClick, countryData }) => {
  return (
    <div className="flex w-full justify-between items-center m-auto">
      <MyLocation countryData={countryData} onClick={onClick} />
      <Mynotification />
    </div>
  );
};

export default MyHeader;
