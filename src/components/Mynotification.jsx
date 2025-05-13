import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

const Mynotification = () => {
  return (
    <div className="flex w-20 justify-between">
      <IoIosNotificationsOutline size={30} className="stroke-1" />
      <MdDarkMode size={30} />
    </div>
  );
};

export default Mynotification;
