import React from "react";
import { IoArrowBack } from "react-icons/io5";

const SearchBar = ({ onClick, searchValue, onChange }) => {
  return (
    <div className="relative">
      <IoArrowBack
        onClick={onClick}
        size={25}
        className="absolute text-black top-3 left-4"
      />
      <input
        type="text"
        name="search"
        placeholder="Search here"
        className="bg-white shadow-xl pl-13 w-full pr-2 py-3 rounded-lg text-md focus:outline-0 text-black"
        value={searchValue}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
